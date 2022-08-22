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
import axios from "axios";

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

 
  const [description, SetDescription] = useState("");
  const [phone,setPhone] = useState("");
  const [age,setAge] = useState("");
  const [email,setEmail] = useState("");
  const [height,setHeight] = useState("");
  const [weight,setWeight] = useState("");
  const [chest,setChest] = useState("");
  const [instaLink,setInstaLink] = useState("");
  const [facebookLink,setFacebookLink] = useState("");
  const [youtubeLink,setYoutubeLink] = useState("");


  const [createStart, setCreateStart] = useState(false);


  
  

  
  
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

  

  const handleDescription = (e) => {
    let value = e.target.value;

    if (value) {
      SetDescription(value);
    }
  };

 
  const handleName = (e) => {
    let value = e.target.value;

    if (value) {
      setName(value);
    }
  };
  const handleEmail = (e) => {
    let value = e.target.value;

    if (value) {
      setEmail(value);
    }
  };
  const handleAge = (e) => {
    let value = e.target.value;

    if (value) {
      setAge(value);
    }
  };
  const handlePhone = (e) => {
    let value = e.target.value;

    if (value) {
      setPhone(value);
    }
  };
  const handleWeight = (e) => {
    let value = e.target.value;

    if (value) {
      setWeight(value);
    }
  };
  const handleHeight = (e) => {
    let value = e.target.value;

    if (value) {
      setHeight(value);
    }
  };
  const handleChest = (e) => {
    let value = e.target.value;

    if (value) {
      setChest(value);
    }
  };
  const handleYoutubeLink = (e) => {
    let value = e.target.value;

    if (value) {
      setYoutubeLink(value);
    }
  };
  const handleInstaLink = (e) => {
    let value = e.target.value;

    if (value) {
      setInstaLink(value);
    }
  };
  const handleFacebookLink = (e) => {
    let value = e.target.value;

    if (value) {
      setFacebookLink(value);
    }
  };
  const handleSubmit = async (e) => {
   
    const space = /^[a-zA-Z\s]*$/;
    const alphaNumeric = /[^a-zA-Z0-9\-\/]^[a-zA-Z\s]*$/;
    const regex = /\S+@\S+\.\S+/;
    const pattern = /^[A-Za-z]+$/;
    const urlRegex =
      /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;
      const heightRegex = /^([1-2]?[0-9]{1,3})\'([0-9]|[0-1]{2})\"$/;
  
    
    if (file == null || file === "") {
      toast.error("Please select a video");
    } else if (name === "") {
      toast.error("Name is required!");
    } else if (name.length < 5) {
      toast.warn("fullname must be greater than 5 letters");
    } else if (!pattern.test(name)) {
      toast.warn("Name can only be alphabets");
    }else if (!phone) {
      toast.warn("Phone Number is missing!");
      return;
    } else if (phone.length < 9 || phone.length > 10) {
      toast.warn("phoneNumber must be 10 digit");
      return;
    } else if (!email) {
      toast.warn("Email is missing!");
      return;
    }  else if (!age) {
      toast.warn("AGE is missing!");
      return;
    } else if (age.length > 2) {
      toast.warn("age must be 2 digit");
      return;
    } else if (!height) {
      toast.warn("height is missing!");
      return;
    } else if (!weight) {
      toast.warn("weight is missing!");
      return;
    } else if (weight.length > 2) {
      toast.warn("weight must be 2 digit");
      return;
    }else if (!chest) {
      toast.warn("chest is missing!");
      return;
    } else if (chest.length > 2) {
      toast.warn("chest must be 2 digit");
      return;
    } else if (!instaLink) {
      toast.warn("Insta Link is missing!");
      return;
    }  else if (!urlRegex.test(instaLink)) {
      toast.warn("Instagram link is not in correct format");
      return;
    }else if (!facebookLink) {
      toast.warn("Facebook Link is missing!");
      return;
    } else if (!youtubeLink) {
      toast.warn(" Youtube link is missing!");
      return;
    } else if (description == "") {
      toast.error("Description is required!");
    } else {
      setCreateStart(true);

      setPhoto({ ...photo, loading: true });

      
      const formData = new FormData();
     
      formData.append("file", photo);
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("age", age);
      formData.append("chest", chest);
      formData.append("weight", weight);
      formData.append("height", height);
      formData.append("instaLink", instaLink);
      formData.append("facebookLink", facebookLink);
      formData.append("youtubeLink", youtubeLink);
      
      formData.append("description", description);
      console.log({file,name,email,age,chest,weight})
      console.log({formData})

     
const res = await axios.post('https://test.taboo.io/users/modelRegister', formData)
console.log(res)
if(res.data.status){
  setCreateStart(false);
  toast.success("Your Profile is under review. We will update you once its approved.");
}

      // dispatch(createNftSaga(formData));

      // toast.success("Nft created successfully!");

      // setCreateStart(false);

      // setTimeout(navigate("/explore"), 120000);
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
                          <div> MP4,MOV, Max 30mb</div>
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
<Form.Group className="mb-4">
<Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          onKeyUp={(e) => handleName(e)}
                          placeholder="Enter Your Name"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="number"
                          pattern="[0-9]{10}"
                          required
                          name="phone"
                       
                          placeholder=""
                          onKeyUp={(e) => handlePhone(e)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          required
                          name="email"
                        
                          placeholder=""
                          onKeyUp={(e) => handleEmail(e)}
                        />
                      </Form.Group>
                   
                      <Form.Group className="mb-3">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                          type="number"
                          pattern="[0-9]{10}"
                          required
                          name="age"
                        
                          placeholder=""
                          onKeyUp={(e) => handleAge(e)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Height</Form.Label>
                        <Form.Control
                          type="text"
                        required
                          name="height"
                        placeholder="Height (in ft'inches)"
                          onKeyUp={(e) => handleHeight(e)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Weight (in inch)</Form.Label>
                        <Form.Control
                          type="number"
                          pattern="[0-9]{10}"
                          required
                          name="weight"
                        
                          placeholder=""
                          onKeyUp={(e) => handleWeight(e)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Chest Size (in inch)</Form.Label>
                        <Form.Control
                          type="number"
                          pattern="[0-9]{10}"
                          required
                          name="chestsize"
                        
                          placeholder=""
                          onKeyUp={(e) => handleChest(e)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Insta Link</Form.Label>
                        <Form.Control
                          type="text"
                          required
                          name="instalink"
                         
                          placeholder=""
                          onKeyUp={(e) => handleInstaLink(e)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Facebook Link</Form.Label>
                        <Form.Control
                          type="text"
                          required
                          name="facebooklink"
                         
                          placeholder=""
                          onKeyUp={(e) => handleFacebookLink(e)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Youtube Link</Form.Label>
                        <Form.Control
                          type="text"
                          required
                          name="youtubelink"
                      
                          placeholder=""
                          onKeyUp={(e) => handleYoutubeLink(e)}
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
                          {createStart ? "Processing" : "Submit"}
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
                            
                            </h5>
                          
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
