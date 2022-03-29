import React, { useEffect } from "react";
import {
  Form,
  FormControl,
  Button,
  Row,
  Col,
  InputGroup,
  Dropdown,
  Navbar,
  Nav,
  NavDropdown,
  Container,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Connect from "../../helpers/Connect";

import userIcon from "../../assets/user-icon.png";

import { loginSaga, logout } from "../../store/reducers/authReducer";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    let address = await Connect();
    if (address && address.length) {
      dispatch(loginSaga({ address: address[0] }));
    }
  };

  const { isAuthenticated, walletAddress } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const handleLogout = async () => {
    dispatch(logout({}));
  };
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
              <div className="wallet-address"> {`${walletAddress?.slice(0, 3)}...${walletAddress?.slice(-3)}`} claa</div>
              <Dropdown>
                <Dropdown.Toggle  className="Dropdown-wallet-new">
                  <img src={userIcon} alt="" height={30} width={30} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Link to="/stakes" className="dropdown-item">
                      Stakes
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
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
