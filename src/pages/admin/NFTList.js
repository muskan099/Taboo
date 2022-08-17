import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";
import { axios } from "../../http";
import { createAuction } from "../../helpers/AuctionHelper";
import { Transaction } from "../../helpers/Transaction";
import { NFTBalance } from "../../helpers/NFTBalance";
import Connect from "../../helpers/Connect";
import ExportToExcel from "../../components/UI/ExportToExcel";
import ExportToCSV from "../../components/UI/ExportToCSV";
import Pagination from "./Pagination";
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

  const [startDate, setStartDate] = useState(new Date());

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
            bid_end: auctionData.endTime,
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
  const [filterSearch, setFilterSearch] = useState({
    category:"Jeni Summers",
    nftTier: {
      tier1: true,
      tier2: false,
      tier3: false,
    },
    
  });
  console.log({filterSearch})
  const getData = async (currentPage, limit, filterSearch) => {
    console.log({category})
    console.log({filterSearch})
   
    const res = await axios.post("/content-list", {
      page: currentPage,
      limit: limit,
      category:filterSearch.category,
      nftTier: filterSearch.nftTier
      
    
     
    });

    if (res.data) {
      setNft(res.data);
      setResult(res.data);
    }
  };

  useEffect(() => {
    getData(currentPage,20,filterSearch);
  }, []);
  console.log({ nft });
  const [currentPage, setCurrentPage] = useState(1);
  const[tier,setTier] = useState()


  
  
  const [status, setStatus] = useState("");
  
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");
  const[category,setCategory] = useState("")

  return (
    <>
      <section className="creater-dash-sec">
        <Container fluid className="p-0">
          <Row>
            <Col lg={1} md={12} sm={12} xs={12}>
              <div className="sidemenu-creater">
                <ul>
                  <li className="active">
                  <a href="/nft-list">
                      <img className="img-fluid m-0" src={"images/list.png"} />
                    </a>
                  </li>
                
                  <li>
                    <a href="/TransactionList">
                      <img
                        className="img-fluid m-0"
                        src={"images/list22.png"}
                      />
                    </a>
                  </li>

                  <li>
                    <a href="/StackList">
                      <img
                        className="img-fluid m-0"
                        src={"images/list22.png"}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ContactList">
                      <img
                        className="img-fluid m-0"
                        src={"images/list22.png"}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/create-stake">
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
                        All Category
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" onClick={() => {
                         filterSearch.category = 'Sexy'
                         getData(currentPage,20,filterSearch);
                        }}>Sexy</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" onClick={() => {
                         filterSearch.category = 'SFw'
                         getData(currentPage,20,filterSearch);
                        }}>
                          SFW
                          {console.log(category)}
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={() => {
                         filterSearch.category = 'auction'
                         getData(currentPage,20,filterSearch);
                        }}>
                          Auction
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={() => {
                           filterSearch.category = 'Implied'
                           getData(currentPage,20,filterSearch);
                        }}>
                          Implied
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={() => {
                          filterSearch.category = 'Age'
                          getData(currentPage,20,filterSearch);
                        }}>
                          Age
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={() => {
                           filterSearch.category = 'Nude'
                           getData(currentPage,20,filterSearch);
                        }}>
                          Nude
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={() => {
                         filterSearch.category = 'Topless'
                         getData(currentPage,20,filterSearch);
                        }}>
                          Topless
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={() => {
                          filterSearch.category = 'Supercar'
                          getData(currentPage,20,filterSearch);
                        }}>
                          Supercar
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={() => {
                          filterSearch.category = 'Cabo'
                          getData(currentPage,20,filterSearch);
                        }}>
                          Cabo
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={() => {
                           filterSearch.category = 'Sporty'
                           getData(currentPage,20,filterSearch);
                        }}>
                          Sporty
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={() => {
                          filterSearch.category = 'Khloe Terae'
                          getData(currentPage,20,filterSearch);
                        }}>
                          Khloe Terae 
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={() => {
                         filterSearch.category = 'Jeni Summers'
                         getData(currentPage,20,filterSearch);
                        }}>
                        Jeni Summers
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={() => {
                           filterSearch.category = 'Jeni Summers'
                           getData(currentPage,20,filterSearch);
                        }}>
                        Jeni Summers
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={() => {
                          filterSearch.category = 'Metaverse'
                          getData(currentPage,20,filterSearch);
                        }}>
                        Metaverse
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={() => {
                          filterSearch.category = 'lifestyle'
                          getData(currentPage,20,filterSearch);
                        }}>
                        lifestyle
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={() => {
                            filterSearch.category = 'Premium'
                            getData(currentPage,20,filterSearch);
                        }}>
                        Premium
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        Type
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" onClick={() => {
                   filterSearch.nftTier.tier1 = true;
                   filterSearch.nftTier.tier2 = false;
                     filterSearch.nftTier.tier3 = false;
                     getData(currentPage,20,filterSearch);
                        }}>Tier 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2"    onClick={() => {
                     filterSearch.nftTier.tier2 = true;
                     filterSearch.nftTier.tier1 = false;
                     filterSearch.nftTier.tier3 = false;
                     getData(currentPage,20,filterSearch);
                        }}>
                          {console.log(filterSearch.nftTier.tier2)}
                          {console.log(filterSearch.nftTier.tier1)}
                        Tier 2
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={() => {
                           filterSearch.nftTier.tier1 = false;
                           filterSearch.nftTier.tier2 = false;
                     filterSearch.nftTier.tier3 = true;
                  getData(currentPage,20,filterSearch);
                        }}>
                     Tier 3
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        Status
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => {
                          setStatus("active")
                          }}
                        >
                          Active
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2"   onClick={() => {
                          setStatus("sold")
                          }}>
                       Sold
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3"   onClick={() => {
                          setStatus("auction")
                          }}>
                          Auction
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
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
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
                      {console.log("my status is ",status )}

                      {  category ? nft &&
                        nft.data
                          .filter((user) => {
                            return (
                            
                             
                              user.category.includes(category) 
                             
                             
                            );
                          })
                        
                          .map((item, index) => (
                            <tr key={item._id}>
                              <td>{result.offSet + index + 1}</td>
                              <td>
                                <div class="owner-row-outer">
                                  <img src={item.image} />
                                  <div>
                                    <h5>{item.name}</h5>
                                  </div>
                                </div>
                              </td>
                              {console.log(item.status)}
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
                          )):nft &&
                          nft.data  .filter((user) => {
                            return (
                            
                              user.name.includes(search) 
                              
                             
                            );
                          })
                            
                            .map((item, index) => (
                              <tr key={item._id}>
                                <td>{result.offSet + index + 1}</td>
                                <td>
                                  <div class="owner-row-outer">
                                    <img src={item.image} />
                                    <div>
                                      <h5>{item.name}</h5>
                                    </div>
                                  </div>
                                </td>
                                {console.log(item.status)}
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

                     
                    </tbody>
                  </Table>
                </div>

                <Pagination
                  nftPerPage={20}
                  totalNft={nft.total}
                 nft={nft}
                 
                 getData={getData}
                 limit={20}
                />
                 {console.log(nft.data)}

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
