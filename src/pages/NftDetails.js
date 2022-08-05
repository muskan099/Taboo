import React, { useEffect, useState } from "react";
import { axios } from "../http";
import moment, { min } from "moment";
import { useNavigate, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Container,
  Tabs,
  Tab,
  Table,
  Modal,
  Button,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Transaction } from "../helpers/Transaction";
import { clearNftDetail, getNftDetailSaga } from "../store/reducers/nftReducer";
import { createTransactionsSaga } from "../store/reducers/transactionReducer";
import { toast } from "react-toastify";
import CountDownTimer from "../components/UI/CountDownTimer";

import { TabooBalance } from "../helpers/TabooHelper";
import { BuyNFT } from "../helpers/BuyNFT";
import { updateNftStatusSaga } from "../store/reducers/nftReducer";
import { MakeOffer } from "../helpers/MakeOffer";
import { TokenApproval } from "../helpers/TokenApproval";
import { NFTBalance } from "../helpers/NFTBalance";
import { Sale } from "../helpers/Sale";

import { TabooPunk } from "../helpers/TabooPunk";

import { ApproveTaboo } from "../helpers/Approve";

const NftDetails = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  //Expiry Date for CountDown Timer

  const { nftDetail: nft, isLoading } = useSelector((state) => state.nft);

  const { isAuthenticated, walletAddress, balance, tier } = useSelector(
    (state) => state.auth
  );
  const [time, setTime] = useState(false);

  useEffect(() => {
    console.log("inside use effect", nft);

    if (nft && nft.bid_end) {
      let end_Date = nft.bid_end;

      // let time = new Date(end_Date);
      console.log(`end date is ${end_Date}`);
      let current_time = moment(end_Date, "YYYY-MM-DD HH:mm:ss").format();
      // current_time.setSeconds(current_time.getSeconds() + 600); // 10 minutes timer
      current_time = new Date(current_time);
      current_time.setSeconds(current_time.getSeconds() + 600);
      setTime(current_time);
      console.log(`time is ${current_time}`);
    }
  }, [nft]);
  let { transactions } = useSelector((state) => state.transactions);

  //console.log("balance", nft.orders);

  const { id } = useParams();

  // const [offerPrice, setOffferPrice] = useState("");
  const [auctionData, setAuctionData] = useState({
    offerPrice: "",
    auctionProcessing: false,
    buttonMessage: "",
  });

  const { offerPrice, auctionProcessing, buttonMessage } = auctionData;

  const [offerStart, setOfferStart] = useState(false);

  const [show, setShow] = useState(false);

  const [buyStart, setBuyStart] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [nftHash, setNftHash] = useState("");

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const handleOfferStart = () => setOfferStart(true);

  const [tabooBalance, setTabooBalance] = useState("");
  const [punk,setPunk]=useState(0);

  const[fees,setFees]=useState(7.5);


  const handleOfferPrice = (e) => {
    let value = e.target.value;

    if (isNaN(value)) {
      e.target.value = "";
    } else {
      // setOffferPrice(value);
    }
  };

  const getData = () => {
    let userTier = tier ? tier : "1 Tier";
    const data = { id: id, tier: userTier };

    dispatch(getNftDetailSaga(data));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();

    return () => dispatch(clearNftDetail());
  }, []);

  const handleBuy = async (e) => {
    let price = parseFloat(nft.price);

    console.log("price", price);

    if (!isAuthenticated) {
      toast.warn("Please connect wallet!");
    } else if (price < 0) {
      toast.warn("You don't have sufficient taboo token!");
    } else {
      console.log("hello");
      setBuyStart(true);
      // dispatch(createTransactionsSaga({address:walletAddress,content_id:nft._id}))
      // let tx = await axios.post("/make-order", {
      // address: walletAddress,
      // content_id: nft._id,
      // });

      console.log("NFt", nft.forsale);

      const for_sale = nft.forsale == "no" ? true : false;

      if (for_sale) {
        console.log("no");

        let approveData = await TokenApproval(
          price,
          walletAddress,
          nft.forsale
        );

        let tx = await Transaction({ tx: approveData });
        if (tx) {
          console.log("tx", tx);
          // let {tx}=transactions;
          let taboo_hash = true;
          try {
            // taboo_hash = await Transaction(tx.data);
          } catch (e) {
            setBuyStart(false);
            console.log(e);
          }

          if (taboo_hash) {
            // let token = await NFTBalance();

            // console.log("ss",token)

            let hash = await BuyNFT(
              nft.token_id,
              nft.ipfs,
              10,
              nft.signature,
              tier,
              punk
            );

            if (hash) {
              // token=token+1;
              //toast.success("Order placed successfully!")
              let hashNFT = hash;
              let Nft_hash = hash.hash.transactionHash;
              hash = hash.hash.transactionHash;
              hash = hash.substring(0, 5) + "....." + hash.substring(38, 42);
              setNftHash(hash);
              let orderObj = { id: nft._id, status: "sold" };
              dispatch(updateNftStatusSaga(orderObj));

              let order = await axios.post("/create-order", {
                content_id: nft._id,
                to_account: "0x9632a9b8afe7CbA98236bCc66b4C019EDC1CD1Cc",
                amount: nft.price,
                address: walletAddress,
                tx_id: Nft_hash,
                nft_hash: Nft_hash,
                tokenUrl: nft.ipfs,
                token: hashNFT.token,
              });

              console.log("order", order);

              handleClose2();
              handleShow1();

              setBuyStart(false);

              getData();

              setTimeout(handleClose1, 3000);

              navigate("/transactions");
            }
          } else {
            setBuyStart(false);
          }
        }
      } else {
        let approveData = await TokenApproval(
          price,
          walletAddress,
          nft.forsale
        );

        let tx = await Transaction({ tx: approveData });

        console.log("nft token", nft.token_id);
        if (tx) {
          let hash = await Sale(walletAddress, nft.token_id, "1");

          if (hash) {
            setNftHash(hash.transactionHash);
            let orderObj = { id: nft._id, status: "sold" };

            dispatch(updateNftStatusSaga(orderObj));

            let order = await axios.post("/create-order", {
              content_id: nft._id,
              to_account: "0x9632a9b8afe7CbA98236bCc66b4C019EDC1CD1Cc",
              amount: nft.price,
              address: walletAddress,
              tx_id: hash.transactionHash,
              nft_hash: hash.transactionHash,
              tokenUrl: nft.ipfs,
              token: nft.token_id,
            });
            if (order) {
              navigate("/transactions");
            }
          } else {
            setBuyStart(false);
          }
        }
      }
    }
  };

  const handleOffer = async () => {
    if (offerPrice == "") {
      toast.warn("Offer price is required!");
    } else {
      setAuctionData((p) => ({
        ...p,
        auctionProcessing: true,
        buttonMessage: "Processing Please Wait...",
      }));
      let approve = await ApproveTaboo(offerPrice, walletAddress);

      if (approve) {
        let txra = await Transaction({ tx: approve });

        if (txra) {
          let tx = await MakeOffer(offerPrice, nft.token_id, walletAddress); //axios.post('/make-offer',{address:walletAddress,taboo_amount:offerPrice});

          if (tx) {
            let txObj = { tx: tx };

            let txdd = await Transaction(txObj);

            if (txdd) {
              let res = await axios.post("/create-offer", {
                content_id: nft._id,
                wallet_address: walletAddress,
                price: offerPrice,
              });
              setAuctionData((p) => ({
                ...p,
                auctionProcessing: false,
                buttonMessage: "",
              }));
            } else {
              toast.warn("Transaction Failed!");
            }
          } else {
            toast.warn("Auction is ended!.");
          }
        } else {
          toast.warn("Amount approval failed!");
        }
      }
      setAuctionData((p) => ({
        ...p,
        auctionProcessing: false,
        buttonMessage: "",
      }));
      handleOfferStart();
    }
  };


  useEffect(async()=>{
      if(isAuthenticated){

         let taboo_punk=await TabooPunk(walletAddress);
         setPunk(taboo_punk);

          if(taboo_punk>0){
             setFees(0)
          }
          else if(tier=="2 Tier"){
            setFees(5);
          }else if(tier=="3 Tier"){
            setFees(2.5);
          }
      }
  },[walletAddress])


  return (
    <>
      <section className="explore-info-sec">
        <Container>
          <Row className="align-items-top">
            <Col md={6} sm={12} xs={12}>
              <div class="detail-box-img">
                <img className="img-main" src={nft.image} />
              </div>
            </Col>
            <Col md={5} sm={12} xs={12}>
              <div class="detail-side-text">
                <a href="" className="add-icon">
                  <img
                    src={
                      "https://taboonft.s3.us-east-2.amazonaws.com/icons/add-button.png"
                    }
                  />
                </a>
                <h3>{nft.name && nft.name}</h3>
                <h6>
                  <span className="price">{nft.price} Taboo</span>
                  <span className="price2 d-none">
                    {nft.status == "sold" ? "0" : 1}
                  </span>
                  <span className="stoke-1">
                    {nft.status == "sold" ? "0" : 1} in stock
                  </span>
                </h6>
                <p>{nft.description}</p>
                <div className="details-tab-outer">
                  <Tabs defaultActiveKey="info" className="mb-3">
                    <Tab eventKey="info" title="Info">
                      <div className="">
                        <div class="owner-row-outer">
                          <img
                            src={
                              "https://taboonft.s3.us-east-2.amazonaws.com/icons/Taboo-logo-3.61280c399d2252.47125802.png"
                            }
                          />
                          <div>
                            <p>Creator</p>
                            <h5>{nft.wallet_address}</h5>
                          </div>
                        </div>
                        <div class="owner-row-outer d-none">
                          <img
                            src={
                              "https://taboonft.s3.us-east-2.amazonaws.com/icons/Taboo-logo-3.61280c399d2252.47125802.png"
                            }
                          />
                          <div>
                            <p>Owner</p>
                            <h5>Requel Will</h5>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="owners" title="Owners">
                      {nft.orders && nft.orders.length > 0 ? (
                        nft.orders.map((order) => (
                          <p>{`${order.user_wallet_address}`} </p>
                        ))
                      ) : (
                        <p>{nft.wallet_address}</p>
                      )}
                    </Tab>
                    <Tab eventKey="history" title="History">
                      {nft.orders && nft.orders.length > 0 ? (
                        <table width={"400px"}>
                          <tr>
                            <th>Owner</th>

                            <th>Price</th>
                          </tr>
                          {nft.orders &&
                            nft.orders.map((order) => (
                              <tr>
                                <td>
                                  <p>
                                    {`${order.user_wallet_address.slice(
                                      0,
                                      5
                                    )}......${order.user_wallet_address.slice(
                                      -5
                                    )}`}{" "}
                                  </p>
                                </td>

                                <td>{order.total}</td>
                              </tr>
                            ))}
                        </table>
                      ) : (
                        "No History Found"
                      )}
                    </Tab>
                    <Tab eventKey="bids" title="Bids">
                      {nft.offers && nft.offers.length > 0 ? (
                        <table width={"400px"}>
                          <tr>
                            <th>Wallet Address</th>

                            <th>Price</th>
                          </tr>
                          {nft.offers &&
                            nft.offers.map((offer) => (
                              <tr>
                                <td>
                                  <p>
                                    {`${offer.wallet_address.slice(
                                      0,
                                      5
                                    )}......${offer.wallet_address.slice(
                                      -5
                                    )}`}{" "}
                                  </p>
                                </td>

                                <td>{offer.offer_price}</td>
                              </tr>
                            ))}
                        </table>
                      ) : (
                        "Not Found"
                      )}
                    </Tab>
                  </Tabs>
                  <div className="outer-purchase-box">
                    <div className="owner-row-outer">
                      <img
                        src={
                          "https://taboonft.s3.us-east-2.amazonaws.com/icons/Taboo-logo-3.61280c399d2252.47125802.png"
                        }
                      />

                      <div>
                        {/* <p>Highest bid by <b>Kohaku Tora</b></p>
                                     <h5>10000000$ TABOO $3000</h5> */}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "center",
                        }}
                        className={nft.status === "auction" ? "" : "d-none"}
                      >
                        {time ? <CountDownTimer expiryTimestamp={time} /> : ""}
                      </div>
                    </div>

                    <div class="text-center">
                      <Button
                        className="blue-btn"
                        disabled={
                          isLoading ||
                          nft.status == "sold" ||
                          nft.status == "auction"
                            ? true
                            : false
                        }
                        onClick={handleShow2}
                      >
                        {nft.status == "sold" ? "Sold Out" : "Purchase Now"}
                      </Button>
                      <Button
                        className="border-btn"
                        disabled={
                          isLoading ||
                          nft.status == "sold" ||
                          nft.status == "active"
                            ? false
                            : false
                        }
                        onClick={() => setOfferStart(true)}
                      >
                        Place An Offer
                      </Button>
                    </div>
                  </div>
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
              <h3>Place A Bid</h3>
              <p>You are about to place a bit for Tempor Incododunt</p>
              <h5>Your bid</h5>
              <Table>
                <thead>
                  <tr>
                    <th>Enter Bid</th>
                    <th>$TABOO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Your Balance</td>
                    <td>{balance && balance} TABOO</td>
                  </tr>
                  <tr>
                    <td>Service Fee</td>
                    <td>0 $TABOO</td>
                  </tr>
                  <tr>
                    <td>Total bod Amount</td>
                    <td>123 $TABOO</td>
                  </tr>
                </tbody>
              </Table>
              <div>
                <a href="" className="blue-btn">
                  Place A Bid
                </a>

                <a href="" className="border-btn">
                  Cancel
                </a>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          show={show1}
          className="modal-comming-soon bid-modal"
          backdrop="static"
          keyboard={false}
          onHide={handleClose1}
          centered
        >
          <Modal.Header
            closeButton
            className="border-none p-0"
            style={{ zIndex: "10000000" }}
          ></Modal.Header>
          <Modal.Body>
            <div class="bid-modal-box success-bid-box">
              <h3>Yay!</h3>
              <p class="green-text">Your purchase was successful</p>
              <div class="table-outer">
                <Table>
                  <tbody>
                    <tr>
                      <td>Status</td>
                      <td>Transaction ID</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="color-green">Processing</span>
                      </td>
                      <td>
                        <b>{nftHash && nftHash}</b>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <p class="time-off">Time to show-off</p>
              <ul>
                <li>
                  <a href="">
                    <img src="images/add-button.png" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="images/add-button.png" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="images/add-button.png" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="images/add-button.png" />
                  </a>
                </li>
              </ul>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          show={show2}
          className="modal-comming-soon bid-modal"
          backdrop="static"
          keyboard={false}
          onHide={handleClose2}
          centered
        >
          <Modal.Header
            closeButton
            className="border-none p-0"
            style={{ zIndex: "10000000" }}
          ></Modal.Header>
          <Modal.Body>
            <div class="bid-modal-box">
              <h3>Checkout</h3>

              <br />

              <Table>
                <thead>
                  <tr>
                    <th>Your Balance</th>
                    <th>{balance} Taboo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Price</td>
                    <td> {nft.price} TABOO</td>
                  </tr>
                  <tr>
                    <td>Service Fee</td>
                    <td> {fees}%</td>
                  </tr>
                  <tr>
                    <td>Total will Pay</td>

                    <td>
                      {nft &&
                        parseFloat(nft.price) +
                          (parseFloat(nft.price) *fees) / 100}{" "}
                      TABOO
                    </td>
                  </tr>
                </tbody>
              </Table>

              <div class="creator-erroer-notify">
                <img
                  src={
                    "https://taboonft.s3.us-east-2.amazonaws.com/icons/add-button.png"
                  }
                />
                <div>
                  <h6 style={{ color: "10c743" }}>This Creator verified</h6>
                  <p className="d-none">Purchase this item at your own risk</p>
                </div>
              </div>

              <div>
                <a
                  href="#"
                  disabled={buyStart}
                  onClick={handleBuy}
                  className="blue-btn"
                >
                  {buyStart ? "Processing" : "I Understand, Continue"}
                </a>

                <a href="#" onClick={handleClose2} className="border-btn">
                  Cancel
                </a>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          show={show3}
          className="modal-comming-soon bid-modal"
          onHide={handleClose3}
          centered
        >
          <Modal.Header
            closeButton
            className="border-none p-0"
            style={{ zIndex: "10000000" }}
          ></Modal.Header>
          <Modal.Body>
            <div class="bid-modal-box">
              <h3>Follow Steps</h3>

              <br />

              <div class="purchasing-notify">
                <img src="https://taboonft.s3.us-east-2.amazonaws.com/icons/dot-line.png" />

                <div>
                  <h6>Purchasing</h6>
                  <p>Sending transaction with your wallet</p>
                </div>
              </div>

              <div className="creator-erroer-notify creater-follow">
                <img src="https://taboonft.s3.us-east-2.amazonaws.com/icons/add-button.png" />

                <div>
                  <h6>This Creator is not verified</h6>
                  <p>Purchase this item at your own risk</p>
                </div>

                <img
                  className="user-img"
                  src={
                    "https://taboonft.s3.us-east-2.amazonaws.com/icons/Taboo-logo-3.61280c399d2252.47125802.png"
                  }
                />
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          show={offerStart}
          className="modal-comming-soon bid-modal"
          backdrop="static"
          keyboard={false}
          onHide={handleOfferStart}
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
                    onChange={(e) => {
                      let inputValue = e.target.value;
                      setAuctionData((prev) => {
                        if (!isNaN(inputValue)) {
                          return { ...prev, offerPrice: inputValue };
                        }
                      });
                    }}
                    value={offerPrice}
                    placeholder="min price"
                  />
                </Form.Group>
              </Form>

              <div>
                <button
                  className="blue-btn"
                  onClick={() => {
                    if (!auctionProcessing) handleOffer();
                  }}
                  disabled={auctionProcessing}
                  style={{ cursor: auctionProcessing ? "no-drop" : "pointer" }}
                >
                  {buttonMessage ? buttonMessage : "Start Bid"}
                </button>

                <a href="" className="border-btn">
                  Cancel
                </a>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
};

export default NftDetails;
