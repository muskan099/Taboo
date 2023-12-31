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

const ContactList = () => {
  //const dispatch = useDispatch();

  /* const {
         nft,
        } = useSelector((state) => state.nft); */

  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(new Date());

  // const { nft, isLoading } = useSelector((state) => state.nft);

  const [contactList, setContactList] = useState([]);

  const [show, setShow] = useState(false);

  const [ANft, setANft] = useState("");
  // console.log(ANft);

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
  const[searchValue,setSearchValue] = useState(false)

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
      // console.log("anft", ANft);
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
      // console.log("tx", tx);
      let data = { tx: tx };
      try {
        let trx = await Transaction(data);
        if (trx) {
          let token = await NFTBalance();
          // console.log("token", token);
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
const[totalNft1,setTotalNft] = useState()

  const getData = async (currentPage, limit, query,skip = (currentPage*limit) - limit) => {
   
    const res = await axios.get(`contactList?limit=${limit}&skip=${skip}`);


    if (res.data) {
     let response = res.data;
    //  console.log(response)
      setContactList(res.data.data[0].list);
      setTotalNft(res.data.data[0].totalRecords[0].count)
      // console.log(res.data.data[0].list);
    }
  };

  useEffect(() => {
    getData(currentPage, 20);
  }, []);
 
  const [currentPage, setCurrentPage] = useState(1);
  
  const [search, setSearch] = useState("");


  return (
    <>
      <section className="creater-dash-sec">
        <Container fluid className="p-0">
          <Row>
            <Col lg={1} md={12} sm={12} xs={12}>
              <div className="sidemenu-creater">
                <ul>
                <li className="active">
                    <a href="/ContactList">
                      <img
                        className="img-fluid m-0"
                        src={"images/list22.png"}
                      />
                    </a>
                  </li>
                <li>
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
                
                  <li> <a href="/create-nft">
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
                  <h3 className="main-heading-inner mb-0"> Contact List</h3>
                  <a className="common-btn" href="">
                    Export to Exel
                  </a>
                  <a className="common-btn" href="">
                    Export to CSV
                  </a>
                </div>

                <div className="filer-right-box allcategory-filter filter-nft-list">
               

                  <div className="newsletter-box m-0">
                    <InputGroup className="m-0">
                      <FormControl
                        placeholder="Search....."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={(e) => {
                          setSearch(e.target.value);
                          setSearchValue(true)
                        }}
                      />
                      {/* {console.log(search)} */}
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
                     
                        <th>Name</th>
                        <th>Message</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Social Media</th>
                        <th>Model</th>
                      
                      </tr>
                    </thead>
                    <tbody>
                  
                 {/* {console.log({contactList})} */}
                 {/* {console.log({search})} */}
          {searchValue ? contactList.filter((user) => {
            // {console.log(user.name)}
            // {console.log(search)}
            return user.name.includes(search)
          }).map((item, index) => (
                            <tr key={index}>
                                {console.log("the name",item)}
                               <td>{item.name}</td>
                               <td>{item.message} </td>
                              <td>{item.email} </td>
                              <td>{item.number} </td>
                              <td>{item.social_media} </td>
                              <td>{item.isModel} </td>
                               
                            
                             
                             
                            </tr>
                          )): contactList?.map((item, index) => (
                            <tr key={index}>
                               <td>{item.name}</td>
                               <td>{item.message} </td>
                              <td>{item.email} </td>
                              <td>{item.number} </td>
                              <td>{item.social_media} </td>
                              {console.log(item.isModel)}
                              <td>{item?.isModel} </td>
                               
                            
                             
                             
                            </tr>
                          ))
                            
                           }      
                     
                    </tbody>

                  </Table>
                </div>

               <Pagination
                  nftPerPage={20}
                  totalNft={totalNft1}
                 nft={contactList}
                 
                 getData={getData}
                 limit={20}
                /> 

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

export default ContactList;
