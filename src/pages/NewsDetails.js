import { Row, Col, Container, Accordion, Dropdown,Form,FormControl,Button, InputGroup, } from "react-bootstrap";

const NewsDetails=()=>{
     return(<>
           <section className="news-sec-2 news-details-sec">
          <Container fluid className="p-0">
            <Row className="align-items-stetch">
               <Col lg={9} md={12} className="p-0 mt-5">
                   <Row className="align-items-stetch">
                        <Col lg={9} md={12} className="p-0 m-auto">
                            <h3 className="main-heading-inner mb-0"><a href=""><img src={"images/right-arrow.png"} /></a> Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing</h3>

                            <div class="details-img">
                               <img className="img-fluid m-0"  src={"images/Team/team6.png"} />
                           </div>

                           <div class="detail-content">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                           </div>

                           <h4 class="comment-heading">Comments</h4>

                           <hr/>

                           <div class="owner-row-outer comments-row">
                                <img src="images/Team/team7.png" />
                                <div><h5>James <small>2 Days Ago</small></h5>
                                   <p>I Love Your Style</p>
                                </div>
                            </div>

                            <h4 class="comment-heading">Drop Your Message</h4>

                           <hr/>

                           <div className="form-comment-news">
                                <Row>
                                     <Col lg={4} md={12}>
                                     <Form.Group className="mb-3">
                                       <Form.Control type="text" placeholder="Enter Your Name" />
                                     </Form.Group>
                                     </Col>
                                     <Col lg={4} md={12}>
                                     <Form.Group className="mb-3">
                                       <Form.Control type="text" placeholder="Enter Your Name" />
                                     </Form.Group>
                                     </Col>
                                </Row>
                                <Form.Group className="mb-3">
                                  <Form.Control as="textarea" rows={8} />
                                </Form.Group>
                                <div>
                                     <Button className="blue-btn">Leave Comment</Button>
                                </div>
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