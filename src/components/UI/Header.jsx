import React from "react";
import {
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Link,
  InputGroup,
  Dropdown,
  Navbar,
  Nav,
  NavDropdown,
  Container,
} from "react-bootstrap";

const Header = () => {
  return (
    <header className="header-main">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src={"images/Logo_Small.png"} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link href="#action1">Explore</Nav.Link>
              <Nav.Link href="#action1">Magazine</Nav.Link>
              <Nav.Link href="#action1">News</Nav.Link>
              <Nav.Link href="#action1">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <InputGroup className="header-search">
            <FormControl placeholder="Search By Username Or Hashtag" />
            <InputGroup.Text>
              <img src={"images/icons-Search-Line.png"} />
            </InputGroup.Text>
          </InputGroup>

          <Dropdown>
            <Dropdown.Toggle className="notfication-link">
              <img src={"images/icons-Bell-Line.png"} alt="bell" />
            </Dropdown.Toggle>

            <Dropdown.Menu className="notify-dropdown">
              <div>
                <ul>
                  <li>
                    <div>
                      <p>
                        <small>Today</small>
                      </p>
                      <h6>Lorem Ipsum is simply dummy</h6>

                      <p>Lorem Ipsum is simply dummy text ...</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p>
                        <small>Today</small>
                      </p>
                      <h6>Lorem Ipsum is simply dummy</h6>

                      <p>Lorem Ipsum is simply dummy text ...</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p>
                        <small>Today</small>
                      </p>
                      <h6>Lorem Ipsum is simply dummy</h6>

                      <p>Lorem Ipsum is simply dummy text ...</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p>
                        <small>Today</small>
                      </p>
                      <h6>Lorem Ipsum is simply dummy</h6>

                      <p>Lorem Ipsum is simply dummy text ...</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p>
                        <small>Today</small>
                      </p>
                      <h6>Lorem Ipsum is simply dummy</h6>

                      <p>Lorem Ipsum is simply dummy text ...</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Dropdown.Menu>
          </Dropdown>

          <Button className="common-btn" variant="outline-success">
            Connect Wallet
          </Button>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
