import { Link, useNavigate } from "react-router-dom";
import AboutUsFooter from "./AboutUsFooter";
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
  Tab,
  Tabs,
} from "react-bootstrap";
import Header from "../components/UI/Header";
const Aboutus = () => {
  return (
    <>
      <section className="profile-upper-banner">
        <Container fluid className="p-5">
          <Row>
            <Col>
              <div className="profile-banner p-10">
                {/* <img className="img-fluid m-0"  src={"images/Team/team6.png"} /> */}

                <h1>About Us</h1>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="align-items-center">
            <Col lg={3} md={3} sm={12} xs={12}>
              <div className="outer-explor-box">
                <Link to="#">
                  <img
                    className="img-main"
                    src="https://taboonft.s3.us-east-2.amazonaws.com/images/file_1654255743406.jpg"
                  />
                </Link>

                <div className="exploror-list-box">
                  <div className="price-line">
                    <h5>Khloe</h5>
                    <h6>50000 Taboo</h6>
                  </div>
                  <div className="stoke-line">
                    <ul>
                      <li>
                        <img
                          src={
                            "https://taboonft.s3.us-east-2.amazonaws.com/icons/Taboo-logo-3.61280c399d2252.47125802.png"
                          }
                        />
                      </li>
                    </ul>
                    <h6>in stock</h6>
                  </div>
                  <hr></hr>
                  <div className="bid-row">
                    <span>
                      <img src={"images/up-arrow.png"} /> Highest Bid
                    </span>
                    <span>
                      <b>0 $ Taboo</b>
                    </span>
                    <span>
                      {" "}
                      New Bid <img src={"images/up-arrow.png"} />{" "}
                    </span>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={6} md={6} sm={12} xs={12}>
              <div>
                <div className="set-pading">
                  <h2 className="color-font">
                    Adult NFT & Streaming Media Project
                  </h2>
                  <h4>
                    Taboo is an adult NFT & streaming media project.
                    Specializing in highly exclusive content.
                  </h4>
                  <p>
                    With models, whose content is not like other adult tokens.
                    Our marketplace is cutting-edge, with its creation by the
                    Enjin Coin Marketplace Developers
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={3} sm={12} xs={12}>
              <div className="outer-explor-box">
                <Link to="#">
                  <img
                    className="img-main"
                    src="https://taboonft.s3.us-east-2.amazonaws.com/images/file_1653921390668.jpg  "
                  />
                </Link>

                <div className="exploror-list-box">
                  <div className="price-line">
                    <h5>Khloe</h5>
                    <h6>50000 Taboo</h6>
                  </div>
                  <div className="stoke-line">
                    <ul>
                      <li>
                        <img
                          src={
                            "https://taboonft.s3.us-east-2.amazonaws.com/icons/Taboo-logo-3.61280c399d2252.47125802.png"
                          }
                        />
                      </li>
                    </ul>
                    <h6>in stock</h6>
                  </div>
                  <hr></hr>
                  <div className="bid-row">
                    <span>
                      <img src={"images/up-arrow.png"} /> Highest Bid
                    </span>
                    <span>
                      <b>0 $ Taboo</b>
                    </span>
                    <span>
                      {" "}
                      New Bid <img src={"images/up-arrow.png"} />{" "}
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <br></br>
          <Row className="mt-4">
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="text-justify m-4">
                <h2>Selectively Curated Super Models</h2>
                <p>
                  TABOO is selectively curating the most exclusive content
                  creator list in existence, providing the highest quality and
                  most exclusive SFW, NSFW as well as XXX exclusive media from a
                  list of highly recognised creators. There is an application
                  process, in which any adult performer who wishes to be on the
                  platform will have to qualify and obtain approval first. This
                  selectivity and exclusivity creates a media platform of the
                  utmost quality and soon everyone will understand why Taboo is
                  the best in the industry.
                </p>
              </div>

              <div className="m-4">
                <img className="img-fluid m-0" src={"images/about-us.jpeg"} />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="m-4">
                <img className="img-fluid m-0" src={"images/about-us-2.jpeg"} />
              </div>
              <div className="text-justify m-4">
                <h2>NFT Marketplace & Media Platform</h2>
                <p>
                  The platform recently launched its native marketplace with
                  cutting-edge functionalities with a redesign of their UI/UX.
                  Users can now purchase the $TABOO token, sell and trade the
                  platform's native NFTs, or stake their current holdings to
                  earn a guaranteed APY (Annual Percentage Yield) of up to 20%.
                </p>
              </div>
            </Col>
          </Row>
          <br></br>
          <Row className="align-items-center mt-2">
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="m-4 text-justify">
                <h2>Tiered Content for Discerning Consumers</h2>
                <p>
                  The Taboo marketplace works on a 4-tier system, where each
                  tier gives access to a higher level of content in the form of
                  an exclusive NFT collection. The more tokens a person holds,
                  the more content they can access, similar to buying Diamond
                  tier on Patreon. Each Tier will grant access to more and more
                  content, with the highest quality and most exclusive content
                  contained at the highest tier for the most discerning of
                  consumers. Higher tiers also unlock benefits such as VIP party
                  invites to Taboo Mansions, industry social events, model meet
                  and greets, and more! In essence, it gives complete access to
                  the world of TABOO, both for its online and in-person
                  entertainment events (1st event was held in Phuket, Thailand
                  August 2022) alongside some other crypto utilities.
                </p>
                <p>
                  Taboo has also released the highly anticipated TABOOPUNKS, the
                  platform's own NFT collection. Owning one of these, either a
                  bronze/silver/gold TABOOPUNK, provides a direct ticket to
                  exclusive VIP parties with supermodels. In addition, investors
                  who own the TABOOPUNK NFT will have access to all areas of the
                  marketplace and some under-development or yet-to-be-released
                  utilities, such as the Taboo Metaverse and TABOOSPACE. A
                  TABOOPUNK is an NFT with utility, providing unlimited access
                  to the platform and many of its exclusive events.
                </p>
                <p>Buy, sell, interact, create, earn. The $TABOO way.</p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="m-4">
                <img className="img-fluid" src={"images/about-us-3.jpeg"} />
              </div>
            </Col>
          </Row>
        </Container>
        {/* <Container>
          <Row className="align-items-top">
            <Col xl={12} lg={12} md={12} sm={12} xs={12} className="m-auto">
            <img className="search-icon" src={"images/about-us.jpeg"} alt="logo" />
              <p className="align-item-left">
                Taboo is a unique adult NFT & streaming media project
                specializing in highly exclusive content.
              </p>

              <p className="align-item-left">
                Our models have content not like other adult tokens. The
                marketplace is built to be user friendly and serves as a
                platform to explore the user’s fantasies, purchase the finest
                adult NFTs and invest tokens for high return yields, all in one
                place.
              </p>

              <p className="align-item-left">
                The platform recently launched its native marketplace with
                cutting-edge functionalities with a redesign of their UI/UX.
                Users can now purchase the $TABOO token, sell and trade the
                platform's native NFTs, or stake their current holdings to earn
                a guaranteed APY (Annual Percentage Yield) of up to 20%.
              </p>

              <p className="align-item-left">
                The Taboo marketplace works on a 4-tier system, where each tier
                gives access to a higher level of content in the form of an
                exclusive NFT collection. The more tokens a person holds, the
                more content they can access, similar to buying Diamond tier on
                Patreon. Each Tier will grant access to more and more content,
                with the highest quality and most exclusive content contained at
                the highest tier for the most discerning of consumers. Higher
                tiers also unlock benefits such as VIP party invites to Taboo
                Mansions, industry social events, model meet and greets, and
                more! In essence, it gives complete access to the world of
                TABOO, both for its online and in-person entertainment events
                (1st event was held in Phuket, Thailand August 2022) alongside
                some other crypto utilities.
              </p>

              <p className="align-item-left">
                Taboo has also released the highly anticipated TABOOPUNKS, the
                platform's own NFT collection. Owning one of these, either a
                bronze/silver/gold TABOOPUNK, provides a direct ticket to
                exclusive VIP parties with supermodels. In addition, investors
                who own the TABOOPUNK NFT will have access to all areas of the
                marketplace and some under-development or yet-to-be-released
                utilities, such as the Taboo Metaverse and TABOOSPACE. A
                TABOOPUNK is an NFT with utility, providing unlimited access to
                the platform and many of its exclusive events.
              </p>

              <p className="align-item-left">
                TABOO is selectively curating the most exclusive content creator
                list in existence, providing the highest quality and most
                exclusive SFW, NSFW as well as XXX exclusive media from a list
                of highly recognised creators. There is an application process,
                in which any adult performer who wishes to be on the platform
                will have to qualify and obtain approval first. This selectivity
                and exclusivity creates a media platform of the utmost quality
                and soon everyone will understand why Taboo is the best in the
                industry.
              </p>

              <p className="align-item-left">
                Buy, sell, interact, create, earn. The $TABOO way.
              </p>
            </Col>
          </Row>
        </Container> */}
      </section>
      <AboutUsFooter />
    </>
  );
};

export default Aboutus;
