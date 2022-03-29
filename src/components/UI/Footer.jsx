import React from "react";
import {
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Link,
  InputGroup,
  Container,
} from "react-bootstrap";
const Footer = () => {
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
                  <a href="">Discover</a>
                </li>
                <li>
                  <a href="">Connect wallet</a>
                </li>
                <li>
                  <a href="">Create Item</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={2} sm={2}>
            <div>
              <h6>Info</h6>
              <ul>
                <li>
                  <a href="">Download</a>
                </li>
                <li>
                  <a href="">Demos</a>
                </li>
                <li>
                  <a href="">Support</a>
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
            <p class="cookies-box">
              <b>We use cookies for better service</b>
              <a href="">Accept</a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
