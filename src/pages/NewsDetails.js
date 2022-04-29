import { Row, Col, Container, Accordion, Dropdown,Form,FormControl,Button, InputGroup, } from "react-bootstrap";

const NewsDetails=()=>{
     return(<>
           <section className="news-sec-2 news-details-sec">
          <Container fluid className="p-0">
            <Row className="align-items-stetch">
               <Col lg={9} md={12} className="p-0 mt-5">
                   <Row>
                       <Col lg={10} md={12}
                          sm={12}
                          xs={12} className="m-auto">
                          <div class="favorite-model-heading trending-box-heading">
                                <span>Whats Trending</span>
                            </div>
                          <Row>
                               <Col md={8}
                                  sm={12}
                                  xs={12}>
                                  <div class="latest-news-outer free-news-1">
                                        <img className="news-img img-fluid m-0"  src={"images/Team/team6.png"} />
                                        <div class="news-content">
                                            
                                            <h4>Lorem Ipsum is simply dummy text of the printing..</h4>
                                            <div class="like-row">
                                                <p>
                                                    <span><img className="img-fluid m-0"  src={"images/Team/team6.png"} /> 15</span>
                                                    <span><img className="img-fluid m-0"  src={"images/Team/team6.png"} /> 15</span>
                                                </p>
                                                <a href="" class="border-btn">Models</a>
                                            </div>
                                        </div>
                                    </div>

                              </Col>
                              <Col md={4}
                                  sm={12}
                                  xs={12}>
                                   <div class="latest-news-outer free-news-2">
                                        <img className="news-img img-fluid m-0"  src={"images/Team/team6.png"} />
                                        <div class="news-content">
                                            
                                            <h4>Lorem Ipsum is simply dummy text of the printing</h4>
                                            <div class="like-row">
                                                <p>
                                                    <span><img className="img-fluid m-0"  src={"images/Team/team6.png"} /> 15</span>
                                                    <span><img className="img-fluid m-0"  src={"images/Team/team6.png"} /> 15</span>
                                                </p>
                                                <a href="" class="border-btn">Models</a>
                                            </div>
                                        </div>
                                    </div>

                              </Col>
                          </Row>
                          <Row>
                               <Col md={4}
                                  sm={6}
                                  xs={12}>
                                  <div class="latest-news-outer free-news-3">
                                        <img className="news-img img-fluid m-0"  src={"images/Team/team6.png"} />
                                        <div class="news-content">
                                            
                                            <h4>Lorem Ipsum is simply dummy text of the printing..</h4>
                                            <div class="like-row">
                                                <p>
                                                    <span><img className="img-fluid m-0"  src={"images/Team/team6.png"} /> 15</span>
                                                    <span><img className="img-fluid m-0"  src={"images/Team/team6.png"} /> 15</span>
                                                </p>
                                                <a href="" class="border-btn">Models</a>
                                            </div>
                                        </div>
                                    </div>

                              </Col>
                              <Col md={4}
                                  sm={6}
                                  xs={12}>
                                  <div class="latest-news-outer free-news-3">
                                        <img className="news-img img-fluid m-0"  src={"images/Team/team6.png"} />
                                        <div class="news-content">
                                            
                                            <h4>Lorem Ipsum is simply dummy text of the printing..</h4>
                                            <div class="like-row">
                                                <p>
                                                    <span><img className="img-fluid m-0"  src={"images/Team/team6.png"} /> 15</span>
                                                    <span><img className="img-fluid m-0"  src={"images/Team/team6.png"} /> 15</span>
                                                </p>
                                                <a href="" class="border-btn">Models</a>
                                            </div>
                                        </div>
                                    </div>

                              </Col>
                              <Col md={4}
                                  sm={6}
                                  xs={12}>
                                  <div class="latest-news-outer free-news-3">
                                        <img className="news-img img-fluid m-0"  src={"images/Team/team6.png"} />
                                        <div class="news-content">
                                            
                                            <h4>Lorem Ipsum is simply dummy text of the printing..</h4>
                                            <div class="like-row">
                                                <p>
                                                    <span><img className="img-fluid m-0"  src={"images/Team/team6.png"} /> 15</span>
                                                    <span><img className="img-fluid m-0"  src={"images/Team/team6.png"} /> 15</span>
                                                </p>
                                                <a href="" class="border-btn">Models</a>
                                            </div>
                                        </div>
                                    </div>

                              </Col>
                          </Row>

                          <div class="favorite-model-heading trending-box-heading mt-5">
                                <span>Most Popular Videos</span>
                            </div>

                            <div class="video-box-big">
                               <img className="news-img img-fluid m-0"  src={"images/3.png"} />
                               <img className="play-icon img-fluid m-0"  src={"images/Polygon.png"} />
                           </div>

                            <Row>
                               <Col md={8}
                                  sm={12}
                                  xs={12}>
                                   <div class="video-box-big vid1">
                                       <img className="news-img img-fluid m-0"  src={"images/3.png"} />
                                       <img className="play-icon img-fluid m-0"  src={"images/Polygon.png"} />
                                   </div>
                              </Col>
                              <Col md={4}
                                  sm={12}
                                  xs={12}>
                                   <div class="video-box-big vid2">
                                       <img className="news-img img-fluid m-0"  src={"images/3.png"} />
                                       <img className="play-icon img-fluid m-0"  src={"images/Polygon.png"} />
                                   </div>
                              </Col>
                          </Row>

                          <div>
                              <a href="" class="blue-btn mt-3">Load More</a>
                          </div>
                          
                       </Col>
                    </Row>
               </Col>
               <Col lg={3} md={12} className="p-0">
                 <div class="top-story-side">
                      <h3>Top Stories</h3>
                      <div class="story-box-single">
                          <img className="img-fluid m-0"  src={"images/Team/team6.png"} />
                          <h5>Lorem Ipsum is simply dummy text of the printing</h5>
                      </div>
                      <div class="story-box-single">
                          <img className="img-fluid m-0"  src={"images/Team/team6.png"} />
                          <h5>Lorem Ipsum is simply dummy text of the printing</h5>
                      </div>
                      <div class="story-box-single">
                          <img className="img-fluid m-0"  src={"images/Team/team6.png"} />
                          <h5>Lorem Ipsum is simply dummy text of the printing</h5>
                      </div>
                      <div class="story-box-single">
                          <img className="img-fluid m-0"  src={"images/Team/team6.png"} />
                          <h5>Lorem Ipsum is simply dummy text of the printing</h5>
                      </div>
                      <div class="story-box-single">
                          <img className="img-fluid m-0"  src={"images/Team/team6.png"} />
                          <h5>Lorem Ipsum is simply dummy text of the printing</h5>
                      </div>
                      <div class="story-box-single">
                          <img className="img-fluid m-0"  src={"images/Team/team6.png"} />
                          <h5>Lorem Ipsum is simply dummy text of the printing</h5>
                      </div>

                      <div class="add-box">
                          <img className="img-fluid m-0"  src={"images/Team/team6.png"} />
                      </div>



                      <h3>Newest Video</h3>
                      <div class="story-box-single">
                           <div class="video-box-big newest-box">
                               <img className="news-img img-fluid m-0"  src={"images/3.png"} />
                               <img className="play-icon img-fluid m-0"  src={"images/Polygon.png"} />
                           </div>
                          <h5>Lorem Ipsum is simply dummy text of the printing</h5>
                      </div>
                      <div class="story-box-single">
                          <div class="video-box-big newest-box">
                               <img className="news-img img-fluid m-0"  src={"images/3.png"} />
                               <img className="play-icon img-fluid m-0"  src={"images/Polygon.png"} />
                           </div>
                          <h5>Lorem Ipsum is simply dummy text of the printing</h5>
                      </div>
                      <div class="story-box-single">
                          <div class="video-box-big newest-box">
                               <img className="news-img img-fluid m-0"  src={"images/3.png"} />
                               <img className="play-icon img-fluid m-0"  src={"images/Polygon.png"} />
                           </div>
                          <h5>Lorem Ipsum is simply dummy text of the printing</h5>
                      </div>
                      <div class="story-box-single">
                          <div class="video-box-big newest-box">
                               <img className="news-img img-fluid m-0"  src={"images/3.png"} />
                               <img className="play-icon img-fluid m-0"  src={"images/Polygon.png"} />
                           </div>
                          <h5>Lorem Ipsum is simply dummy text of the printing</h5>
                      </div>
                      
                 </div>
               </Col>
           </Row>
             
          </Container>
        </section>
     </>)
}
export default NewsDetails;