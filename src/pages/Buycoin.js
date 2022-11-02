import {
  Row,
  Col,
  Container,
  Accordion,
  Dropdown,
  Form,
  FormControl,
  Button,
  InputGroup,
  ToastHeader,
  Modal,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axiosMain from "../http/axios/axios_main";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { BNBBalance } from "../helpers/BNBHelper";
import {
  BuyTabooCoin,
  BuyTabooCoinByOtherToken,
  TokenBalance,
} from "../helpers/BuyTaboo";
import { web3 } from "../helpers/Web3Helper";
import {
  BuyTaboo,
  TabooPrice,
  getBalance,
  BuyTabooByETH,
  BuyTabooByUSDT,
  BuyTabooByMatic,
  TabooPriceByMatic,
  TabooPriceByUSDT,
  TabooPriceByEth,
} from "../helpers/BuyCoin";
import { Link, useNavigate } from "react-router-dom";

import { ApproveETH } from "../helpers/ApproveETH";

import { Approve, ApproveUSDT } from "../helpers/ApproveUSDT";

import { ApproveMatic } from "../helpers/ApproveMatic";

import { Transaction } from "../helpers/Transaction";
import { TabooBalance } from "../helpers/TabooHelper";

import Slider from "react-slick";
import { BNBTOTAboo } from "../helpers/BNBTOTAboo";

const esymbol = "https://taboonft.s3.us-east-2.amazonaws.com/icons/etho.png";

const bsymbol = "https://taboonft.s3.us-east-2.amazonaws.com/icons/bnb.png";

const mSymbol = "https://taboonft.s3.us-east-2.amazonaws.com/icons/matic.png";
const uSymbol = "https://taboonft.s3.us-east-2.amazonaws.com/icons/usdt.webp";

const uniswapSymbol =
  "https://taboonft.s3.us-east-2.amazonaws.com/icons/uniswap-uni.webp";
const wadaSymbol =
  "https://taboonft.s3.us-east-2.amazonaws.com/icons/wada.webp";

const wbtcSymbol =
  "https://taboonft.s3.us-east-2.amazonaws.com/icons/wbtc.webp";

const chainlinkSymbol =
  "https://taboonft.s3.us-east-2.amazonaws.com/icons/chainlink-new-logo.webp";
const dogecoinSymbol =
  "https://taboonft.s3.us-east-2.amazonaws.com/icons/dogecoin.webp";

const BuyCoin = () => {
  const { isAuthenticated, walletAddress, balance, tier } = useSelector(
    (state) => state.auth
  );

  const [bnbBalance, setBnbBalance] = useState(0);
  const [bnbAmount, setBNBAmount] = useState(0);

  const [tabooAmount, setTabooAmount] = useState(0);

  const [isLoading, setIsloading] = useState(false);

  const [isLoadingBalance, setIsloadingBalance] = useState(false);

  const [currencyType, setCurrencyType] = useState("BNB");

  const [cryptoIcon, setCryptoIcon] = useState(bsymbol);
  const [loading, setLoading] = useState(false);
  const [sendOtp, setSendOtp] = useState(false);
  const [tabooToken, setTabooToken] = useState(0);
  const [showOtpVerify, setShowOtpVerify] = useState(false);

  const [otp, setOtp] = useState();
  const [otpStatus, setOtpStatus] = useState();
  const [otpVerified, setOtpVerified] = useState(false);
  useEffect(
    async () => {
      if (isAuthenticated) {
        await TabooTokenBalance(walletAddress);
      }
    },
    walletAddress,
    bnbBalance
  );
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 320,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1, infinite: false },
      },
    ],
  };

  const TabooTokenBalance = async (address) => {
    let balance = await TabooBalance(address);

    setTabooToken(balance);
  };

  const getBNBBalance = async (address) => {
    // console.log("currency Type2",currencyType);

    setIsloadingBalance(true);

    if (
      currencyType == "USDT" ||
      currencyType == "wrapped-bitcoin" ||
      currencyType == "dogecoin" ||
      currencyType == "wrapped-ada" ||
      currencyType == "chainlink" ||
      currencyType == "uniswap"
    ) {
      let balance = await TokenBalance(walletAddress, currencyType);

      // console.log("other balance",balance);

      setBnbBalance(balance);

      setIsloadingBalance(false);
    } else {
      let res = await axiosMain.post("/balance", {
        address: walletAddress,
        currencyType: currencyType,
      });

      let balance = res.data.balance; //await BNBBalance(address);

      //  console.log('balance',balance)

      setBnbBalance(balance);

      setIsloadingBalance(false);
    }
  };

  useEffect(async () => {
    if (isAuthenticated) {
      await getBNBBalance(walletAddress);

      await handleToken(bnbAmount);
    }
  }, [walletAddress, currencyType, bnbBalance]);

  const handleToken = async (value) => {
    // let currency="bnb";

    if (currencyType == "BNB" || currencyType == "ETH") {
      // console.log("currency",currencyType)

      let res = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=taboo-token&vs_currencies=${currencyType}&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true%27`
      );

      // console.log("res",res);

      let price = 0;

      if (currencyType == "BNB") {
        price = res.data["taboo-token"][`bnb`];
      } else if (currencyType == "ETH") {
        price = res.data["taboo-token"][`eth`];
      } else if (currencyType == "Matic") {
        price = res.data["taboo-token"][`matic`];
      }

      // console.log("price",price);

      let taboo = (1 / price) * value;

      setTabooAmount(taboo);
    } else {
      let geko_ids = "matic-network";

      if (currencyType == "USDT") {
        geko_ids = "tether";
      } else if (currencyType == "Matic") {
        geko_ids = "matic-network";
      } else {
        geko_ids = currencyType;
      }

      let res = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${geko_ids}&vs_currencies=bnb`
      );

      // console.log("res isd",res.data[`${geko_ids}`]['bnb']);

      let matic_bnb = res.data[`${geko_ids}`]["bnb"];

      let bnb_amount = matic_bnb * value;

      let taboo = await BNBTOTAboo(bnb_amount);

      setTabooAmount(taboo);
    }
  };

  const handleBNB = async (e) => {
    let value = e.target.value;

    if (isAuthenticated) {
      if (isNaN(value)) {
        e.target.value = 0;
      } else {
        if (bnbBalance < value) {
          e.target.value = 0;

          toast.warn("You do not have sufficient " + currencyType + ".");
        } else {
          setBNBAmount(value);

          handleToken(value);
        }
      }
    } else {
      toast.warn("Please connect wallet!");
    }
  };

  const handleBNBVerification = async (value) => {
    //let value=e.target.value;

    if (isAuthenticated) {
      setBNBAmount(value);

      handleToken(value);

      return value;
    } else {
      toast.warn("Please connect wallet!");
    }
  };
  const navigate = useNavigate();
  const handleSendOtp = async (e) => {
    setLoading(true);

    try {
      const res = await axiosMain.post("/resendOTP", {
        address: walletAddress,
      });

      setOtpStatus(res);
      // console.log("otp status",{otpStatus})
      if (res.data.status) {
        toast.success("OTP has been sent to your registered email address");

        setSendOtp(true);

        setLoading(false);
        setShowOtpVerify(true);

        return true;
      } else {
        toast.error("Email address invalid");
        navigate("/update-profile");
        return false;
      }
    } catch (e) {
      // console.log({e})
      toast.error("Please update your mail first!");
      navigate("/update-profile");
    }
  };

  const handleVerify = async (e) => {
    setLoading(true);
    if (otp) {
      setLoading(true);
      const res = await axiosMain.post("https://test.taboo.io/verify-otp", {
        otp: otp,
        address: walletAddress,
      });
      // toast.success("OTP Verifed")
      setShowOtpVerify(false);
      await handleBuyCoin();
    } else {
      setLoading(false);

      toast.error("Otp verification failed!");
    }
  };

  const handleBuyCoin = async () => {
    if (isAuthenticated) {
      if (bnbAmount > 0 && tabooAmount > 0) {
        setIsloading(true);

        let hash = false;

        if (currencyType == "BNB") {
          // hash=await BuyTaboo(bnbAmount,tabooAmount)

          let web3js = await web3();

          let chainId = await web3js.eth.getChainId();
          // console.log('chainId',chainId)

          if (chainId == 56) {
            let tx = await BuyTabooCoin(walletAddress, bnbAmount);

            hash = await Transaction({ tx: tx });
          } else {
            toast.warn("Please connect to Binance network!");
          }
        } else if (currencyType == "ETH") {
          let web3js = await web3();

          let chainId = await web3js.eth.getChainId();
          console.log("chainId", chainId);

          if (chainId == 1) {
            let tx = await BuyTabooCoin(walletAddress, bnbAmount);

            hash = await Transaction({ tx: tx });
          } else {
            toast.warn("Please connect to Etherium network!");
          }

          /*try{

              let usdt=await ApproveETH(bnbAmount,walletAddress);

              let txObj={tx:usdt};

              let trx=await Transaction(txObj);

              hash=await BuyTabooByETH(bnbAmount,tabooAmount)

            }catch(e){console.log(e)
                 hash=false;
            }
              */
        } else if (currencyType == "USDT") {
          //alert("hello")

          let web3js = await web3();

          let chainId = await web3js.eth.getChainId();
          // console.log('chainId',chainId)

          if (chainId == 56) {
            try {
              let usdt = await BuyTabooCoinByOtherToken(
                walletAddress,
                bnbAmount,
                currencyType
              );

              let txObj = { tx: usdt };

              hash = await Transaction(txObj);

              //hash=await BuyTabooByUSDT(bnbAmount,tabooAmount)
            } catch (e) {
              console.log(e);
              hash = false;
            }
          } else {
            toast.warn("Please connect to Binance network!");
          }
        } else if (currencyType == "Matic") {
          let web3js = await web3();

          let chainId = await web3js.eth.getChainId();
          // console.log('chainId',chainId)

          if (chainId == 137) {
            let tx = await BuyTabooCoin(walletAddress, bnbAmount);

            hash = await Transaction({ tx: tx });
          } else {
            toast.warn("Please connect to Polygon network!");
          }

          // hash=await BuyTabooByMatic(bnbAmount,tabooAmount)
        } else {
          let web3js = await web3();

          let chainId = await web3js.eth.getChainId();
          // console.log('chainId',chainId)

          if (chainId == 56) {
            try {
              let usdt = await BuyTabooCoinByOtherToken(
                walletAddress,
                bnbAmount,
                currencyType
              );

              let txObj = { tx: usdt };

              hash = await Transaction(txObj);

              //hash=await BuyTabooByUSDT(bnbAmount,tabooAmount)
            } catch (e) {
              console.log(e);
              hash = false;
            }
          } else {
            toast.warn("Please connect to Binance network!");
          }
        }

        if (hash) {
          let web3js = await web3();

          // let chainId=await web3js.eth.getChainId();

          let transactionData = await web3js.eth.getTransaction(
            hash.transactionHash
          );

          //  console.log("babalALX",transactionData);
          let amount = tabooAmount.toFixed(0);

          let txAmount = transactionData.value / 1000000000000000000;

          txAmount = parseFloat(txAmount);

          let tempAmount = parseFloat(bnbAmount);

          //  console.log("tx amount",txAmount);

          //  console.log("bnb amount",tempAmount)

          let toAddress = transactionData.to;

          toAddress = toAddress.toLocaleLowerCase();

          if (
            txAmount == tempAmount &&
            toAddress == "0x64e50e62c7a8e7fd6ea4c0ac6c38086571a4d8b3"
          ) {
            await handleBNBVerification(txAmount);

            setIsloading(false);

            getBNBBalance(walletAddress);

            //let res=await axiosMain.post("https://test.taboo.io/transfer-coin",{address:walletAddress,amount:amount,hash:hash.transactionHash});

            let res = await axiosMain.post(
              "https://blockchain.taboo.io/send-token",
              {
                address: walletAddress,
                amount: amount,
                hash: hash,
                email: "rajkumar.live.mp@gmail.com",
                type: currencyType,
                crypto_amount: bnbAmount,
              }
            );

            await TabooTokenBalance(walletAddress);

            toast.success(
              "Due to system upgrades, tokens will be sent  within 24 hours!"
            );
          } else {
            toast.warn("Invalid transaction!");
          }

          if (amount >= 5000000) {
            let msg =
              "Due to" +
              amount +
              " M amount you will get token within 24 hours!";

            toast.success(msg);
          }
        } else {
          let amount = tabooAmount.toFixed(0);

          setIsloading(false);

          if (amount >= 5000000) {
            let msg =
              "Due to" +
              amount +
              " M amount you will get token within 24 hours!";

            toast.success(msg);
          } else {
            toast.warn("Something went wrong!");
          }
        }
      } else {
        toast.warn("Please enter amount first!.");
      }
    } else {
      toast.warn("please connect wallet!");
    }
  };

  const handleCurrecy = async (e) => {
    let value = e.target.value;

    setCurrencyType(value);

    // console.log("currencyTyp",value)

    handleToken(bnbAmount);

    if (value == "BNB") {
      setCryptoIcon(bsymbol);

      getBNBBalance(walletAddress);

      // let balance=await BNBBalance(walletAddress);

      // setBnbBalance(balance);
    } else {
      if (value == "ETH") {
        setCryptoIcon(esymbol);
      } else if (value == "Matic") {
        setCryptoIcon(mSymbol);
      } else if (value == "USDT") {
        setCryptoIcon(uSymbol);
      } else if (value == "uniswap") {
        setCryptoIcon(uniswapSymbol);
      } else if (value == "wrapped-ada") {
        setCryptoIcon(wadaSymbol);
      } else if (value == "wrapped-bitcoin") {
        setCryptoIcon(wbtcSymbol);
      } else if (value == "chainlink") {
        setCryptoIcon(chainlinkSymbol);
      } else if (value == "dogecoin") {
        setCryptoIcon(dogecoinSymbol);
      } else {
        setCryptoIcon(value);
      }

      // let balance=await getBalance(walletAddress,value)

      //   setBnbBalance(balance);

      getBNBBalance(walletAddress);
    }
  };

  const handleOtp = (e) => {
    let value = e.target.value;

    if (value) {
      setOtp(value);
    }
  };

  return (
    <>
      <section className="profile-upper-banner">
        <Container fluid className="p-0">
          <Row>
            <Col>
              <div className="profile-banner">
                <img className="img-fluid m-0" src={"images/Team/team6.png"} />
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg={10} className="m-auto">
              <div
                class="buy-coin-box-outer m-auto"
                style={{ marginTop: "0px" }}
              >
                <Row className="align-items-top">
                  <Col xl={8} lg={8} md={8} sm={12} xs={12} className="m-auto">
                    <div class="buy-coin-shadow-box">
                      <label>
                        <div className="flex-box-bnb">
                          <img className="profile-main-img" src={cryptoIcon} />
                          <Form.Select
                            aria-label="Default select example"
                            onChange={(e) => handleCurrecy(e)}
                          >
                            <option value="BNB">BNB</option>
                            <option value="ETH">ETH</option>
                            <option value="Matic">Matic</option>
                            <option value="USDT">USDT</option>
                            <option value="wrapped-ada">wADA</option>
                            <option value="wrapped-bitcoin">wBTC</option>
                            <option value="dogecoin">DogeCoin</option>
                            <option value="chainlink">ChainLink</option>

                            <option value="uniswap">Uniswap</option>

                            {/* 
                                               
                                              
                                              
                                             
                                             */}
                          </Form.Select>
                        </div>
                        <small className="">
                          Current Balance{" "}
                          {isLoadingBalance
                            ? "Loading"
                            : bnbBalance && bnbBalance}
                        </small>
                      </label>
                      <InputGroup className="mb-3">
                        <FormControl
                          placeholder=""
                          onKeyUp={(e) => handleBNB(e)}
                        />
                        <InputGroup.Text id="basic-addon2"></InputGroup.Text>
                      </InputGroup>

                      <div className="swap-icon">
                        <img
                          className="img-fluid m-0"
                          src={"images/arrow.png"}
                        />
                      </div>

                      <label>
                        <div>
                          <img
                            className="profile-main-img"
                            src={"images/bnb2.png"}
                          />{" "}
                          Taboo
                        </div>
                        <small className="">Taboo balance {tabooToken}</small>
                      </label>

                      <InputGroup className="mb-3">
                        <FormControl placeholder="" readOnly />
                        <InputGroup.Text id="basic-addon2">
                          {tabooAmount}
                        </InputGroup.Text>
                      </InputGroup>
                      <p className="tol-line d-none">
                        <span>Slippage Tolerance</span>
                        <span>0.5%</span>{" "}
                      </p>
                      <div>
                        <button
                          disabled={isLoading}
                          onClick={handleSendOtp}
                          className="common-btn"
                        >
                          {isLoading ? "Please Wait" : "Buy Now"}
                        </button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="modal-comming-soon below-18-popup"
          backdrop="static"
          keyboard={false}
          show={showOtpVerify}
          onHide={() => {
            setShowOtpVerify(false);
          }}
        >
          <Modal.Header className="border-none p-0"></Modal.Header>
          <Modal.Body className="outer-age-box">
            <Col className="justify-content-md-center ">
              <h3 className="main-heading-inner ">
                <a href="">
                  <img src={"images/right-arrow.png"} />
                </a>{" "}
                {sendOtp ? "Enter otp sent on your mail" : "Update Profile"}
              </h3>
              <div>
                <Row>
                  <Col md={8} sm={8} xs={12}>
                    <div className="outer-create-form">
                      <Form.Group className="mb-4">
                        <Form.Control
                          type="text"
                          onKeyUp={(e) => handleOtp(e)}
                          placeholder="Enter Otp"
                        />
                      </Form.Group>

                      <div className="align-center-button">
                        <button
                          className="blue-btn width-btn"
                          disabled={loading ? true : false}
                          onClick={(e) => handleVerify(e)}
                        >
                          {loading ? "Processing" : "Verify"}
                        </button>
                      </div>
                    </div>
                  </Col>
                  <Col md={4} sm={4} xs={12}></Col>
                </Row>
              </div>
            </Col>
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
};
export default BuyCoin;
