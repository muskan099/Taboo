import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
    max: 25000,
    values: [0, 15000],
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
  const [currentPage, setCurrentPage] = useState(1);

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
    endPrice: 20000,
  });

  const { startPrice, endPrice, A_TO_Z, price, letest, nftTier } = filterSearch;

  const [meta, setMeta] = useState("");

  const { isAuthenticated, walletAddress, tier } = useSelector(
    (state) => state.auth
  );

  const { nft } = useSelector((state) => state.nft);
  // console.log("nft", nft.length);
  const getData = (
    page,
    limit = 60,
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
    console.log("get nft saga function \n");
    console.log("nft tier inside getNftSaga \n", nftTier);

    let data = {
      tier: tier,
      page: page,
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
  };

  console.log("nft tier \n", nftTier);

  useEffect(() => {
    enableSlider(jQuery, setFilterSearch);
  }, []);

  // console.log({ range: `${startPrice} ${endPrice}` });
  useEffect(() => {
    // console.log("category", category);
    getData(
      currentPage,
      60,
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
  ]);

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
                      <a href="">
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
            <Col xxl={3} xl={3} lg={4} md={4} sm={4} xs={12} className="">
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
            <Col xxl={9} xl={9} lg={9} md={8} sm={8} xs={12}>
              <div>
                <Row>
                  <Col>
                    <div className="filer-right-box">
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                          Filter By
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            href="#"
                            onClick={(e) => setRecentlyAdded(true)}
                          >
                            Recently Added
                          </Dropdown.Item>
                          {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
									    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                        </Dropdown.Menu>
                      </Dropdown>
                      <ul>
                        {[
                          "All items",
                          "Sexy",
                          "Models",
                          "Metavers",
                          "Lifestyles",
                          "Premium",
                        ].map((item) => (
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
                  {nft?.length > 0
                    ? nft.map((item) => (
                        <Col lg={4} md={6} sm={6} xs={12} key={item._id}>
                          <div className="outer-explor-box">
                            <Link to={`/details/${item._id}`}>
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
                                    <img src={"images/Team/team4.png"} />
                                  </li>
                                  <li>
                                    <img src={"images/Team/team2.png"} />
                                  </li>
                                  <li>
                                    <img src={"images/Team/team3.png"} />
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

                  {/* <Col lg={4} md={6} sm={6} xs={12}>
	               	 	   <div className="outer-explor-box">
	               	 	   	  <img className="img-main"  src={"images/Team/team7.png"} />
	               	 	   	  <div className="exploror-list-box">
	               	 	   	  	 <div className="price-line">
	               	 	   	  	 	<h5>Hot Skin<span>53</span> </h5>
	               	 	   	  	    <h6>90000$ Taboo</h6>
	               	 	   	  	 </div>
	               	 	   	  	 <div className="stoke-line">
	               	 	   	  	 	 <ul>
	               	 	   	  	 	 	<li><img  src={"images/Team/team4.png"} /></li>
	               	 	   	  	 	 	<li><img  src={"images/Team/team2.png"} /></li>
	               	 	   	  	 	 	<li><img  src={"images/Team/team3.png"} /></li>
	               	 	   	  	 	 </ul>
	               	 	   	  	 	 <h6>3 in stock</h6>
	               	 	   	  	 </div>
	               	 	   	  	 <hr></hr>
	               	 	   	  	 <div className="bid-row">
	               	 	   	  	 	<span><img  src={"images/up-arrow.png"} /> Highest Bid</span>
	               	 	   	  	 	<span><b>702$ Taboo</b></span>
	               	 	   	  	 	<span> New Bid <img  src={"images/up-arrow.png"} /> </span>
	               	 	   	  	 </div>
	               	 	   	  </div>
	               	 	   </div>
		               	 </Col>
		               	 <Col lg={4} md={6} sm={6} xs={12}>
	               	 	   <div className="outer-explor-box">
	               	 	   	  <img className="img-main"  src={"images/Team/team7.png"} />
	               	 	   	  <div className="exploror-list-box">
	               	 	   	  	 <div className="price-line">
	               	 	   	  	 	<h5>Hot Skin<span>53</span> </h5>
	               	 	   	  	    <h6>90000$ Taboo</h6>
	               	 	   	  	 </div>
	               	 	   	  	 <div className="stoke-line">
	               	 	   	  	 	 <ul>
	               	 	   	  	 	 	<li><img  src={"images/Team/team4.png"} /></li>
	               	 	   	  	 	 	<li><img  src={"images/Team/team2.png"} /></li>
	               	 	   	  	 	 	<li><img  src={"images/Team/team3.png"} /></li>
	               	 	   	  	 	 </ul>
	               	 	   	  	 	 <h6>3 in stock</h6>
	               	 	   	  	 </div>
	               	 	   	  	 <hr></hr>
	               	 	   	  	 <div className="bid-row">
	               	 	   	  	 	<span><img  src={"images/up-arrow.png"} /> Highest Bid</span>
	               	 	   	  	 	<span><b>702$ Taboo</b></span>
	               	 	   	  	 	<span> New Bid <img  src={"images/up-arrow.png"} /> </span>
	               	 	   	  	 </div>
	               	 	   	  </div>
	               	 	   </div>
		               	 </Col>
		               	 <Col lg={4} md={6} sm={6} xs={12}>
	               	 	   <div className="outer-explor-box">
	               	 	   	  <img className="img-main"  src={"images/Team/team7.png"} />
	               	 	   	  <div className="exploror-list-box">
	               	 	   	  	 <div className="price-line">
	               	 	   	  	 	<h5>Hot Skin<span>53</span> </h5>
	               	 	   	  	    <h6>90000$ Taboo</h6>
	               	 	   	  	 </div>
	               	 	   	  	 <div className="stoke-line">
	               	 	   	  	 	 <ul>
	               	 	   	  	 	 	<li><img  src={"images/Team/team4.png"} /></li>
	               	 	   	  	 	 	<li><img  src={"images/Team/team2.png"} /></li>
	               	 	   	  	 	 	<li><img  src={"images/Team/team3.png"} /></li>
	               	 	   	  	 	 </ul>
	               	 	   	  	 	 <h6>3 in stock</h6>
	               	 	   	  	 </div>
	               	 	   	  	 <hr></hr>
	               	 	   	  	 <div className="bid-row">
	               	 	   	  	 	<span><img  src={"images/up-arrow.png"} /> Highest Bid</span>
	               	 	   	  	 	<span><b>702$ Taboo</b></span>
	               	 	   	  	 	<span> New Bid <img  src={"images/up-arrow.png"} /> </span>
	               	 	   	  	 </div>
	               	 	   	  </div>
	               	 	   </div>
		               	 </Col>
		               	 <Col lg={4} md={6} sm={6} xs={12}>
	               	 	   <div className="outer-explor-box">
	               	 	   	  <img className="img-main"  src={"images/Team/team7.png"} />
	               	 	   	  <div className="exploror-list-box">
	               	 	   	  	 <div className="price-line">
	               	 	   	  	 	<h5>Hot Skin<span>53</span> </h5>
	               	 	   	  	    <h6>90000$ Taboo</h6>
	               	 	   	  	 </div>
	               	 	   	  	 <div className="stoke-line">
	               	 	   	  	 	 <ul>
	               	 	   	  	 	 	<li><img  src={"images/Team/team4.png"} /></li>
	               	 	   	  	 	 	<li><img  src={"images/Team/team2.png"} /></li>
	               	 	   	  	 	 	<li><img  src={"images/Team/team3.png"} /></li>
	               	 	   	  	 	 </ul>
	               	 	   	  	 	 <h6>3 in stock</h6>
	               	 	   	  	 </div>
	               	 	   	  	 <hr></hr>
	               	 	   	  	 <div className="bid-row">
	               	 	   	  	 	<span><img  src={"images/up-arrow.png"} /> Highest Bid</span>
	               	 	   	  	 	<span><b>702$ Taboo</b></span>
	               	 	   	  	 	<span> New Bid <img  src={"images/up-arrow.png"} /> </span>
	               	 	   	  	 </div>
	               	 	   	  </div>
	               	 	   </div>
		               	 </Col>
		               	 <Col lg={4} md={6} sm={6} xs={12}>
	               	 	   <div className="outer-explor-box">
	               	 	   	  <img className="img-main"  src={"images/Team/team7.png"} />
	               	 	   	  <div className="exploror-list-box">
	               	 	   	  	 <div className="price-line">
	               	 	   	  	 	<h5>Hot Skin<span>53</span> </h5>
	               	 	   	  	    <h6>90000$ Taboo</h6>
	               	 	   	  	 </div>
	               	 	   	  	 <div className="stoke-line">
	               	 	   	  	 	 <ul>
	               	 	   	  	 	 	<li><img  src={"images/Team/team4.png"} /></li>
	               	 	   	  	 	 	<li><img  src={"images/Team/team2.png"} /></li>
	               	 	   	  	 	 	<li><img  src={"images/Team/team3.png"} /></li>
	               	 	   	  	 	 </ul>
	               	 	   	  	 	 <h6>3 in stock</h6>
	               	 	   	  	 </div>
	               	 	   	  	 <hr></hr>
	               	 	   	  	 <div className="bid-row">
	               	 	   	  	 	<span><img  src={"images/up-arrow.png"} /> Highest Bid</span>
	               	 	   	  	 	<span><b>702$ Taboo</b></span>
	               	 	   	  	 	<span> New Bid <img  src={"images/up-arrow.png"} /> </span>
	               	 	   	  	 </div>
	               	 	   	  </div>
	               	 	   </div>
		               	 </Col> */}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Explore;
