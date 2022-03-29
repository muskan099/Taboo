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
import { useDispatch, useSelector } from "react-redux";
import Connect from "../../helpers/Connect";

import userIcon from "../../assets/user-icon.png";

import { loginSaga } from "../../store/reducers/authReducer";

const Header = () => {
  const dispatch = useDispatch();
  const handleLogin = async () => {
    let address = await Connect();
    if (address && address.length) {
      dispatch(loginSaga({ address: address[0] }));
    }
  };

  const { isAuthenticated, walletAddress } = useSelector((state) => state.auth);
  console.log({ isAuthenticated });

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

          {!isAuthenticated ? (
            <Button
              className="common-btn"
              variant="outline-success"
              onClick={() => handleLogin()}
            >
              Connect Wallet
            </Button>
          ) : (
            <>
              {`${walletAddress?.slice(0, 3)}...${walletAddress?.slice(-3)}`}
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <img src={userIcon} alt="" height={30} width={30} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          )}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
