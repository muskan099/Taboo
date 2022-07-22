import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { Modal } from "react-bootstrap";

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
  Spinner,
  Pagination,
} from "react-bootstrap";
import { getNftSaga } from "../store/reducers/nftReducer";

const jQuery = window.jQuery;
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function enableSlider($, changeStateFn) {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 3000000,
    values: [0, 3000000],
    slide: function (event, ui) {
      changeStateFn((p) => ({
        ...p,
        startPrice: Number(ui.values[0]),
        endPrice: Number(ui.values[1]),
      }));
      //   console.log({ range: `${ui.values[0]} - ${ui.values[1]}` });
      $("#amount").val("Taboo " + ui.values[0] + " - Taboo " + ui.values[1]);
    },
  });
  $("#amount").val(
    "Taboo " +
      $("#slider-range").slider("values", 0) +
      " - Taboo " +
      $("#slider-range").slider("values", 1)
  );
}

const Explore = () => {
  const inputRangeRef = useRef(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  //console.log(this);

  const [tierCheck, setTierCheck] = useState(false);

  const [tierAmount, setTierAmount] = useState("");

  const [paginationData, setPaginationData] = useState({
    skip: 0,
    limit: 25,
    pages: [],
  });

  const [category, setCategory] = useState("All items");
  const [RecentlyAdded, setRecentlyAdded] = useState(false);
  const [filterSearch, setFilterSearch] = useState({
    A_TO_Z: false,
    price: "",
    letest: false,
    startPrice: 0,
    nftTier: {
      tier1: false,
      tier2: false,
      tier3: false,
    },
    endPrice: 100000000,
  });

  const { startPrice, endPrice, A_TO_Z, price, letest, nftTier } = filterSearch;

  const [meta, setMeta] = useState("");

  const { isAuthenticated, walletAddress, tier } = useSelector(
    (state) => state.auth
  );

  const { nft, isLoading, totalNfts } = useSelector((state) => state.nft);

  const handleTierCheck = () => setTierCheck(false);

  // console.log("nft", nft.length);
  const getData = (
    page,
    limit = 25,
    skip = 0,
    tier,
    search_tag,
    category,
    RecentlyAdded,
    startPrice,
    endPrice,
    A_TO_Z,
    price,
    letest
  ) => {
    // console.log("get nft saga function \n");
    // console.log("nft tier inside getNftSaga \n", nftTier);

    let data = {
      tier: tier,
      page: page,
      skip,
      limit: limit,
      search_tag: search_tag,
      category: category === "All items" ? "" : category,
      recentlyAdded: RecentlyAdded,
      startPrice,
      endPrice,
      A_TO_Z,
      price,
      letest,
      nftTier,
    };

    dispatch(getNftSaga(data));
    console.log({ data });
  };

  // console.log("nft tier \n", nftTier);

  useEffect(() => {
    if (category == "Models") {
      navigate("/models");
    }
  }, [category]);

  useEffect(() => {
    enableSlider(jQuery, setFilterSearch);
  }, []);

  // console.log({ range: `${startPrice} ${endPrice}` });
  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log("category", category);
    getData(
      currentPage,
      paginationData.limit,
      paginationData.skip,
      tier,
      meta,
      category,
      RecentlyAdded,
      startPrice,
      endPrice,
      A_TO_Z,
      price,
      letest
    );
  }, [
    category,
    meta,
    RecentlyAdded,
    startPrice,
    endPrice,
    A_TO_Z,
    price,
    letest,
    nftTier,
    currentPage,
    paginationData.limit,
  ]);

  useEffect(() => {
    setPaginationData((p) => ({
      ...p,
      pages: Array.from(
        { length: Math.ceil(totalNfts / p.limit) },
        (_, i) => i + 1
      ),
    }));
  }, [nft, paginationData.limit]);

  console.log("Pagination Pages \n", paginationData.pages);

  const handleSearch = async (e) => {
    let value = e.target.value;

    if (value) {
      setMeta(value);
    }
  };

  const handleRecent = (e) => {
    let value = e.target.value;

    if (value) {
      setRecentlyAdded(true);
    }
  };

  const handleAll = () => {
    setRecentlyAdded(false);

    setCategory("");

    setMeta("");
  };

  const handleLikeFilter = (e) => {
    let value = e.target.value;
    if (value === "A_TO_Z") {
      setFilterSearch((prev) => ({
        ...prev,
        A_TO_Z: true,
        letest: false,
        price: "",
      }));
    } else if (value === "letest") {
      setFilterSearch((prev) => ({
        ...prev,
        A_TO_Z: false,
        letest: true,
        price: "",
      }));
    } else {
      setFilterSearch((prev) => ({
        ...prev,
        A_TO_Z: false,
        letest: false,
        price: value,
      }));
    }
  };

  const handleNFTRedirect = (data) => {
    console.log("data", data);

    if (data.lock) {
      if (data.available_to.includes("3 Tier")) {
        setTierAmount(5000);
        setTierCheck(true);
      } else if (data.available_to.includes("2 Tier")) {
        setTierAmount(1000);

        setTierCheck(true);
      } else {
        setTimeout(() => {
          navigate("/details/" + data._id);
        }, 500);
      }
    } else {
      //alert("dgr")

      setTimeout(() => {
        navigate("/details/" + data._id);
      }, 500);
    }
  };

  return (
    <>
      <section className="team-sec-new">
        <Container>
          <Row className="align-items-top">
            <Col className="">
              <div className="outer-heading-line">
                <Row className="justify-content-between">
                  <Col md={6} sm={6} xs={12}>
                    <h3 className="main-heading-inner mb-0">
                      <a href="/">
                        <img src={"images/right-arrow.png"} />
                      </a>{" "}
                      Explore
                    </h3>
                  </Col>
                  <Col md={4} sm={6} xs={12}>
                    <div className="newsletter-box m-0">
                      <InputGroup className="m-0">
                        <FormControl
                          placeholder="Search....."
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                          onKeyUp={(e) => handleSearch(e)}
                        />
                        <Button>
                          <img
                            className="search-icon"
                            src={"images/icons-Search-Line.png"}
                            alt="logo"
                          />
                        </Button>
                      </InputGroup>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row className="align-items-top">
            <Col xxl={3} xl={3} lg={3} md={4} sm={6} xs={12} className="">
              <div className="list-outer-box">
                <label className="heading-label">Price</label>
                <div className="price-range-box">
                  <div id="slider-range"></div>
                  <p>
                    <input
                      type="text"
                      id="amount"
                      onChange={(e) => console.log(e.target.value)}
                      ref={inputRangeRef}
                    ></input>
                  </p>
                </div>

                <hr></hr>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <label className="heading-label">Sort By</label>
                    <Accordion.Header>All</Accordion.Header>
                    <Accordion.Body>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            name="o1"
                            value={"high_to_low"}
                            onChange={handleLikeFilter}
                          ></input>
                          <span className="cr">
                            <i className="cr-icon fa fa-circle"></i>
                          </span>
                          Price: High to Low
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            name="o1"
                            value={"low_to_high"}
                            onChange={handleLikeFilter}
                          ></input>
                          <span className="cr">
                            <i className="cr-icon fa fa-circle"></i>
                          </span>
                          Price: Low to High
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            name="o1"
                            value={"A_TO_Z"}
                            onChange={handleLikeFilter}
                          ></input>
                          <span className="cr">
                            <i className="cr-icon fa fa-circle"></i>
                          </span>
                          A To Z
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            name="o1"
                            value={"letest"}
                            onChange={handleLikeFilter}
                          ></input>
                          <span className="cr">
                            <i className="cr-icon fa fa-circle"></i>
                          </span>
                          Latest
                        </label>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <label className="heading-label">Sort By Tier</label>
                    <Accordion.Header>All</Accordion.Header>

                    <Accordion.Body>
                      <div className="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            value="1 Tier"
                            checked={filterSearch.nftTier.tier1}
                            onChange={() =>
                              setFilterSearch((prev) => ({
                                ...prev,
                                nftTier: {
                                  ...prev.nftTier,
                                  tier1: !prev.nftTier.tier1,
                                },
                              }))
                            }
                          ></input>
                          <span className="cr">
                            <i className="cr-icon fa fa-check"></i>
                          </span>
                          1 Tier
                        </label>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            value="2 Tier"
                            checked={filterSearch.nftTier.tier2}
                            onChange={() =>
                              setFilterSearch((prev) => ({
                                ...prev,
                                nftTier: {
                                  ...prev.nftTier,
                                  tier2: !prev.nftTier.tier2,
                                },
                              }))
                            }
                          ></input>
                          <span className="cr">
                            <i className="cr-icon fa fa-check"></i>
                          </span>
                          2 Tier
                        </label>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            value="3 Tier"
                            checked={filterSearch.nftTier.tier3}
                            onChange={() =>
                              setFilterSearch((prev) => ({
                                ...prev,
                                nftTier: {
                                  ...prev.nftTier,
                                  tier3: !prev.nftTier.tier3,
                                },
                              }))
                            }
                          ></input>
                          <span className="cr">
                            <i className="cr-icon fa fa-check"></i>
                          </span>
                          3 Tier
                        </label>
                      </div>
                      {/* <div className="checkbox">
                        <label>
                          <input type="checkbox" value=""></input>
                          <span className="cr">
                            <i className="cr-icon fa fa-check"></i>
                          </span>
                          Option one is this
                        </label>
                      </div> */}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <label className="heading-label">Creator</label>
                    <Accordion.Header>Verified Only</Accordion.Header>
                    <Accordion.Body>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" value=""></input>
                          <span className="cr">
                            <i className="cr-icon fa fa-check"></i>
                          </span>
                          Verified Only
                        </label>
                      </div>
                      {/* <div className="checkbox">
                        <label>
                          <input type="checkbox" value=""></input>
                          <span className="cr">
                            <i className="cr-icon fa fa-check"></i>
                          </span>
                          Option one is this
                        </label>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" value=""></input>
                          <span className="cr">
                            <i className="cr-icon fa fa-check"></i>
                          </span>
                          Option one is this
                        </label>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" value=""></input>
                          <span className="cr">
                            <i className="cr-icon fa fa-check"></i>
                          </span>
                          Option one is this
                        </label>
                      </div> */}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div className="reset-link-outer">
                  <a href="" className="reset-link">
                    <img src={"images/cross.png"} alt="close" />
                    Reset Filter
                  </a>
                </div>
              </div>
            </Col>
            <Col xxl={9} xl={9} lg={9} md={8} sm={6} xs={12}>
              <div>
                <Row className=" pagination-row-explore">
                  <Col
                    className="set-limit"
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    style={{ display: "flex", alignItems: "self-start" }}
                  >
                    <Form.Label style={{ minWidth: "100px" }}>
                      Set Limit
                    </Form.Label>
                    <Form.Select
                      onChange={(e) => {
                        setPaginationData((p) => ({
                          ...p,
                          limit: e.target.value,
                        }));
                        setCurrentPage(1);
                      }}
                    >
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </Form.Select>
                  </Col>

                  <Col className="" lg={6} md={6} sm={6} xs={12}>
                    {!isLoading &&
                      nft?.length > 0 &&
                      paginationData.pages?.length > 0 && (
                        <Pagination style={{ justifyContent: "flex-end" }}>
                          {paginationData.pages.map((page, index) => (
                            <Pagination.Item
                              key={page}
                              active={currentPage === page}
                              onClick={() => setCurrentPage(page)}
                            >
                              {page}
                            </Pagination.Item>
                          ))}
                        </Pagination>
                      )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="filer-right-box">
                      <Dropdown className="d-none">
                        <Dropdown.Toggle id="dropdown-basic d-none">
                          Filter By
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setRecentlyAdded(true);
                            }}
                          >
                            Recently Added
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setFilterSearch((p) => ({
                                ...p,
                                A_TO_Z: true,
                                letest: false,
                                price: "",
                              }));
                            }}
                          >
                            Sort A to Z
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setFilterSearch((p) => ({
                                ...p,
                                A_TO_Z: false,
                                letest: false,
                                price: "low_to_high",
                              }));
                            }}
                          >
                            Low To High
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setFilterSearch((p) => ({
                                ...p,
                                price: "high_to_low",
                                A_TO_Z: false,
                                letest: false,
                              }));
                            }}
                          >
                            High To Low
                          </Dropdown.Item>
                          {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
									    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                        </Dropdown.Menu>
                      </Dropdown>
                      <ul>
                        {["All items", "Models"].map((item) => (
                          <li
                            className={category === item ? "active" : ""}
                            key={item}
                          >
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                setCategory(item);
                              }}
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                        {/* <li className="active">
                          <a href="#" onClick={() => handleAll()}>
                            All items
                          </a>
                        </li>
                        <li>
                          <a href="#" onClick={() => setCategory("Sexy")}>
                            Sexy
                          </a>
                        </li>
                        <li>
                          <a href="#" onClick={() => setCategory("Models")}>
                            Models
                          </a>
                        </li>
                        <li>
                          <a href="#" onClick={() => setCategory("Metaverse")}>
                            Metavers
                          </a>
                        </li>
                        <li>
                          <a href="#" onClick={() => setCategory("Lifestyles")}>
                            Lifestyle
                          </a>
                        </li>
                        <li>
                          <a href="#" onClick={() => setCategory("Premium")}>
                            Premium
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </Col>
                </Row>

                <Row>
                  {isLoading && (
                    <div className="text-center">
                      <Spinner animation="border" role="status" />
                    </div>
                  )}
                  {!isLoading && nft?.length === 0 && (
                    <div className="text-center">No Record Found</div>
                  )}
                  {!isLoading && nft?.length > 0
                    ? nft.map((item) => (
                        <Col lg={4} md={12} sm={12} xs={12} key={item._id}>
                          <div className="outer-explor-box">
                            <Link
                              to="#"
                              onClick={() => handleNFTRedirect(item)}
                            >
                              <img className="img-main" src={item.image} />
                            </Link>

                            <div className="exploror-list-box">
                              <div className="price-line">
                                <h5>
                                  {item.name}
                                  <span>{item.quantity}</span>{" "}
                                </h5>
                                <h6>{item.price} Taboo</h6>
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
                                <h6>
                                  {item.status == "sold"
                                    ? "Sold out"
                                    : "in stock"}{" "}
                                </h6>
                              </div>
                              <hr></hr>
                              <div className="bid-row">
                                <span>
                                  <img src={"images/up-arrow.png"} /> Highest
                                  Bid
                                </span>
                                <span>
                                  <b>0 $ Taboo</b>
                                </span>
                                <span>
                                  {" "}
                                  New Bid <img
                                    src={"images/up-arrow.png"}
                                  />{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Col>
                      ))
                    : ""}
                </Row>
                <Row className=" pagination-row-explore row mt-4 pb-4">
                  <Col className="m-auto" lg={6} md={6} sm={6} xs={12}>
                    {!isLoading &&
                      nft?.length > 0 &&
                      paginationData.pages?.length > 0 && (
                        <Pagination style={{ justifyContent: "center" }}>
                          {paginationData.pages.map((page, index) => (
                            <Pagination.Item
                              key={page}
                              active={currentPage === page}
                              onClick={() => setCurrentPage(page)}
                            >
                              {page}
                            </Pagination.Item>
                          ))}
                        </Pagination>
                      )}
                  </Col>
                </Row>

                <div className="pagination-new-exploror d-none">
                  <Pagination>
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item active>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{25}</Pagination.Item>
                    <Pagination.Next />
                  </Pagination>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="modal-comming-soon below-18-popup"
          backdrop="static"
          keyboard={false}
          show={tierCheck}
          onHide={handleTierCheck}
        >
          <Modal.Header className="border-none p-0"></Modal.Header>
          <Modal.Body className="outer-age-box">
            <div className="outer-div">
              To unlock this content you must connect your wallet and hold a
              minimum ${tierAmount && tierAmount} of Taboo or a Taboopunk
            </div>
            <a
              href="https://pancakeswap.finance/swap"
              target={"_blank"}
              className="common-btn buy-taboo-btn"
            >
              Buy Taboo
            </a>
            <button className="common-btn" onClick={handleTierCheck}>
              Cancel
            </button>
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
};

export default Explore;
