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
                  Want an exclusive NFT of one of our supermodels partners?
                </h4>
                <h4>Access to higher tier, but classy XXX-rated NFT’s?</h4>
                <h4>Live shows + VR content?</h4>
                <h4>Metaverse access?</h4>
              </div>
            </Col>
            <Col md={4} sm={2}>
              <div>
                <h4>
                  Invitations to live TABOO Mansion events to meet our partnered
                  supermodels? Attendance to our upcoming TABOO Festival?
                </h4>
                <h4>
                  Or maybe you are a content creator that would like to test out
                  the opportunity to generate passive income rewards
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
