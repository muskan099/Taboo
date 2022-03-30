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
const Footer = () => {
  // Modal Code
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="footer-box">
      <Container>
        <Row className="footer-upper-row">
          <Col md={4} sm={4}>
            <div>
              <img
                src={"images/Logo_Small.png"}
                className="foot-logo"
                alt="logo"
              />
              <h4>The Playboy of Crypto</h4>
            </div>
          </Col>
          <Col md={2} sm={2}>
            <div>
              <h6>Crypter</h6>
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
                <p>
                  Subscribe Our newsletter to get more free design course and
                  resource
                </p>
                <InputGroup className="">
                  <FormControl
                    placeholder="Enter Your Email"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    <img src={"images/left-arrow.png"} alt="logo" />
                  </Button>
                </InputGroup>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="copyright-line">
          <Col md={6} sm={6}>
            <p>Copyright ©️ 2022 UI8 LLC. All rights reserved</p>
          </Col>
          <Col md={6} sm={6}>
            <p className="cookies-box">
              <b>We use cookies for better service</b>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setShow(true);
                }}
              >
                Accept
              </a>
            </p>
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
    </section>
  );
};

export default Footer;
