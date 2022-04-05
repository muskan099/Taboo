import React, { useState } from "react";
import { Row, Col, Container, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

const onClose = () => {
  window.close();
};

const Homepage = () => {
  const isAbove18 = !!localStorage.getItem("below-18");
  console.log(isAbove18);
  const [showImg, setShowImg] = useState(false);
  const [show, setShow] = useState(false);
  const [isBelow18, setIsBelow18] = useState(isAbove18 ? false : true);
  const [ageError, setAgeError] = useState(false);

  const handleClose = () => setShow(false);
  const handleAbove18 = () => {
    setIsBelow18(false);
    localStorage.setItem("below-18", false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("0x9abdba20edfba06b782126b4d8d72a5853918fd0");
    toast.success("Smart Contract Copied To Clipboard");
  };

  return (
    <>
      <section className="banner-section">
        <Container>
          <Row>
            <Col>
              <div>
                <img
                  src={"images/Logo_big.png"}
                  alt="logo"
                  className="taboo-logo"
                />
                <h4>TABOO IS AN ADULT NFT PLATFORM & PLAYBOY OF CRYPTO</h4>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="total-cap-banner">
          <ul>
            <li>
              <div>
                <p>Total Market Cap</p>
                <h5>$37, 893, 516M</h5>
              </div>
            </li>
            <li>
              <div>
                <p>Current Price</p>
                <h5>$0.003874</h5>
              </div>
            </li>
            <li>
              <div>
                <p>Volume 24H</p>
                <h5>$1,169,856M</h5>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="partner-section">
        <Container>
          <Row>
            <Col>
              <div>
                <ul className="partner-list">
                  <li>
                    <img
                      src={"images/newsnow-publishing-limited-vector-logo.png"}
                      alt="logo"
                    />
                  </li>
                  <li>
                    <img
                      src={"images/1200px-Business_Insider_Logo.svg.png"}
                      alt="logo"
                    />
                  </li>
                  <li>
                    <img src={"images/CMC-02.png"} alt="logo" />
                  </li>
                  <li>
                    <img src={"images/g6822.png"} alt="logo" />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="banner-section-2">
        <Container>
          <Row className="">
            <Col md={4} sm={6} xs={12}>
              <div
                className="team-side-box about-box-new"
                id="taboo-about-us-box"
              >
                <h2>
                  <span>What Is</span> <span>Taboo</span>
                </h2>
                <p>
                  At TABOO, nothing is forbidden. We aim to promote personal
                  empowerment, inspiring our holders to be confident, happy, and
                  excited to explore their taboo fantasies. Put simply, Taboo
                  will not only be a platform to discover adult content from
                  carefully selected models, but also a gateway to some of the
                  world’s most beautiful NFTs, with a beautiful TABOO Metaverse
                  to come The best bit? That would be the full integration of
                  NFT blockchain technology, the fiat on-ramp for easy purchase,
                  breath-taking Virtual Reality experiences and the finest
                  content, making Taboo a genuine market disruptor within the
                  adult industry
                </p>
                <div className="d-flex align-items-center">
                  <a
                    href=""
                    className="common-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setShow(true);
                    }}
                  >
                    Marketplace{" "}
                  </a>
                  <a
                    href="https://cdn.shopify.com/s/files/1/0573/4540/9212/files/Taboo_Token_Whitepaper_02_final_2.pdf?v=1629456040"
                    className="common-btn white-btn"
                    target={"_blank"}
                  >
                    Whitepaper{" "}
                  </a>
                </div>
              </div>
            </Col>
            <Col md={3}></Col>
            <Col md={5} sm={6} xs={12}>
              <div className="nft-side-about-us" id="taboo-about-us-nft">
                <h5>KHLOE TERAE NFTs</h5>
                <img
                  className="img-fluid"
                  src={"images/about-img.png"}
                  alt="about-Image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="">
        <Container>
          <Row>
            <Col>
              <div className="main-timeline">
                <ul className="inner-roadmap-list">
                  <div
                    className="aos-init aos-animate"
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-delay="600"
                  >
                    <h2>
                      <span>Road</span>
                      <span>Map</span>
                    </h2>
                  </div>
                  <li
                    className="aos-init aos-animate show-roadmap-content"
                    data-aos="fade-left"
                    data-aos-duration="20"
                    data-aos-delay="20"
                  >
                    <button className="button-plus Q1">
                      <img src={"images/plus.png"} alt="icon" />
                    </button>
                    <div>
                      <h4>Q1 2022</h4>
                      <ul>
                        <li>
                          - Cross chain SDK integration will have begun by now,
                          with cross chain functionalities Including chains like
                          Polygon, Harmony, Cardano, and more.
                        </li>
                        <li>
                          - Smart Contract Audits on our Fully Integrated DeFi
                          platform.
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li
                    className="roadmap-new-box aos-init aos-animate show-roadmap-content"
                    data-aos="fade-right"
                    data-aos-duration="20"
                    data-aos-delay="20"
                  >
                    <button className="button-plus Q2">
                      <img src={"images/plus.png"} alt="icon" />
                    </button>
                    <div>
                      <h4>Q2 2022</h4>
                      <ul>
                        <li>
                          - Cross chain SDK integration will have begun by now,
                          with cross chain functionalities Including chains like
                          Polygon, Harmony, Cardano, and more.
                        </li>
                        <li>
                          - Smart Contract Audits on our Fully Integrated DeFi
                          platform.
                        </li>
                        <li>
                          - Full integration of the Adult Crypto Currency Dex
                          and our fully operable DeFi platform.
                        </li>
                        <li>- More top CEX's.</li>
                        <li>- Strategic Crypto Partnerships</li>
                        <li>
                          - Integration of a secondary token, for platform use.
                        </li>
                        <li>
                          - Taboo Digital Periodical (Magazine) will begin.
                        </li>
                        <li>- Taboo Mansion parties will begin.</li>
                        <li>
                          - live convention events and formal marketing to adult
                          industry counterparts
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className="aos-init aos-animate show-roadmap-content"
                    data-aos="fade-left"
                    data-aos-duration="20"
                    data-aos-delay="20"
                  >
                    <button className="button-plus Q3">
                      <img src={"images/plus.png"} alt="icon" />
                    </button>
                    <div>
                      <h4>Q3 2022</h4>
                      <ul>
                        <li>
                          - Launching V2 of the marketplace, with full features.
                        </li>
                        <li>- More Industry and Crypto partnerships</li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className="aos-init aos-animate show-roadmap-content"
                    data-aos="fade-right"
                    data-aos-duration="20"
                    data-aos-delay="20"
                  >
                    <button className="button-plus Q4">
                      <img src={"images/plus.png"} alt="icon" />
                    </button>
                    <div>
                      <h4>Q4 2022</h4>
                      <ul>
                        <li>- Marketplace V3, with VR integration.</li>
                        <li>- Metaverse integration.</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="how-to-buy-sec">
        <div
          className="copy-box aos-init aos-animate"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="500"
        >
          <img src={"images/copy.png"} alt="" onClick={copyToClipboard} />
          <div>
            <h4>Taboo Smart Contract</h4>
            <p>0x9abdba20edfba06b782126b4d8d72a5853918fd0</p>
          </div>
        </div>
        <Container>
          <Row>
            <Col>
              <div
                className="inner-box-how aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                <div
                  className={` how-it-image-box ${
                    showImg ? "full-img-show" : ""
                  } `}
                >
                  <img className="small-img" src={"images/2.png"} alt="" />
                  <img
                    className="full-img"
                    src={"images/full-View.png"}
                    alt=""
                  />
                  <button className="show-btn" onClick={() => setShowImg(true)}>
                    <img src={"images/Polygon.png"} alt="" />
                  </button>
                  <button
                    className="hide-btn"
                    onClick={() => setShowImg(false)}
                  >
                    X
                  </button>
                </div>
                <h3>How To Buy</h3>
                <p>
                  The process is simple, hit the BUY NOW button below and join
                  the world of exclusive content.
                </p>
                <a
                  href="https://pancakeswap.finance/swap#/swap?outputCurrency=0x9abDbA20EdFbA06B782126b4D8d72A5853918FD0"
                  target={"_blank"}
                >
                  Buy Now
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="team-sec-new">
        <Container fluid>
          <Row className="align-items-center">
            <Col
              xxl={3}
              xl={3}
              lg={3}
              md={3}
              sm={6}
              xs={12}
              className="order-2 mt-auto mb-auto ml-0"
            >
              <div
                className="team-side-box aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="1800"
                data-aos-delay="500"
              >
                <h2>
                  <span>Our</span>
                  <span>Team</span>
                </h2>
                <p>
                  Taboo’s founders and core-staff are all serial entrepreneurs,
                  from across multiple industries, that have all found a
                  connection within the world of Cryptocurrency. What each one
                  of them has in common is a relentless commitment to excellence
                  and the vision to build the world’s finest adult entertainment
                  experience.
                </p>
              </div>
            </Col>
            <Col xxl={9} xl={9} lg={9} md={9} sm={12} xs={12}>
              <div>
                <ul className="team-list">
                  <li>
                    <div>
                      <img
                        className="aos-init aos-animate"
                        data-aos="fade-right"
                        data-aos-duration="900"
                        data-aos-delay="200"
                        src={"images/Team/teamn.jpg"}
                        alt="team"
                      />
                      <div className="content-team">
                        <h4>James</h4>
                        <p>CMO/CEO</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        className="aos-init aos-animate"
                        data-aos="fade-down"
                        data-aos-duration="800"
                        data-aos-delay="250"
                        src={"images/Team/teamn.jpg"}
                        alt="team"
                      />
                      <div className="content-team">
                        <h4>Majid</h4>
                        <p>CEO/Business Strategist</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        className="aos-init aos-animate"
                        data-aos="fade-right"
                        data-aos-duration="800"
                        data-aos-delay="200"
                        src={"images/Team/teamn.jpg"}
                        alt="team"
                      />
                      <div className="content-team">
                        <h4>Paul</h4>
                        <p>Developer</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        className="aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="250"
                        src={"images/Team/teamn.jpg"}
                        alt="team"
                      />
                      <div className="content-team">
                        <h4>Mat C</h4>
                        <p>Community Manager</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        className="aos-init aos-animate "
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                        src={"images/Team/teamn.jpg"}
                        alt="team"
                      />
                      <div className="content-team">
                        <h4>Eli</h4>
                        <p>Social Media Manager</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        className="aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="900"
                        data-aos-delay="500"
                        src={"images/Team/teamn.jpg"}
                        alt="team"
                      />
                      <div className="content-team">
                        <h4>
                          Khloe <br></br> terae
                        </h4>
                        <p>Brand Ambassador</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        className="aos-init aos-animate"
                        data-aos="fade-down"
                        data-aos-duration="900"
                        data-aos-delay="500"
                        src={"images/Team/teamn.jpg"}
                        alt="team"
                      />
                      <div className="content-team">
                        <h4>Conrad</h4>
                        <p>Legal Aid/Advisor</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
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
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="modal-comming-soon"
          backdrop="static"
          keyboard={false}
          show={isBelow18}
          onHide={handleAbove18}
        >
          <Modal.Header className="border-none"></Modal.Header>
          <Modal.Body>
            {!ageError ? (
              <>
                <div className="outer-div">Are You Above 18 Years Of Age</div>
                <button onClick={() => setAgeError(true)}>No</button>
                <button onClick={handleAbove18}>Yes</button>
              </>
            ) : (
              <div className="outer-div">
                Sorry You Can't Access The Website
              </div>
            )}
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
};

export default Homepage;
