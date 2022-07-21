import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axios } from "../http";
import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  Table,
  Modal,
  Form,
} from "react-bootstrap";
import { CreateReSale, WithdrawSale } from "../helpers/CreateResale";
import { toast, useToast } from "react-toastify";
import { createNFTAuction } from "../helpers/AuctionHelper";
import { Transaction } from "../helpers/Transaction";
import { ApproveTabooNFT } from "../helpers/ApproveToken";
const TransactionPage = () => {
  const { isAuthenticated, walletAddress, tier } = useSelector(
    (state) => state.auth
  );
  const [show, setShow] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState("");

  const [saleData, setSaleData] = useState("");

  const [minPrice, setMinPrice] = useState("");

  const [showSale, setShowSale] = useState(false);

  const [showAuction, setShowAuction] = useState(false);

  const [total, setTotal] = useState(0);
  const [ANft, setANft] = useState("");
  console.log(ANft);

  const [auctionData, setAuctionData] = useState({
    minPrice: 0,
    startTime: "",
    endTime: "",
    buttonMessage: "",
  });

  const { buttonMessage } = auctionData;

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

  const handleClose = () => {
    setShow(false);
  };

  const getData = async () => {
    let res = await axios.post("/user-nft", { address: walletAddress });
    console.log("data", res);
    setData(res.data);
  };

  const handleMinPrice = (e) => {
    let value = e.target.value;

    if (isNaN(value)) {
      e.target.value = "";
      setTotal(0);
    } else {
      setMinPrice(value);

      let platform_fees = (parseFloat(value) * 15) / 100;

      let rest_amount = parseFloat(value) - platform_fees;

      let royalty = (parseFloat(value) * 2) / 100;

      let total_amount = parseFloat(value) - royalty;
      setTotal(total_amount);
    }
  };
  useEffect(async () => {
    await getData();
  }, []);

  const handleCreateSale = async (data) => {
    console.log("data sale", data);

    setSaleData(data);

    setShow(true);
  };

  const submitSale = async () => {
    console.log("sale Data", saleData);
    let price = parseFloat(saleData.contentinfo.price);

    if (minPrice > 0) {
      setIsLoading(true);
      let tx = await CreateReSale(
        walletAddress,
        saleData.contentinfo.token_id,
        minPrice
      );

      if (tx) {
        let res = axios.post("/create-sale", {
          content_id: saleData.contentinfo._id,
          price: minPrice,
          forsale: "yes",
        });

        handleClose();

        setIsLoading(false);

        toast.success("Sale created successfully!");
      } else {
        setIsLoading(false);
        toast.warn("Something went wrong");
      }
    } else {
      toast.warn("Please enter price");
    }
  };

  const handleStartAuction = (value) => {
    setShowAuction(true);

    setANft(value);
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
      //let address = walletAddress;

      //let approveToken=await ApproveTabooNFT(ANft.token_id,walletAddress);

      console.log("anft", auctionData);
      let tx = await createNFTAuction(
        ANft.token_id,
        auctionData.minPrice,
        200,
        0,
        1500,
        auctionData.endTime,
        0,
        auctionData.startTime,
        ANft.ipfs,
        walletAddress
      );
      console.log("tx", tx);
      let data = { tx: tx };
      try {
        let trx = await Transaction(data);
        if (trx) {
          let token = ANft.token_id;
          console.log("token", token);
          let res = await axios.post("/update-content", {
            content_id: ANft._id,
            status: "auction",
            token: token,
            bid_price: auctionData.minPrice,
            bid_end:auctionData.endTime
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

  const handleWithdrawSale = async (data) => {
    setSaleData(data);

    setShowSale(true);
  };

  const submitWithdrawSale = async () => {
    let hash = await WithdrawSale(walletAddress, saleData.token_id);

    if (hash) {
      let res = await axios.post("/update-content", {
        content_id: saleData._id,
        status: "sold",
        token: saleData.token_id,
        bid_price: saleData.price,
      });

      setShowSale(false);

      toast.success("Transaction submitted successfully!");
    }
  };

  return (
    <>
      <section className="join-box-sec rank-outer-sec transaction-page-css">
        <Container fluid className="p-0">
          <Row className="align-items-stretch">
            <Col md={3} sm={4} xs={12}>
              <div className="join-first-box rank-side-img">
                <img className="img-fluid m-0" src={"images/Team/team6.png"} />
              </div>
            </Col>
            <Col md={9} sm={8} xs={12}>
              <div className="outer-rank-box">
                <div className="profile-img-stakes">
                  <img src={"images/full-View.png"} alt="profile IMG" />
                  <p>{walletAddress}</p>
                </div>

                <div>
                  <Table className="table-tank" responsive>
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Buying Price</th>
                        <th>Creator Address</th>
                        <th>Transaction hash</th>
                        <th className="">Token</th>
                        <th className="d-none">Ipfs Link</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                        data.map((item, index) => (
                          <tr>
                            <td>{index + 1}</td>
                            <td>
                              <div class="icon-img">
                                <a href={"/details/" + item.contentinfo._id}>
                                  <img
                                    src={
                                      "https://taboonft.s3.us-east-2.amazonaws.com/images/" +
                                      item.contentinfo.image
                                    }
                                  />
                                </a>
                              </div>
                            </td>
                            <td>{item.contentinfo.name}</td>
                            <td>{item.total}</td>
                            <td>
                              <a
                                href={
                                  "https://www.bscscan.com/address/" +
                                  item.contentinfo.wallet_address
                                }
                                target={"_blank"}
                              >
                                {`${item.contentinfo.wallet_address?.slice(
                                  0,
                                  3
                                )}...${item.user_wallet_address?.slice(
                                  -8
                                )}`}{" "}
                              </a>
                            </td>
                            <td>
                              <a
                                href={
                                  "https://www.bscscan.com/tx/" + item.trans_id
                                }
                                target={"_blank"}
                              >
                                {}
                                {`${item.trans_id?.slice(
                                  0,
                                  3
                                )}...${item.trans_id?.slice(-8)}`}{" "}
                              </a>
                            </td>
                            <td className="">{item.contentinfo.token_id}</td>
                            <td className="d-none">
                              <a href={item.contentinfo.ipfs} target="_blank">
                                {`${item.contentinfo.ipfs?.slice(
                                  0,
                                  3
                                )}...${item.contentinfo.ipfs?.slice(-8)}`}
                              </a>
                            </td>
                            <td>
                              <span class="success">success</span>
                            </td>


                            <td>
                           

                                          <button disabled={item.contentinfo.forsale=="yes"?false:false} onClick={()=>handleCreateSale(item)}>Sell</button>
 
                                          <button disabled={item.contentinfo.status=="active"?false:true} onClick={()=>handleWithdrawSale(item.contentinfo)}>Cancel</button>

                                       

                           
                                         <button disabled={item.contentinfo.status=="true"?true:false} onClick={()=>handleStartAuction(item.contentinfo)} >Auction</button> 
                                        
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

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
              <h3>Create a Sell</h3>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Min Price (in taboo)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="min price"
                    name="minPrice"
                    onChange={(e) => handleMinPrice(e)}
                    value={minPrice}
                  />
                </Form.Group>
              </Form>

              <Form>
                <Form.Group className="mb-3 d-none">
                  <Form.Label>Platform Fee(%)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Platform Fee"
                    name="minPrice"
                    value="15"
                    readOnly
                  />
                </Form.Group>
              </Form>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Royalty(%)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="min price"
                    name="minPrice"
                    value="2"
                    readOnly
                  />
                </Form.Group>
              </Form>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>You get</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="min price"
                    name="minPrice"
                    value={total}
                  />
                </Form.Group>
              </Form>

              <div>
                <a
                  href="#"
                  className="blue-btn"
                  onClick={() => {
                    if (!isLoading) {
                      submitSale();
                    }
                  }}
                  disabled={isLoading}
                  style={{ cursor: isLoading ? "no-drop" : "pointer" }}
                >
                  {isLoading ? "Processing" : "Submit"}
                </a>

                <a href="" className="border-btn">
                  Cancel
                </a>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          show={showAuction}
          className="modal-comming-soon bid-modal"
          backdrop="static"
          keyboard={false}
          onHide={() => setShowAuction(false)}
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

        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="modal-comming-soon below-18-popup"
          backdrop="static"
          keyboard={false}
          show={showSale}
          onHide={() => setShowSale(false)}
        >
          <Modal.Header className="border-none p-0"></Modal.Header>
          <Modal.Body className="outer-age-box">
            <div className="outer-div">
              Are You sure you want to withdraw your Sale.
            </div>
            <button onClick={() => submitWithdrawSale()}>Submit</button>
            <button onClick={() => setShowSale(false)}>Cancel</button>
          </Modal.Body>
        </Modal>
      </section>

      <div>
        <div className="padding-strip"></div>
        {/* <section className="section-stakes-table">
        <Container>
          <Row>
            <Col>
            
              
                "No Data Found"
            
            </Col>
          </Row>
        </Container>
                                        </section> */}
      </div>
    </>
  );
};
export default TransactionPage;
