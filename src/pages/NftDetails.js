import React, { useEffect, useState } from "react";
import { axios } from "../http";
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

import { TabooBalance } from "../helpers/TabooHelper";
import { BuyNFT } from "../helpers/BuyNFT";
import { updateNftStatusSaga } from "../store/reducers/nftReducer";
import { MakeOffer } from "../helpers/MakeOffer";
import { ApproveTaboo } from "../helpers/Approve";

const NftDetails = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { nftDetail: nft, isLoading } = useSelector((state) => state.nft);

  const { isAuthenticated, walletAddress, balance, tier } = useSelector(
    (state) => state.auth
  );

  let { transactions } = useSelector((state) => state.transactions);

  console.log("balance", balance);
  const { id } = useParams();

  // const [offerPrice, setOffferPrice] = useState("");
  const [auctionData, setAuctionData] = useState({
    offerPrice: "",
    auctionProcessing: false,
    buttonMessage: "",
  });

  const { offerPrice, auctionProcessing, buttonMessage } = auctionData;

  const [offerStart, setOfferStart] = useState("");

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
  const handleOfferStart = () => setOfferStart(false);

  const [tabooBalance, setTabooBalance] = useState("");

  const handleOfferPrice = (e) => {
    let value = e.target.value;

    if (isNaN(value)) {
      e.target.value = "";
    } else {
      // setOffferPrice(value);
    }
  };

  const getData = () => {
    const data = { id: id, tier: tier };

    dispatch(getNftDetailSaga(data));
  };

  useEffect(() => {
    getData();

    return () => dispatch(clearNftDetail());
  }, []);

  const handleBuy = async (e) => {
    let price = parseFloat(nft.price);
    if (balance < price) {
      toast.warn("You don't have sufficient taboo token!");
    } else {
      console.log("hello");
      setBuyStart(true);
      // dispatch(createTransactionsSaga({address:walletAddress,content_id:nft._id}))
      // let tx = await axios.post("/make-order", {
      // address: walletAddress,
      // content_id: nft._id,
      // });
      let approveData = await ApproveTaboo(price, walletAddress);

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
          let hash = await BuyNFT(
            nft.token_id,
            nft.ipfs,
            nft.price,
            nft.signature
          );
          if (hash) {
            //toast.success("Order placed successfully!")
            let Nft_hash = hash.transactionHash;
            hash = hash.transactionHash;
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
            toast.warn("Please try after sometime!.");
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

  return (
    <>
      <section className="explore-info-sec">
        <Container>
          <Row className="align-items-top">
            <Col md={6} sm={6} xs={12}>
              <div class="detail-box-img">
                <img className="img-main" src={nft.image} />
              </div>
            </Col>
            <Col md={5} sm={6} xs={12}>
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
                            <p>Owner</p>
                            <h5>{nft.user && nft.user.name}</h5>
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
                      {nft.user && nft.user.name}
                    </Tab>
                    <Tab eventKey="history" title="History">
                      {"offers" in nft && nft.offers?.length > 0
                        ? nft.offers.map((item, index) => (
                            <div
                              key={item._id}
                              style={{ alignItems: "center" }}
                            >
                              <p>{`${item.wallet_address.slice(
                                0,
                                5
                              )}......${item.wallet_address.slice(-5)}`}</p>
                            </div>
                          ))
                        : "No History Found"}
                    </Tab>
                    <Tab eventKey="bids" title="Bids">
                      No bids
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
                            ? true
                            : false
                        }
                        onClick={() => setOfferStart(true)}
                      >
                        Place A Bid
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
                    <td>{balance} TABOO</td>
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
                    <th>Enter Bid</th>
                    <th>$TABOO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Your Balance</td>
                    <td> {balance} $TABOO</td>
                  </tr>
                  <tr>
                    <td>Service Fee</td>
                    <td>0 $TABOO</td>
                  </tr>
                  <tr>
                    <td>Total will Pay</td>
                    <td>{nft && nft.price} $TABOO</td>
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
                  <h6>This Creator verified</h6>
                  <p>Purchase this item at your own risk</p>
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
