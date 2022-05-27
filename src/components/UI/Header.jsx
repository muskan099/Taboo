import React, { useEffect, useState } from "react";
import Web3 from "web3";
import {
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Modal,
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
import { Provider } from "../../helpers/Web3Helper";
import userIcon from "../../assets/user-icon.png";
import { TabooBalance } from "../../helpers/TabooHelper";
import { TabooPunk } from "../../helpers/TabooPunk";
import { TierHelper } from "../../helpers/TierHelper";
import { loginSaga, logout } from "../../store/reducers/authReducer";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Modal Code
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogin = async () => {
    let address = await Connect();

    let punk = await TabooPunk(address[0]);
    // console.log("punks",punk)
    //let tier=punk>0?"3 Tier":"1 Tier"
    let balance = await TabooBalance(address[0]);
    let tier = await TierHelper(punk, balance);
    console.log("balance", balance);

    if (address && address.length) {
      dispatch(
        loginSaga({
          address: address[0],
          balance: balance,
          tabooPunk: punk,
          tier: tier,
        })
      );
    }
  };

  const { isAuthenticated, walletAddress } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated && window.location.pathname === "/login") {
      navigate("/login");
    } else if (!isAuthenticated && window.location.pathname === "/signup") {
      navigate("/signup");
    }
    // else if (!isAuthenticated) {
    //   navigate("/");
    // }
  }, [isAuthenticated]);

  const handleLogout = async () => {
    dispatch(logout({}));
  };

  useEffect(async () => {
    if (isAuthenticated) {
      let provider = await Provider();
      provider.on("accountsChanged", (accounts) => {
        console.log(accounts);
        handleLogin();
      });

      // Subscribe to chainId change
      provider.on("chainChanged", (chainId) => {
        console.log(chainId);
        handleLogin();
      });

      // Subscribe to provider connection
      provider.on("connect", (info) => {
        console.log(info);
      });

      // Subscribe to provider disconnection
      provider.on("disconnect", (error) => {
        console.log(error);

        handleLogout();
      });
    }
  });

  return (
    <header className="header-main">
      <Navbar bg="light" expand="lg">
        <Container className="header-container">
          <Navbar.Brand>
            <Link to="/">
              <img
                src={
                  "https://taboonft.s3.us-east-2.amazonaws.com/images/Logo_big-red.png"
                }
                alt="logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link href="/explore">Explore</Nav.Link>

              <a href="https://punks.taboo.io/" className="nav-link">
                TabooPunks
              </a>
              <Nav.Link onClick={handleShow}>Magazine</Nav.Link>
              <Nav.Link onClick={handleShow}>News</Nav.Link>
              <Nav.Link onClick={handleShow}>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/*<InputGroup className="header-search">
            <FormControl placeholder="Search By Username Or Hashtag" />
            <InputGroup.Text>
              <img src={"images/icons-Search-Line.png"} />
            </InputGroup.Text>
          </InputGroup>*/}

          {/*<Dropdown>
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
          </Dropdown>*/}

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
              <Dropdown className="d-flex align-items-center">
                <div className="wallet-address">
                  {" "}
                  {`${walletAddress?.slice(0, 3)}...${walletAddress?.slice(
                    -3
                  )}`}{" "}
                </div>
                <Dropdown.Toggle className="Dropdown-wallet-new">
                  <img src={userIcon} alt="" height={30} width={30} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/transactions" className="dropdown-item">
                      Collections
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item>
                    <Link to="/create-nft" className="dropdown-item">
                      Create NFT
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item>
                    <Link to="/create-stake" className="dropdown-item">
                      Create Stake
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item>
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
    </header>
  );
};

export default Header;
