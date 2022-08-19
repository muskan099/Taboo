import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Container,
 Form,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { createNftSaga } from "../store/reducers/nftReducer";
import { ipfsMint } from "../helpers/ipfs";
import { Mint } from "../helpers/Mint";

const CreateNft = () => {
  const dispatch = useDispatch();

  /* const {
       nft,
      } = useSelector((state) => state.nft); */

  const navigate = useNavigate();

  const { nft, isLoading } = useSelector((state) => state.nft);

  const { isAuthenticated, walletAddress, balance, tier } = useSelector(
    (state) => state.auth
  );

  const [name, setName] = useState("");

  const [metaTag, setMetaTag] = useState("");

  const [price, setPrice] = useState("");

  const [quantity, setQuantity] = useState(1);

  const [category, setCategory] = useState("");

  const [description, SetDescription] = useState("");

  const [createStart, setCreateStart] = useState(false);

  const [chain, setChain] = useState("");
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    socialmedia: "",
    message: "",
  };
  const [data, setData] = useState(initialValues);
  
  const [availableTo, setAvailableTo] = useState({
    t1: false,
    t2: false,
    t3: false,
  });
  const [photo, setPhoto] = useState({
    loading: false,
    file: null,
    photoUrl: null,
  });

  const [contentImage, setContentImage] = useState(null);

  const { file, photoUrl, loading } = photo;

  const photoUploadHandler = (event, setState) => {
    const { files } = event.target;

    const reader = new window.FileReader();
    reader.readAsArrayBuffer(files[0]);

    reader.onloadend = () => {
      setContentImage(reader.result);
    };
console.log({files})
    if (files[0]) {
      if (files[0].type.includes("video")) {
        const filename = files[0].name;
        const fileExtension = filename.substr(filename.lastIndexOf(".") + 1);
        
        setState({
            file: event.currentTarget.files[0],
            photoUrl: URL.createObjectURL(files[0]),
          })
        if (
          fileExtension.toLowerCase() === "png" ||
          fileExtension.toLowerCase() === "jpg" ||
          fileExtension.toLowerCase() === "gif" ||
          fileExtension.toLowerCase() === "jpeg" ||
          fileExtension.toLowerCase() === "webp" ||
          fileExtension.toLowerCase() === "mp4" ||
          fileExtension.toLowerCase() === "mov"
        ) {
        //   setState({
        //     file: event.currentTarget.files[0],
        //     photoUrl: URL.createObjectURL(files[0]),
        //   });
        }
      }
    }
  };

  const handleName = (e) => {
    let value = e.target.value;

    if (value) {
      setName(value);
    }
  };

  const handleMetaTag = (e) => {
    let value = e.target.value;

    if (value) {
      setMetaTag(value);
    }
  };

  const handleDescription = (e) => {
    let value = e.target.value;

    if (value) {
      SetDescription(value);
    }
  };

  const handlePrice = (e) => {
    let value = e.target.value;

    if (isNaN(value)) {
      e.target.value = "";
    } else {
      setPrice(value);
    }
  };

  const handleQuantity = (e) => {
    let value = e.target.value;

    if (isNaN(value)) {
      //alert("hell")
      setQuantity("");
    } else {
      if (value) {
        setQuantity(value);
      }
    }
  };

  const handleCategory = (e) => {
    let value = e.target.value;

    if (value) {
      setCategory(value);
    }
  };

  const handleChain = (e) => {
    let value = e.target.value;

    if (value) {
      setChain(value);
    }
  };
  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: e.target.value });
    console.log([name]);
    console.log(value);
    console.log(data);
  };
  const handleSubmit = async (e) => {
    const available_to = [];
    const pattern = /^[A-Za-z]+$/;
    const space = /^[a-zA-Z\s]*$/;
    const alphaNumeric = /[^a-zA-Z0-9\-\/]^[a-zA-Z\s]*$/;
  
    for (let i in availableTo) {
      if (i === "t1" && availableTo[i] === true) available_to.push("1 Tier");
      if (i === "t2" && availableTo[i] === true) available_to.push("2 Tier");
      if (i === "t3" && availableTo[i] === true) available_to.push("3 Tier");
    }

    if (file == null || file === "") {
      toast.error("Please select NFT Image!");
    } else if (metaTag === "") {
      toast.error("Meta tag is required!");
    } else if (alphaNumeric.test(metaTag)) {
      toast.error("Meta tag is can only be alphabet and numbers");
    } else if (name === "") {
      toast.error("Name is required!");
    } else if (!pattern.test(name) && pattern.test(space)) {
      toast.error("Name can only be alphabets");
    } else if (description == "") {
      toast.error("Description is required!");
    } else if (!pattern.test(description)&& pattern.test(space)) {
      toast.error("Description can only be alphabets!");
    } else if (price == "") {
      toast.error("Price is required!");
    } else if (isNaN(price)) {
      toast.error("Please enter correct price!");
    } else if (quantity == "") {
      toast.error("Quantity is required!");
    } else if (isNaN(quantity)) {
      toast.error("Please enter correct quantity!");
    } else if (category == "") {
      toast.error("category is required!");
    } else if (chain == "") {
      toast.error("Please select chain!");
    } else if (available_to.length == 0) {
      toast.error("Please select atlease one tier");
    } else {
      setCreateStart(true);

      setPhoto({ ...photo, loading: true });

      const data = { name: name, price: price, description: description };

      let ipfs_hash = await ipfsMint(contentImage, data);
      let voucher = await Mint(ipfs_hash, price);

      console.log("voucher", voucher.address);
      const formData = new FormData();
      console.log("file", file);
      formData.append("file", file);
      formData.append("name", name);
      formData.append("meta_tag", metaTag);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("quantity", quantity);
      formData.append("category", category);
      formData.append("ipfs", ipfs_hash);
      formData.append("signature", voucher.voucher.signature);

      formData.append("token_id", voucher.voucher.tokenId);

      formData.append("user_id", "62733f0715eb380c440489ee");

      formData.append("wallet_address", voucher.address);

      formData.append("available_to", available_to);

      dispatch(createNftSaga(formData));

      toast.success("Nft created successfully!");

      setCreateStart(false);

      setTimeout(navigate("/explore"), 120000);
    }
  };

  return (
    <>
      <section className="crate-page-sec">
        <Container>
          <Row>
            <Col md={12} sm={12} xs={12}>
              <h3 className="main-heading-inner mb-0">
                <a href="">
                  <img src={"images/right-arrow.png"} />
                </a>{" "}
                Model Registration
              </h3>
              <div>
                <Row>
                  <Col md={8} sm={8} xs={12}>
                    <div className="outer-create-form">
                     
                      <ul class="select-transaction-list">
                     
                       
                      </ul>

                      <div class="upload-img-box">
                        <div>
                          <div>PNG,JPG,GIF,WEBP or MP4, Max 20mb</div>
                          <div class="upload-btn-wrapper">
                            <button class="blue-btn">Upload</button>
                            <input
                              type="file"
                              name="file"
                              onChange={(e) => photoUploadHandler(e, setPhoto)}
                            />
                          </div>
                        </div>
                      </div>
{console.log({photoUrl})}
<Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          required
                          name="name"
                          onChange={handleData}
                          placeholder=""
                          value={data.name}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="number"
                          pattern="[0-9]{10}"
                          required
                          name="phone"
                          onChange={handleData}
                          placeholder=""
                          value={data.phone}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          required
                          name="email"
                          onChange={handleData}
                          placeholder=""
                          value={data.email}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="number"
                          pattern="[0-9]{10}"
                          required
                          name="phone"
                          onChange={handleData}
                          placeholder=""
                          value={data.phone}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                          type="number"
                          pattern="[0-9]{10}"
                          required
                          name="phone"
                          onChange={handleData}
                          placeholder=""
                          value={data.phone}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Height</Form.Label>
                        <Form.Control
                          type="number"
                          pattern="[0-9]{10}"
                          required
                          name="phone"
                          onChange={handleData}
                          placeholder=""
                          value={data.phone}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control
                          type="number"
                          pattern="[0-9]{10}"
                          required
                          name="phone"
                          onChange={handleData}
                          placeholder=""
                          value={data.phone}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Chest Size</Form.Label>
                        <Form.Control
                          type="number"
                          pattern="[0-9]{10}"
                          required
                          name="phone"
                          onChange={handleData}
                          placeholder=""
                          value={data.phone}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Insta Link</Form.Label>
                        <Form.Control
                          type="text"
                          required
                          name="socialmedia"
                          onChange={handleData}
                          placeholder=""
                          value={data.socialmedia}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Facebook Link</Form.Label>
                        <Form.Control
                          type="text"
                          required
                          name="socialmedia"
                          onChange={handleData}
                          placeholder=""
                          value={data.socialmedia}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Youtube Link</Form.Label>
                        <Form.Control
                          type="text"
                          required
                          name="socialmedia"
                          onChange={handleData}
                          placeholder=""
                          value={data.socialmedia}
                        />
                      </Form.Group>
                    

                      <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          onKeyUp={(e) => handleDescription(e)}
                        />
                      </Form.Group>

                    

                      <Row>
                        <Col md={4} sm={4} xs={12}>
                        
                        </Col>
                       
                       
                      </Row>

                      <div>
                        <button
                          className="blue-btn"
                          disabled={createStart}
                          onClick={(e) => handleSubmit(e)}
                        >
                          {createStart ? "Processing" : "Create Item"}
                        </button>
                      </div>
                    </div>
                  </Col>
                  <Col md={4} sm={4} xs={12}>
                    <div className="mt-4">
                      <div class="outer-explor-box mt-0">
                        {photoUrl && (
                          <video
                            className="img-main"
                           
                            width={200}
                      >
                           <source src={photo.photoUrl} />
                      </video>
                        )}

                        {/* <img className="img-main"  src={"images/Team/team7.png"} />  */}

                        <div className="exploror-list-box">
                          <div className="price-line">
                            <h5>
                              {name}
                              <span>{quantity}</span>{" "}
                            </h5>
                            <h6>{price} Taboo</h6>
                          </div>
                          <div className="stoke-line d-none">
                            <ul>
                              <li>
                                <img src={"images/Team/team4.png"} />
                              </li>
                              <li>
                                <img src={"images/Team/team2.png"} />
                              </li>
                              <li>
                                <img src={"images/Team/team3.png"} />
                              </li>
                            </ul>
                            {/*<h6>3 in stock</h6>  */}
                          </div>
                          <hr></hr>
                          <div class="bid-row d-none">
                            <span>
                              <img src={"images/up-arrow.png"} /> Highest Bid
                            </span>
                            <span>
                              <b>0 $ Taboo</b>
                            </span>
                            <span>
                              {" "}
                              New Bid <img src={"images/up-arrow.png"} />{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CreateNft;
