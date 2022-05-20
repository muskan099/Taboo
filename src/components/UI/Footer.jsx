import React, { useState } from "react";
import {
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Link,
  Modal,
  InputGroup,
  Container,
} from "react-bootstrap";
import { toast } from "react-toastify";
import axiosMain from "../../http/axios/axios_main";

const cookiesAccepted = localStorage.getItem("cookies");

const Footer = () => {
  // Modal Code
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [showCookies, setShowCookies] = useState(
    cookiesAccepted === "accepted" ? false : true
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const subscribeHandle = async () => {
    if (!email) {
      toast.error("Please Enter Email First");
      return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      toast.error("Invalid Email");
      return;
    }

    await axiosMain.post("/subscribe", { email });
    toast.success("You've been subscribed successfully");
  };

  return (
    <footer className="footer-box mt-0">
      <Container>
        <Row className="footer-upper-row">
          <Col md={4} sm={4}>
            <div>
              <img
                src={"https://taboonft.s3.us-east-2.amazonaws.com/icons/Logo_Small.png"}
                className="foot-logo"
                alt="logo"
              />
              <h4>The Playboy of Crypto</h4>
              <div className="social-links">
                


              <a href="https://mobile.twitter.com/taboo_io" target={'_blank'}>
                  <img src="https://taboonft.s3.us-east-2.amazonaws.com/icons/twitter.png" width={'40'} />
                  </a>


                
                <a href="https://t.me/TABOO_OFFICIAL" target={'_blank'} className="telegram-link">
                  <img src="https://taboonft.s3.us-east-2.amazonaws.com/icons/telegram.png" width={'40'} />
                  </a>

                       
                  <a href="https://discord.gg/fuYDVuVwnd" target={'_blank'} className="insta-link">
                  <img src="https://taboonft.s3.us-east-2.amazonaws.com/icons/discord.png" width={'40'} />
                </a>




                <a href="https://instagram.com/taboo.token?igshid=YmMyMTA2M2Y=" target={'_blank'} className="insta-link">
                  <img src="https://taboonft.s3.us-east-2.amazonaws.com/icons/instagram.png" width={'40'} />
                </a>


                
                </div>
            </div>
          </Col>
          <Col md={2} sm={2}>
            <div>
              <h6>Crypto</h6>
              <ul>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setShow(true);
                    }}
                  >
                    Discover
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setShow(true);
                    }}
                  >
                    Connect wallet
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setShow(true);
                    }}
                  >
                    Create Item
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={2} sm={2}>
            <div>
              <h6>Info</h6>
              <ul>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setShow(true);
                    }}
                  >
                    Download
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setShow(true);
                    }}
                  >
                    Demos
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setShow(true);
                    }}
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={4} md={4} sm={4}>
            <div>
              <h6>Join Newsletter</h6>
              <div className="newsletter-box">
                <p>Subscribe to our newsletter to receive updates</p>
                <InputGroup className="">
                  <FormControl
                    placeholder="Enter Your Email"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    onClick={subscribeHandle}
                  >
                    <img src={"https://taboonft.s3.us-east-2.amazonaws.com/icons/left-arrow.png"} alt="logo" />
                  </Button>
                </InputGroup>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="copyright-line">
          <Col md={6} sm={6}>
            <p>copyright of TABOO. All rights reserved</p>
          </Col>
          <Col md={6} sm={6}>
            {showCookies && (
              <p className="cookies-box">
                <b>We use cookies for better service</b>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setShowCookies(false);
                    localStorage.setItem("cookies", "accepted");
                  }}
                >
                  Accept
                </a>
              </p>
            )}
          </Col>
        </Row>
      </Container>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-comming-soon"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton className="border-none"></Modal.Header>
        <Modal.Body>
          <div className="outer-div">
            <img src={"images/coming-soon.png"} className="img-fluid" />
            <h5>This page will be Added Soon</h5>
          </div>
        </Modal.Body>
      </Modal>
    </footer>
  );
};

export default Footer;
