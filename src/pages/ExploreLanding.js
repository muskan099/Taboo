import { Row, Col, Container, Button, Dropdown, Table} from "react-bootstrap";
import React from "react";
import Slider from "react-slick";

const ExploreLanding=()=>{
    var bannerexplor = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
      responsive: [
        {
          breakpoint: 320,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
        }
      ]
  };
  var hottranding = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
      responsive: [
        {
          breakpoint: 320,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 2, slidesToScroll: 1, infinite: false }
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3, slidesToScroll: 1, infinite: false }
        }
      ]
  };
  var mostpopular = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
      responsive: [
        {
          breakpoint: 320,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 2, slidesToScroll: 1, infinite: false }
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 4, slidesToScroll: 1, infinite: false }
        }
      ]
  };

    return(<>

       <section className="explor-lmain-baner">
           <Container fluid className="p-0">
              <Row>
                <Col md={12} sm={12} xs={12}>
                   <div className="first-exp-banner">
                      <img className="first-banner-inner" src="images/3.png" />
                      
                       <ul class="follow-list">
                           <li>
                               <h5>Follow Us</h5>
                           </li>
                           <li>
                               <a href=""><img src="images/left-arrow.png" /></a>
                           </li>
                           <li>
                               <a href=""><img src="images/left-arrow.png" /></a>
                           </li>
                           <li>
                               <a href=""><img src="images/left-arrow.png" /></a>
                           </li>
                           <li>
                               <a href=""><img src="images/left-arrow.png" /></a>
                           </li>
                       </ul>
                       <h1>The Ultimate Adult NFT & Streaming Adventure</h1>
                   </div>
                </Col>
              </Row>
              <Row>
                <Col md={4} sm={4} xs={12}>
                   <div class="banner-2-row box-1">
                       <img className="first-banner-inner" src="images/3.png" />
                       <a href="" className="blue-btn">Buy $TABOO</a>
                   </div>
                </Col>
                <Col md={4} sm={4} xs={12}>
                   <div class="banner-2-row box-2">
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                   </div>
                </Col>
                <Col md={4} sm={4} xs={12}>
                   <div class="banner-2-row box-3">
                       <img className="first-banner-inner" src="images/3.png" />
                       <a href="" className="blue-btn">Marketplace</a>
                   </div>
                </Col>
            </Row>
           </Container>
      </section>
        <section className="explor-landing2-sec pt-0">
             <Container fluid className="p-0">
               <Row>
                <Col md={12} sm={12} xs={12}>
                     <div className="explor-page-heading">
                         <div className="head-inner">
                             <h2>Meet The Models</h2>
                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                         </div>
                     </div>
                </Col>
                
               </Row>
                <Row>
                    <Col md={12} sm={12} xs={12}>
                      <div>
                            <Slider className="slider-favorite" {...bannerexplor}>
                              <div class="item">
                                  <div class="explor-2-img">
                                    <img className="img-fluid m-0"  src={"images/3.png"} />
                                  </div>
                              </div>
                              <div class="item">
                                  <div class="explor-2-img">
                                    <img className="img-fluid m-0"  src={"images/3.png"} />
                                  </div>
                              </div>
                              <div class="item">
                                  <div class="explor-2-img">
                                    <img className="img-fluid m-0"  src={"images/3.png"} />
                                  </div>
                              </div>

                              
                            </Slider>
                      </div>
                    </Col>
               </Row>
             
            </Container>
         </section>

         <section className="premium-sec">
             <Container>
                  <Row>
                    <Col md={12} sm={12} xs={12}>
                    <div className="favorite-model-heading access-premiup">
                            <span>Access To Preimium Content</span>
                        </div>
                      <div>
                        <Row className="align-items-center">
                             <Col md={3} sm={12} xs={12}>
                                <div>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                </div>
                             </Col>
                             <Col md={6} sm={12} xs={12}>
                              <div class="outer-premium-box">
                                  <img className="img-fluid m-0"  src={"images/3.png"} />
                                  <a href="" className="blue-btn">Buy Access Key</a>
                              </div>
                             </Col>
                             <Col md={3} sm={12} xs={12}>
                                <div>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                </div>
                             </Col>
                        </Row>
                          
                      </div>
                    </Col>
               </Row>
               <Row className="whats-new-box">
                    <Col md={12} sm={12} xs={12}>
                       <div className="favorite-model-heading">
                            <span>What's New</span>
                        </div>
                        <Row className="">
                            <Col md={5} sm={13} xs={12}>
                              <div className="whats-new-main1">
                                  <img className="img-fluid m-0 main-ing"  src={"images/tEAM/team7.png"} />
                                  <div class="content-box1">
                                      <div className="side-box">
                                          <img className="img-fluid"  src={"images/tEAM/team7.png"} />
                                          <div>
                                              <h4>Lorem Ipsum is simply </h4>
                                              <h6>18 In Stock</h6>
                                          </div>
                                      </div>
                                      <div class="Highest-box">
                                          <p>Highest Bid</p>
                                          <h5>1125 $TABOO</h5>
                                      </div>
                                  </div>
                              </div>
                           </Col>
                           <Col md={4} sm={12} xs={12}>
                              
                              <div className="new-2-whats-box">
                                  <img className="img-fluid main-ing"  src={"images/tEAM/team7.png"} />
                                  <div>
                                      <h5>Lorem Ipsum is simply</h5>
                                      <div className="side-box-img">
                                          <ul>
                                            <li><img  src={"images/Team/team4.png"} /></li>
                                            <li><img  src={"images/Team/team2.png"} /></li>
                                            <li><img  src={"images/Team/team3.png"} /></li>
                                         </ul>
                                         <span><b>702$ Taboo</b></span>
                                         <p> 1 of 20</p>
                                      </div>
                                      <div>
                                          <a href="" className="border-btn">Place a Bid</a>
                                      </div>
                                  </div>
                              </div>

                              <div className="new-2-whats-box">
                                  <img className="img-fluid main-ing"  src={"images/tEAM/team7.png"} />
                                  <div>
                                      <h5>Lorem Ipsum is simply</h5>
                                      <div className="side-box-img">
                                          <ul>
                                            <li><img  src={"images/Team/team4.png"} /></li>
                                            <li><img  src={"images/Team/team2.png"} /></li>
                                            <li><img  src={"images/Team/team3.png"} /></li>
                                         </ul>
                                         <span><b>702$ Taboo</b></span>
                                         <p> 1 of 20</p>
                                      </div>
                                      <div>
                                          <a href="" className="border-btn">Place a Bid</a>
                                      </div>
                                  </div>
                              </div>


                              <div className="new-2-whats-box">
                                  <img className="img-fluid main-ing"  src={"images/tEAM/team7.png"} />
                                  <div>
                                      <h5>Lorem Ipsum is simply</h5>
                                      <div className="side-box-img">
                                          <ul>
                                            <li><img  src={"images/Team/team4.png"} /></li>
                                            <li><img  src={"images/Team/team2.png"} /></li>
                                            <li><img  src={"images/Team/team3.png"} /></li>
                                         </ul>
                                         <span><b>702$ Taboo</b></span>
                                         <p> 1 of 20</p>
                                      </div>
                                      <div>
                                          <a href="" className="border-btn">Place a Bid</a>
                                      </div>
                                  </div>
                              </div>

                                <div className="new-2-whats-box">
                                  <img className="img-fluid main-ing"  src={"images/tEAM/team7.png"} />
                                  <div>
                                      <h5>Lorem Ipsum is simply</h5>
                                      <div className="side-box-img">
                                          <ul>
                                            <li><img  src={"images/Team/team4.png"} /></li>
                                            <li><img  src={"images/Team/team2.png"} /></li>
                                            <li><img  src={"images/Team/team3.png"} /></li>
                                         </ul>
                                         <span><b>702$ Taboo</b></span>
                                         <p> 1 of 20</p>
                                      </div>
                                      <div>
                                          <a href="" className="border-btn">Place a Bid</a>
                                      </div>
                                  </div>
                              </div>



                           </Col>
                           <Col className="border-left latest-update-new" md={3} sm={12} xs={12}>
                             <div className="latest-updat-side">
                                 <h6>Latest Uploaded From Creator <img  src={"images/left-arrow.png"} /></h6>

                                 <div class="owner-row-outer">
                                    <div class="outer-latet-creator">
                                        <span>6</span>
                                         <img src="images/Team/team7.png" />
                                    </div>
                                    <div>
                                        <h5>Requel Will</h5>
                                        <p>Owner</p>
                                    </div>
                                </div>

                                <div class="owner-row-outer">
                                    <div class="outer-latet-creator">
                                        <span>6</span>
                                         <img src="images/Team/team7.png" />
                                    </div>
                                    <div>
                                        <h5>Requel Will</h5>
                                        <p>Owner</p>
                                    </div>
                                </div>

                                <div class="owner-row-outer">
                                    <div class="outer-latet-creator">
                                        <span>6</span>
                                         <img src="images/Team/team7.png" />
                                    </div>
                                    <div>
                                        <h5>Requel Will</h5>
                                        <p>Owner</p>
                                    </div>
                                </div>

                                <div class="owner-row-outer last-border-none">
                                    <div class="outer-latet-creator">
                                        <span>6</span>
                                         <img src="images/Team/team7.png" />
                                    </div>
                                    <div>
                                        <h5>Requel Will</h5>
                                        <p>Owner</p>
                                    </div>
                                </div>
                                <div class="owner-row-outer last-border-none">
                                    <div class="outer-latet-creator">
                                        <span>6</span>
                                         <img src="images/Team/team7.png" />
                                    </div>
                                    <div>
                                        <h5>Requel Will</h5>
                                        <p>Owner</p>
                                    </div>
                                </div>

                                <div>
                                    <a href="" className="border-btn">Discover More  <img src="images/left1-arrow.png" /> </a>
                                </div>


                             </div>

                           </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="whats-new-box hot-trending-row">
                    <Col md={12} sm={12} xs={12}>
                       <div className="favorite-model-heading">
                            <span>Hot Trending In <b>Models</b></span>
                        </div>
                        <Row className="">
                            <Col md={12} sm={12} xs={12}>
                                <Slider className="outer-profile-collection hot-trending-slider" {...hottranding}>
                                      <div class="item">
                                           <div class="outer-explor-box">
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
                                                 <div class="bid-row">
                                                    <span><img  src={"images/up-arrow.png"} /> Highest Bid</span>
                                                    <span><b>702$ Taboo</b></span>
                                                    <span> New Bid <img  src={"images/up-arrow.png"} /> </span>
                                                 </div>
                                              </div>
                                           </div>
                                      </div>
                                       <div class="item">
                                           <div class="outer-explor-box">
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
                                                 <div class="bid-row">
                                                    <span><img  src={"images/up-arrow.png"} /> Highest Bid</span>
                                                    <span><b>702$ Taboo</b></span>
                                                    <span> New Bid <img  src={"images/up-arrow.png"} /> </span>
                                                 </div>
                                              </div>
                                           </div>
                                      </div>
                                       <div class="item">
                                           <div class="outer-explor-box">
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
                                                 <div class="bid-row">
                                                    <span><img  src={"images/up-arrow.png"} /> Highest Bid</span>
                                                    <span><b>702$ Taboo</b></span>
                                                    <span> New Bid <img  src={"images/up-arrow.png"} /> </span>
                                                 </div>
                                              </div>
                                           </div>
                                      </div>
                                       <div class="item">
                                           <div class="outer-explor-box">
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
                                                 <div class="bid-row">
                                                    <span><img  src={"images/up-arrow.png"} /> Highest Bid</span>
                                                    <span><b>702$ Taboo</b></span>
                                                    <span> New Bid <img  src={"images/up-arrow.png"} /> </span>
                                                 </div>
                                              </div>
                                           </div>
                                      </div>
                                       <div class="item">
                                           <div class="outer-explor-box">
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
                                                 <div class="bid-row">
                                                    <span><img  src={"images/up-arrow.png"} /> Highest Bid</span>
                                                    <span><b>702$ Taboo</b></span>
                                                    <span> New Bid <img  src={"images/up-arrow.png"} /> </span>
                                                 </div>
                                              </div>
                                           </div>
                                      </div>
                                      
                                 </Slider>
                            </Col>
                        </Row>
                    </Col>
                 </Row>

                 <Row className="whats-new-box hot-trending-row">
                    <Col md={12} sm={12} xs={12}>
                       <div className="favorite-model-heading">
                            <span>Most Popular <b>Last 7 days</b></span>
                        </div>
                        <Row className="">
                            <Col md={12} sm={12} xs={12}>
                                <Slider className="most-pop-slider" {...mostpopular}>
                                      <div class="item">
                                          <div class="most-populr-box">
                                              <div class="upper-row-box">
                                                  <div className="hash-value">
                                                      <img src="images/Team/team7.png" />
                                                      #1 
                                                  </div>
                                                  <div className="arrow-box">
                                                      <a href=""><img src="images/up-arrow.png" /></a>
                                                      <a href=""><img src="images/up-arrow.png" /></a>
                                                  </div>
                                              </div>
                                              <hr />

                                              <div class="circular-popular-img">
                                                   <img class="main-img" src="images/Team/team7.png" />
                                                   <img class="checkimg" src="images/Team/team7.png" />
                                              </div>
                                              <h5>Cj Sparxx</h5>
                                              <p>3230 $TABOO</p>
                                              <p><span>+45%</span></p>
                                          </div>
                                      </div>
                                      <div class="item">
                                          <div class="most-populr-box">
                                              <div class="upper-row-box">
                                                  <div className="hash-value">
                                                      <img src="images/Team/team7.png" />
                                                      #1 
                                                  </div>
                                                  <div className="arrow-box">
                                                      <a href=""><img src="images/up-arrow.png" /></a>
                                                      <a href=""><img src="images/up-arrow.png" /></a>
                                                  </div>
                                              </div>
                                              <hr />

                                              <div class="circular-popular-img">
                                                   <img class="main-img" src="images/Team/team7.png" />
                                                   <img class="checkimg" src="images/Team/team7.png" />
                                              </div>
                                              <h5>Cj Sparxx</h5>
                                              <p>3230 $TABOO</p>
                                              <p><span>+45%</span></p>
                                          </div>
                                      </div>
                                      <div class="item">
                                          <div class="most-populr-box">
                                              <div class="upper-row-box">
                                                  <div className="hash-value">
                                                      <img src="images/Team/team7.png" />
                                                      #1 
                                                  </div>
                                                  <div className="arrow-box">
                                                      <a href=""><img src="images/up-arrow.png" /></a>
                                                      <a href=""><img src="images/up-arrow.png" /></a>
                                                  </div>
                                              </div>
                                              <hr />

                                              <div class="circular-popular-img">
                                                   <img class="main-img" src="images/Team/team7.png" />
                                                   <img class="checkimg" src="images/Team/team7.png" />
                                              </div>
                                              <h5>Cj Sparxx</h5>
                                              <p>3230 $TABOO</p>
                                              <p><span>+45%</span></p>
                                          </div>
                                      </div>
                                      <div class="item">
                                          <div class="most-populr-box">
                                              <div class="upper-row-box">
                                                  <div className="hash-value">
                                                      <img src="images/Team/team7.png" />
                                                      #1 
                                                  </div>
                                                  <div className="arrow-box">
                                                      <a href=""><img src="images/up-arrow.png" /></a>
                                                      <a href=""><img src="images/up-arrow.png" /></a>
                                                  </div>
                                              </div>
                                              <hr />

                                              <div class="circular-popular-img">
                                                   <img class="main-img" src="images/Team/team7.png" />
                                                   <img class="checkimg" src="images/Team/team7.png" />
                                              </div>
                                              <h5>Cj Sparxx</h5>
                                              <p>3230 $TABOO</p>
                                              <p><span>+45%</span></p>
                                          </div>
                                      </div>
                                      <div class="item">
                                          <div class="most-populr-box">
                                              <div class="upper-row-box">
                                                  <div className="hash-value">
                                                      <img src="images/Team/team7.png" />
                                                      #1 
                                                  </div>
                                                  <div className="arrow-box">
                                                      <a href=""><img src="images/up-arrow.png" /></a>
                                                      <a href=""><img src="images/up-arrow.png" /></a>
                                                  </div>
                                              </div>
                                              <hr />

                                              <div class="circular-popular-img">
                                                   <img class="main-img" src="images/Team/team7.png" />
                                                   <img class="checkimg" src="images/Team/team7.png" />
                                              </div>
                                              <h5>Cj Sparxx</h5>
                                              <p>3230 $TABOO</p>
                                              <p><span>+45%</span></p>
                                          </div>
                                      </div>
                                      <div class="item">
                                          <div class="most-populr-box">
                                              <div class="upper-row-box">
                                                  <div className="hash-value">
                                                      <img src="images/Team/team7.png" />
                                                      #1 
                                                  </div>
                                                  <div className="arrow-box">
                                                      <a href=""><img src="images/up-arrow.png" /></a>
                                                      <a href=""><img src="images/up-arrow.png" /></a>
                                                  </div>
                                              </div>
                                              <hr />

                                              <div class="circular-popular-img">
                                                   <img class="main-img" src="images/Team/team7.png" />
                                                   <img class="checkimg" src="images/Team/team7.png" />
                                              </div>
                                              <h5>Cj Sparxx</h5>
                                              <p>3230 $TABOO</p>
                                              <p><span>+45%</span></p>
                                          </div>
                                      </div>
                                  </Slider>
                              </Col>
                          </Row>
                      </Col>
                  </Row>

                   <Row className="whats-new-box hot-trending-row ranking-row">
                    <Col md={12} sm={12} xs={12}>
                       <div className="favorite-model-heading">
                            <span>
                                <a href="" className="blue-btn">Rankings</a>
                            </span>
                        </div>
                    </Col>
                </Row>

             </Container>
         </section>
    </>)
}

export default ExploreLanding;