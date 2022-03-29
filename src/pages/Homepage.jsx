import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

const Homepage = () => {
  const [showImg, setShowImg] = useState(false);
  return (
    <>
      <section className="banner-section">
        <Container>
          <Row>
            <Col>
              <div>
                <img src={"images/Logo_big.png"} alt="logo" />
                <h4>Taboo is an Adult NFT & The playboy of Crypto</h4>
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
          <Row className="align-items-center">
            <Col md={4} sm={6} xs={12}>
              <div
                className="team-side-box about-box-new aos-init aos-animate"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                <h2>
                  <span>What Is</span>
                  <span>Taboo</span>
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took
                </p>
                <div className="d-flex align-items-center">
                  <a href="" class="common-btn">
                    Marketplace{" "}
                  </a>
                  <a href="" class="common-btn white-btn">
                    Whitepaper{" "}
                  </a>
                </div>
              </div>
            </Col>
            <Col md={3}></Col>
            <Col md={5} sm={6} xs={12}>
              <div
                class="nft-side-about-us aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="600"
              >
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
                    className="aos-init aos-animate"
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-delay="600"
                  >
                    <div>
                      <h4>Q1 2022</h4>
                    </div>
                  </li>
                  <li
                    class="roadmap-new-box aos-init aos-animate"
                    data-aos="fade-right"
                    data-aos-duration="800"
                    data-aos-delay="600"
                  >
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
                    className="aos-init aos-animate"
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-delay="600"
                  >
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
                    className="aos-init aos-animate"
                    data-aos="fade-right"
                    data-aos-duration="800"
                    data-aos-delay="600"
                  >
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
          <img src={"images/copy.png"} alt="" />
          <div>
            <h4>Taboo Smart Contract</h4>
            <p>0559b889b8g89g98g89g8g89g89g...</p>
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
                  class={` how-it-image-box ${showImg ? "full-img-show" : ""} `}
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley{" "}
                </p>
                <a href="#">Buy Now</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="team-sec-new">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={3} sm={6} xs={12} className="order-2 m-auto">
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took
                </p>
              </div>
            </Col>
            <Col md={9} sm={12} xs={12}>
              <div>
                <ul className="team-list">
                  <li>
                    <div>
                      <img
                        className="aos-init aos-animate"
                        data-aos="fade-right"
                        data-aos-duration="900"
                        data-aos-delay="200"
                        src={"images/Team/team1.png"}
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
                        data-aos="fade-down"
                        data-aos-duration="800"
                        data-aos-delay="250"
                        src={"images/Team/team2.png"}
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
                        src={"images/Team/team3.png"}
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
                        src={"images/Team/team4.png"}
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
                        className="aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                        src={"images/Team/team5.png"}
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
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="270"
                        src={"images/Team/team6.png"}
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
                        data-aos-duration="200"
                        data-aos-delay="500"
                        src={"images/Team/team7.png"}
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
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Homepage;