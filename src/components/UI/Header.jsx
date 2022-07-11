import React, { useEffect, useState, useRef } from "react";
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
  Ratio,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Connect from "../../helpers/Connect";
import { Provider } from "../../helpers/Web3Helper";
import userIcon from "../../assets/user-icon.png";
import { TabooBalance } from "../../helpers/TabooHelper";
import { TabooPunk } from "../../helpers/TabooPunk";
import { TierHelper } from "../../helpers/TierHelper";
import {
  grantWebsiteAccessAction,
  loginSaga,
  logout,
} from "../../store/reducers/authReducer";
import { toast } from "react-toastify";

const Header = () => {
  const websiteAccessPassCodeRef = useRef(null);
  const secretPass = `Taboo@#$258`;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    isAuthenticated,
    walletAddress,
    hasWebsiteAccess: hasWebsiteAccessRedux,
  } = useSelector((state) => state.auth);

  // Modal Code
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[isLoginStart,setIsLoginStart]=useState(false);


  // website access authorisation Modal
  const [hasWebsiteAccess, setHasWebsiteAccess] = useState(
    hasWebsiteAccessRedux ? true : true
  );
  const grantWebsiteAccess = () => setHasWebsiteAccess(true);

  const accessWebsite=()=>setHasWebsiteAccess(false);

  const handleLogin = async () => {

     setIsLoginStart(true)
    let address = await Connect();

    let punk = await TabooPunk(address[0]);
    // console.log("punks",punk)
    //let tier=punk>0?"3 Tier":"1 Tier"
    let balance = await TabooBalance(address[0]);
    let tier = await TierHelper(punk, balance,address[0]);
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

      setIsLoginStart(false)
    }else{
        handleLogout();
        setIsLoginStart(false)
        toast.warn("Please connect to binance smart chain!")
    }
  };

  useEffect(() => {

      if(!hasWebsiteAccess){
            navigate('/')
          }
          
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

  const [showModal1, setShowModal1] = useState(false);

  const handleModalClose1 = () => {
    setShowModal1(false);
  };


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
              <Link to="/explore" className="nav-link">Explore</Link>

              <a href="https://opensea.io/collection/taboopunks" target={'_blank'} className="nav-link">
                TabooPunks
              </a>
              <Nav.Link onClick={handleShow}>Magazine</Nav.Link>
              <Nav.Link onClick={handleShow}>News</Nav.Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/models" className="nav-link">Models</Link>

             {/*<Link to="/buycoin" className="nav-link">Buy Taboo</Link> */}

            </Nav>
          </Navbar.Collapse>

          {!isAuthenticated ? (
            <Button
              className="common-btn"
              variant="outline-success"
              onClick={() => handleLogin()}
            >
              {isLoginStart?"Please Wait...":" Connect Wallet"}
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
                  <img
                    src={
                      "https://taboonft.s3.us-east-2.amazonaws.com/icons/Taboo-logo-3.61280c399d2252.47125802.png"
                    }
                    alt=""
                    height={30}
                    width={30}
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/transactions" className="dropdown-item">
                      Collections
                    </Link>
                  </Dropdown.Item>

                {/*  <Dropdown.Item>
                    <Link to="/create-nft" className="dropdown-item">
                      Create NFT
                    </Link>
                  </Dropdown.Item> */}

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


                 {/* <Dropdown.Item>
                    <Link to="/buycoin" className="dropdown-item">
                       buycoin
                    </Link>
                  </Dropdown.Item>
                   */}
                  <Dropdown.Item>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          )}

           <a href="/buycoin"
              className="common-btn"
              variant="outline-success"
              
            >
              Buy Taboo
            </a>
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

      {/* Website Authorisation Modal */}
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-comming-soon"
        show={!hasWebsiteAccess}
        onHide={accessWebsite}

        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="border-none"></Modal.Header>
        <Modal.Body>
          <div className="outer-div">
            <h5>Enter Pass Code To Access Website</h5>
            <input type="password" ref={websiteAccessPassCodeRef} />
            <Button
              className="common-btn"
              variant="outline-success"
              onClick={() => {
                if (secretPass === websiteAccessPassCodeRef.current.value) {
                  setHasWebsiteAccess(true);
                  localStorage.setItem("hasWebsiteAccess", true);
                  dispatch(grantWebsiteAccessAction());
                } else {
                  toast.error("InValid Password");
                }
              }}
            >
              Submit
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
          show={showModal1}
          onHide={handleModalClose1}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="video-new"
        >
          <Modal.Header closeButton={handleModalClose1}></Modal.Header>
          <Modal.Body>
            <div>
            <video loop autoPlay>
                <source
                  src="images/Taboo-video.mp4"
                  type="video/mp4"
                />
                </video>
            </div>
          </Modal.Body>
        </Modal>
    </header>
  );
};

export default Header;
