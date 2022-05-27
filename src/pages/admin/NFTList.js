import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { axios } from "../../http";
import { createAuction } from "../../helpers/AuctionHelper";
import { Transaction } from "../../helpers/Transaction";
import { NFTBalance } from "../../helpers/NFTBalance";
import Connect from "../../helpers/Connect";
import {
  Row,
  Col,
  Container,
  Tabs,
  Tab,
  Table,
  Modal,
  FormControl,
  Button,
  InputGroup,
  Form,
  Dropdown,
} from "react-bootstrap";

const NFTList = () => {
  //const dispatch = useDispatch();

  /* const {
         nft,
        } = useSelector((state) => state.nft); */

  const navigate = useNavigate();

  // const { nft, isLoading } = useSelector((state) => state.nft);

  const [nft, setNft] = useState("");

  const [show, setShow] = useState(false);

  const [ANft, setANft] = useState("");
  console.log(ANft);

  const [auctionData, setAuctionData] = useState({
    minPrice: 0,
    startTime: "",
    endTime: "",
    isLoading: false,
    buttonMessage: "",
  });

  const { isLoading, buttonMessage } = auctionData;
  const handleAuctionInput = (e) => {
    let value = e.target.value;
    if (e.target.name === "minPrice") {
      if (!isNaN(value)) {
        setAuctionData((p) => ({ ...p, [e.target.name]: value }));
      }
    } else {
      setAuctionData((p) => ({ ...p, [e.target.name]: value }));
    }
  };

  const [minPrice, setMinPrice] = useState(0);

  const [startTime, setStartTime] = useState("");

  const [endTime, setEndTime] = useState("");

  const handleClose = () => {
    setShow(false);
  };

  const handleStartAuction = (value) => {
    setShow(true);

    setANft(value);
  };

  const handleMinPrice = (e) => {
    let value = e.target.value;

    if (isNaN(value)) {
      e.target.value = "";
    } else {
      setMinPrice(value);
    }
  };

  const handleStartTime = (e) => {
    let value = e.target.value;

    if (value) {
      setStartTime(value);
    }
  };

  const handleEndTime = (e) => {
    let value = e.target.value;

    if (value) {
      setEndTime(value);
    }
  };

  const handleAuction = async () => {
    if (auctionData.minPrice == "" || auctionData.minPrice == 0) {
      toast.warn("Min price is required!");
    } else if (auctionData.startTime == "") {
      toast.warn("Start time is required!");
    } else if (auctionData.endTime == "") {
      toast.warn("End time is required");
    } else {
      setAuctionData((p) => ({
        ...p,
        isLoading: true,
        buttonMessage: "Processing Please Wait...",
      }));
      let address = await Connect();
      console.log("anft", ANft);
      let tx = await createAuction(
        ANft.nftToken,
        auctionData.minPrice,
        0,
        0,
        0,
        auctionData.endTime,
        0,
        auctionData.startTime,
        ANft.ipfs,
        address[0]
      );
      console.log("tx", tx);
      let data = { tx: tx };
      try {
        let trx = await Transaction(data);
        if (trx) {
          let token = await NFTBalance();
          console.log("token", token);
          let res = await axios.post("/update-content", {
            content_id: ANft._id,
            status: "auction",
            token: token,
            bid_price: auctionData.minPrice,
          });
        }
        toast.success("Auction Started Successfully!");
        setAuctionData((p) => ({ ...p, isLoading: false, buttonMessage: "" }));
        handleClose();
      } catch (error) {
        toast.error(error.message);
        setAuctionData((p) => ({ ...p, isLoading: false, buttonMessage: "" }));
      }
    }
  };

  console.log("nft", nft.data);

  const getData = async (page, limit = 60, query) => {
    const res = await axios.post("/content-list", {
      page: page,
      limit: limit,
      query: query,
    });

    if (res.data) {
      setNft(res.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section className="creater-dash-sec">
        <Container fluid className="p-0">
          <Row>
            <Col lg={1} md={12} sm={12} xs={12}>
              <div className="sidemenu-creater">
                <ul>
                  <li className="active">
                    <a href="">
                      <img
                        className="img-fluid m-0"
                        src={"images/dashboard.png"}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img className="img-fluid m-0" src={"images/list.png"} />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="img-fluid m-0"
                        src={"images/list22.png"}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={11} md={12} sm={12} xs={12}>
              <div className="top-collect-creater nft-collector">
                <div className="nft-list-btn-row">
                  <h3 className="main-heading-inner mb-0"> NFT List</h3>
                  <a className="common-btn" href="">
                    Export to Exel
                  </a>
                  <a className="common-btn" href="">
                    Export to CSV
                  </a>
                </div>

                <div className="filer-right-box allcategory-filter filter-nft-list">
                  <div className="outer-multiple-drop">
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        All Paintings Name
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        All Category
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        Type
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        Status
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div className="newsletter-box m-0">
                    <InputGroup className="m-0">
                      <FormControl
                        placeholder="Search....."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <Button>
                        <img
                          className="search-icon"
                          src={"images/icons-Search-Line.png"}
                          alt="logo"
                        />
                      </Button>
                    </InputGroup>
                  </div>
                </div>

                <div className="shadow-box ">
                  <Table className="table-tank" responsive>
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Collection</th>
                        <th>Artist Name</th>
                        <th>YOP</th>
                        <th>Sub Category</th>
                        <th>For Sale</th>
                        <th>Basic Price</th>
                        <th>Featured</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {nft &&
                        nft.data.map((item, index) => (
                          <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>
                              <div class="owner-row-outer">
                                <img src={item.image} />
                                <div>
                                  <h5>{item.name}</h5>
                                </div>
                              </div>
                            </td>

                            <td>{item.userinfo.name}</td>
                            <td>-</td>
                            <td>{item.category}</td>
                            <td>Yes</td>
                            <td>{item.price} Taboo</td>
                            <td>
                              <div className="text-center">
                                {["checkbox"].map((type) => (
                                  <div
                                    key={`default-${type}`}
                                    className="text-center"
                                  >
                                    <Form.Check
                                      type={type}
                                      id={`default-${type}`}
                                      label={` `}
                                    />
                                  </div>
                                ))}
                              </div>
                            </td>
                            <td>
                              <span className="status-box">Approved</span>
                            </td>
                            <td>
                              <a href="" className="view-icon">
                                <i className="fa fa-eye"></i>
                              </a>
                              {item.status === "active" && (
                                <a
                                  href="#"
                                  className="view-icon"
                                  onClick={() => handleStartAuction(item)}
                                >
                                  <i className="fa fa-plus"></i>
                                </a>
                              )}
                            </td>
                          </tr>
                        ))}

                      {/*  <tr>
                                  <td>01</td>
                                  <td>
                                      <div class="owner-row-outer">
                                          <img src="images/Team/team7.png" />
                                          <div><h5>Clementines Nightmare</h5></div>
                                      </div>
                                  </td>
                                 
                                  <td>
                                        Sam G
                                  </td>
                                  <td>
                                        -
                                  </td>
                                  <td>
                                       Art
                                  </td>
                                  <td>
                                       Yes
                                  </td>
                                  <td>
                                      100 ETH
                                  </td>
                                  <td>

                        <td>Sam G</td>
                        <td>-</td>
                        <td>Art</td>
                        <td>Yes</td>
                        <td>100 ETH</td>
                        <td>
                          <div className="text-center">
                            {["checkbox"].map((type) => (
                              <div
                                key={`default-${type}`}
                                className="text-center"
                              >
                                <Form.Check
                                  type={type}
                                  id={`default-${type}`}
                                  label={` `}
                                />
                              </div>
                            ))}
                          </div>
                        </td>
                        <td>
                          <span className="status-box">Approved</span>
                        </td>
                        <td>
                          <a href="" className="view-icon">
                            <i className="fa fa-eye"></i>
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>01</td>
                        <td>
                          <div class="owner-row-outer">
                            <img src="images/Team/team7.png" />
                            <div>
                              <h5>Clementines Nightmare</h5>
                            </div>
                          </div>
                        </td>

                        <td>Sam G</td>
                        <td>-</td>
                        <td>Art</td>
                        <td>Yes</td>
                        <td>100 ETH</td>
                        <td>
                          <div className="text-center">
                            {["checkbox"].map((type) => (
                              <div
                                key={`default-${type}`}
                                className="text-center"
                              >
                                <Form.Check
                                  type={type}
                                  id={`default-${type}`}
                                  label={` `}
                                />
                              </div>
                            ))}
                          </div>
                        </td>
                        <td>
                          <span className="status-box">Approved</span>
                        </td>
                        <td>
                          <a href="" className="view-icon">
                            <i className="fa fa-eye"></i>
                          </a>
                        </td>
                      </tr>



                               
                                <tr>
                                  <td>01</td>
                                  <td>
                                      <div class="owner-row-outer">
                                          <img src="images/Team/team7.png" />
                                          <div><h5>Clementines Nightmare</h5></div>
                                      </div>
                                  </td>
                                 
                                  <td>
                                        Sam G
                                  </td>
                                  <td>
                                        -
                                  </td>
                                  <td>
                                       Art
                                  </td>
                                  <td>
                                       Yes
                                  </td>
                                  <td>
                                      100 ETH
                                  </td>
                                  <td>

                                      
                                  <div className="text-center">
                                      
                                        {['checkbox'].map((type) => (
                                            <div key={`default-${type}`} className="text-center">
                                            <Form.Check 
                                                type={type}
                                                id={`default-${type}`}
                                                label={` `}
                                            />
                                            </div>
                                        ))}
                                  </div>
                                      
                                  </td>
                                  <td>
                                      <span className="status-box">Approved</span>
                                  </td>
                                  <td>
                                      <a href="" className="view-icon"><i className="fa fa-eye"></i></a>
                                  </td>
                                  
                                </tr>
                                */}
                    </tbody>
                  </Table>
                </div>
                <div className="latest-user-row justify-content-end">
                  <a href="" className="view-all-link">
                    See All
                  </a>
                </div>
              </div>
            </Col>
          </Row>

          <Modal
            show={show}
            className="modal-comming-soon bid-modal"
            backdrop="static"
            keyboard={false}
            onHide={handleClose}
            centered
          >
            <Modal.Header
              closeButton
              className="border-none p-0"
              style={{ zIndex: "10000000" }}
            ></Modal.Header>
            <Modal.Body>
              <div class="bid-modal-box">
                <h3>Create a Auction</h3>
                <p>You are about to place a bit for Tempor Incododunt</p>

                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Min Price</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="min price"
                      name="minPrice"
                      onChange={handleAuctionInput}
                      value={auctionData.minPrice}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="start time"
                      name="startTime"
                      onChange={handleAuctionInput}
                      value={auctionData.startTime}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>End Time</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="end date"
                      name="endTime"
                      onChange={handleAuctionInput}
                      value={auctionData.endTime}
                    />
                  </Form.Group>
                </Form>

                <div>
                  <button
                    className="blue-btn"
                    onClick={() => {
                      if (!isLoading) {
                        handleAuction();
                      }
                    }}
                    disabled={isLoading}
                    style={{ cursor: isLoading ? "no-drop" : "pointer" }}
                  >
                    {buttonMessage ? buttonMessage : "Start Auction"}
                  </button>

                  <a href="" className="border-btn">
                    Cancel
                  </a>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </Container>
      </section>
    </>
  );
};

export default NFTList;
