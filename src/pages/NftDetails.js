import React, { useState } from "react";
import { Row, Col, Container, Tabs,Tab,Table, Modal, Button} from "react-bootstrap";





const NftDetails=()=>{

 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

    return(<>

        <section className="explore-info-sec">
            <Container>
              <Row className="align-items-top">
                <Col md={6} sm={6} xs={12}>
                    <div class="detail-box-img">
                        <img className="img-main"  src={"images/Team/team7.png"} />
                    </div>
                </Col>
                <Col md={5} sm={6} xs={12}>
                    <div class="detail-side-text">
                        <a href="" className="add-icon"><img  src={"images/add-button.png"} /></a>
                        <h3>Tempor Incididunt</h3>
                        <h6>
                            <span className="price">900$ Taboo</span>
                            <span className="price2">700$</span>
                            <span className="stoke-1">10 in stock</span>
                        </h6>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  
                        </p>
                        <div className="details-tab-outer">
                            <Tabs defaultActiveKey="info" className="mb-3">
                              <Tab eventKey="info" title="Info">
                                 <div className="">
                                     <div class="owner-row-outer">
                                         <img  src={"images/Team/team7.png"} />
                                         <div>
                                             <p>Owner</p>
                                             <h5>Requel Will</h5>
                                         </div>
                                     </div>
                                     <div class="owner-row-outer">
                                         <img  src={"images/Team/team7.png"} />
                                         <div>
                                             <p>Owner</p>
                                             <h5>Requel Will</h5>
                                         </div>
                                     </div>

                                 </div>
                              </Tab>
                              <Tab eventKey="owners" title="Owners">
                                hffh
                              </Tab>
                              <Tab eventKey="history" title="History">
                               khkhk
                              </Tab>
                              <Tab eventKey="bids" title="Bids">
                               khkhk
                              </Tab>
                            </Tabs>
                            <div className="outer-purchase-box">
                              <div className="owner-row-outer">
                                 <img  src={"images/Team/team7.png"} />
                                 <div>
                                     <p>Highest bid by <b>Kohaku Tora</b></p>
                                     <h5>10000000$ TABOO $3000</h5>
                                 </div>
                              </div>
                               <div class="text-center">
                                   <Button className="blue-btn" onClick={handleShow}>Purchase Now</Button>
                                   <Button className="border-btn" onClick={handleShow1}>Place A Bid</Button>
                                   
                               </div>
                            </div>
                        </div>
                    </div>
                    
                </Col>
              </Row>
            </Container>
            <Modal 
            show={show}
            className="modal-comming-soon bid-modal" 
            backdrop="static"
            keyboard={false} 
            onHide={handleClose}
            centered>
                <Modal.Header closeButton className="border-none p-0"></Modal.Header>
                <Modal.Body>
                  <div class="bid-modal-box">
                        <h3>Place A Bid</h3>
                        <p>You are about to place a bit for Tempor Incododunt</p>
                        <h5>Your bid</h5>
                        <Table>
                          <thead>
                            <tr>
                              <th>Enter Bid</th>
                              <th>$TABOO</th>
                              
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Your Balance</td>
                              <td>123 $TABOO</td>
                              
                            </tr>
                            <tr>
                              <td>Service Fee</td>
                              <td>0 $TABOO</td>
                              
                            </tr>
                            <tr>
                              <td>Total bod Amount</td>
                              <td>123 $TABOO</td>
                              
                            </tr>
                          </tbody>
                        </Table>
                        <div>
                            <a href="" className="blue-btn">Place A Bid</a>
                            
                            <a href="" className="border-btn">Cancel</a>
                        </div>
                    </div>
                </Modal.Body>
                
              </Modal>

              <Modal 
            show={show1}
            className="modal-comming-soon bid-modal" 
            backdrop="static"
            keyboard={false} 
            onHide={handleClose1}
            centered>
                <Modal.Header closeButton className="border-none p-0"></Modal.Header>
                <Modal.Body>
                   <div class="bid-modal-box success-bid-box">
                        <h3>Yay!</h3>
                        <p class="green-text">Your purchase was successful</p>
                        <div class="table-outer">
                            <Table>
                              <tbody>
                                <tr>
                                  <td>Status</td>
                                  <td>Transaction ID</td>
                                  
                                </tr>
                                <tr>
                                  <td><span className="color-green">Processing</span></td>
                                  <td><b>oiuoiuo7i7o776....6896hgh8989</b></td>
                                  
                                </tr>
                                
                              </tbody>
                          </Table>
                        </div>
                        <p class="time-off">Time to show-off</p>
                        <ul>
                            <li><a href=""><img src="images/add-button.png" /></a></li>
                            <li><a href=""><img src="images/add-button.png" /></a></li>
                            <li><a href=""><img src="images/add-button.png" /></a></li>
                            <li><a href=""><img src="images/add-button.png" /></a></li>
                        </ul>
                    </div>
                </Modal.Body>
                
              </Modal>
               
        </section>
    </>)

}

export default NftDetails;