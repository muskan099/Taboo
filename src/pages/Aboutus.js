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
          <Row className="align-items-top">
            <Col xl={9} lg={9} md={9} sm={12} xs={12} className="m-auto">
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
        </Container>
      </section>
    </>
  );
};

export default Aboutus;
