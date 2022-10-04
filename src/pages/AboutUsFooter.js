import React from "react";
import {
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Modal,
  InputGroup,
  Container,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
function AboutUsFooter() {
  return (
    <>
      <footer className="footer-box-about mt-0">
        <Container>
          <Row>
            <Col md={4} sm={4}>
              <div>
                <h4>
                  Want a minted NFT of a sexy Playboy model in lingerie or a
                  bikini?
                </h4>
                <h4>Access to XXX-rated NFTs?</h4>
                <h4>Private live shows + Rated-R videos?</h4>
                <h4>VR content?</h4>
              </div>
            </Col>
            <Col md={4} sm={2}>
              <div>
                <h4>
                  The ability to transfer NFTs seamlessly from various networks
                  onto our marketplace?
                </h4>
                <h4>
                  Or maybe you are a content creator that would like to test out
                  the oppurtunity to generate passive income rewards
                </h4>
              </div>
            </Col>
            <Col md={2} sm={2} className="d-none">
              <div>
                <h6>Info</h6>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4}>
              <div className="about-footer-container">
                <h1>The answer to all these questions is TABOO</h1>
                <h2 className="about-footer-container-h2">
                  Buy, sell, interact, create, earn.<span>The $TABOO way.</span>
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default AboutUsFooter;
