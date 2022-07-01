import React, { useEffect, useState } from "react";
import { Row, Col, Container, Tabs,Tab,Table, Modal, Button, Form} from "react-bootstrap";

const JoinUs=()=>{

  useEffect(async()=>{
    window.scrollTo(0, 0)
 },[])  


    return(<>
         <section className="join-box-sec">
             <Container fluid className="p-0">
               <Row className="align-items-top">
                <Col md={6} sm={6} xs={12}>
                    <Row className="align-items-top">
                        
                        <Col md={7} sm={7} xs={12} className="p-0 order-2">
                           <Row className="align-items-top m-0">
                                <Col md={6} sm={6} xs={12} className="p-0">
                                    <div class="join-box-heading">
                                        <h2>Join Us</h2>
                                    </div>
                                </Col>
                                <Col md={6} sm={6} xs={12} className="p-0">
                                   <div className="join-first-box">
                                       <img className="img-fluid m-0"  src={"images/Team/team7.png"} />
                                   </div>
                                </Col>
                            </Row>
                            <div className="join-first-box">
                                       <img className="img-fluid m-0"  src={"images/Team/team7.png"} />
                                   </div>
                        </Col>
                        <Col md={5} sm={5} xs={12} className="p-0">
                           <div className="join-first-box">
                               <img className="img-fluid"  src={"images/Team/team7.png"} />
                               <div className="text-first-box">
                                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                               </div>
                           </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} sm={6} xs={12}>
                     <div class="form-join-us">
                         <Row className="align-items-top">
                            <Col  md={{ span: 2, offset: 1 }}>
                               <div>
                                   <h3 className="main-heading-inner mb-0"><a href=""><img src={"images/right-arrow.png"} /></a></h3>
                               </div>
                            </Col>
                            <Col md={6} sm={6} xs={12}>
                                <div>
                                   <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                  <Form.Group className="mb-3">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                  <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                  <Form.Group className="mb-3">
                                    <Form.Label>Social Media</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                  <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={2} />
                                  </Form.Group>
                                  <Form.Group className="mb-3">
                                    <div className="checkbox">
                                      <label>
                                        <input type="checkbox" value=""></input>
                                        <span className="cr"><i className="cr-icon fa fa-check"></i></span>
                                       I AM A MODEl
                                      </label>
                                    </div>
                                  </Form.Group>
                                  <div>
                                      <Button className="blue-btn">
                                          Send Message
                                      </Button>
                                  </div>
                                </div>
                            </Col>
                        </Row>
                     </div>
                </Col>
               </Row>
             
            </Container>
         </section>
    </>)

}
export default JoinUs;