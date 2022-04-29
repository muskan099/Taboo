import { Row, Col, Container, Accordion, Dropdown,Form,FormControl,Button, InputGroup, } from "react-bootstrap";
import React from "react";
import Slider from "react-slick";


const Profile=()=>{
    var settings = {
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
          settings: { slidesToShow: 3, slidesToScroll: 1, infinite: false }
        }
      ]
  };

    return(<>

    
    <section className="profile-upper-banner">
          <Container fluid className="p-0">
              <Row>
                <Col>
                  <div className="profile-banner">
                         <img className="img-fluid m-0"  src={"images/Team/team6.png"} />
                     </div>
                </Col>
             </Row>
          </Container>
            <Container>
              
              <Row className="align-items-top">
                <Col
                
                  xl={4}
                  lg={4}
                  md={4}
                  sm={12}
                  xs={12}
                  className=""
                >
                 <div class="profile-img-left-box">
                     <img className="profile-main-img"  src={"images/Team/team7.png"} />
                     <h4>Cj Sparxx</h4>
                     <p>8b7b7078...978977b8b <a href=""><i className="fa fa-copy"></i></a></p>
                     <div className="biography-box">
                         <h6>Biography</h6>
                         <p>
                             <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</small>
                         </p>
                     </div>
                     <h5><a href=""><img  src={"images/Team/team7.png"} /> Https://www.Cjsparxx.com</a></h5>
                     <div class="follow-row">
                         <a href="" className="blue-btn">Follow</a>
                         <a href=""><img  src={"images/Team/team7.png"} /></a>
                         <a href=""><img  src={"images/Team/team7.png"} /></a>
                     </div>
                     <div class="social-media-icon">
                        <a href=""><img  src={"images/Team/team7.png"} /></a>
                         <a href=""><img  src={"images/Team/team7.png"} /></a> 
                         <a href=""><img  src={"images/Team/team7.png"} /></a> 
                     </div>

                     <hr/>

                     <p><small>Member Since Mar 15,2021</small></p>

                 </div>
                 
                </Col>
                <Col  xl={8} lg={8} md={8} sm={12} xs={12}>
                   <div className="outer-profile-collection">
                     <Row>
                        <Col>
                            <div className="filer-right-box justify-content-start">
                               
                                <ul>
                                    <li className="active"><a href="">NFTs</a></li>
                                    <li><a href="">Premium NFTs</a></li>
                                    <li><a href="">Taboo Punk</a></li>
                                    <li><a href="">New</a></li>
                                </ul>
                            </div>
                        </Col>      
                     </Row>
                     <Row>
                         <Col lg={4} md={6} sm={6} xs={12}>
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
                         </Col>
                         <Col lg={4} md={6} sm={6} xs={12}>
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
                         </Col>
                         <Col lg={4} md={6} sm={6} xs={12}>
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
                         </Col>
                        
                      </Row>
                   </div>
                </Col>
              </Row>
              <Row>
                 <Col>
                    <div class="favorite-model-heading">
                        <span>Choose your Favorite Modal</span>
                    </div>
                    <Slider className="slider-favorite" {...settings}>
                      <div class="item">
                          <div class="favorite-model-img-box">
                            <img className="img-fluid m-0"  src={"images/Team/team6.png"} />
                            <h4>CJ Sparxx</h4>
                          </div>
                      </div>
                      <div class="item">
                          <div class="favorite-model-img-box">
                            <img className="img-fluid m-0"  src={"images/Team/team6.png"} />
                            <h4>CJ Sparxx</h4>
                          </div>
                      </div>
                      <div class="item">
                          <div class="favorite-model-img-box">
                            <img className="img-fluid m-0"  src={"images/Team/team6.png"} />
                            <h4>CJ Sparxx</h4>
                          </div>
                      </div>
                      <div class="item">
                          <div class="favorite-model-img-box">
                            <img className="img-fluid m-0"  src={"images/Team/team6.png"} />
                            <h4>CJ Sparxx</h4>
                          </div>
                      </div>
                      <div class="item">
                          <div class="favorite-model-img-box">
                            <img className="img-fluid m-0"  src={"images/Team/team6.png"} />
                            <h4>CJ Sparxx</h4>
                          </div>
                      </div>
                      <div class="item">
                          <div class="favorite-model-img-box">
                            <img className="img-fluid m-0"  src={"images/Team/team6.png"} />
                            <h4>CJ Sparxx</h4>
                          </div>
                      </div>
                    </Slider>
                    
                 </Col>
              </Row>
            </Container>
           
          </section>
    </>)

}
export default Profile;