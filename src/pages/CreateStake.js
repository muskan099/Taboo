import { Row, Col, Container, Accordion, Dropdown,Form,FormControl,Button, InputGroup, Tab, Tabs } from "react-bootstrap";



const CreateStake=()=>{
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
                
                  xl={9}
                  lg={9}
                  md={9}
                  sm={12}
                  xs={12}
                  className="m-auto"
                >
                 <div className="stack-edit">
                    <h2 className="form-heading">Farms</h2>
                    <Row>
                    <Col
                        xl={5}
                        lg={5}
                        md={5}
                        sm={12}
                        xs={12}
                        className=""
                     >
                       <div className="stake-edit-left">
                       <img className="img-fluid m-0 stake-img"  src={"images/Team/team6.png"} />
                       <h4>Stake / BNB</h4>
                       <Form.Group className="mb-3">
                            <Form.Label>Stake Amount</Form.Label>
                            <Form.Control type="text" className="mb-3" placeholder="0.00" />
                            <Form.Control type="text" placeholder="0.00" />
                            
                        </Form.Group>

                       </div>
                     </Col>

                     <Col
                        xl={7}
                        lg={7}
                        md={7}
                        sm={12}
                        xs={12}
                        className=""
                     >
                         <div className="stake-edit-right">
                         <Tabs defaultActiveKey="tab-stake1"  className="mb-3">
                            <Tab eventKey="tab-stake1" title="Stake / BNB">
                                <div>
                                    <p>To earn better rewards withdraw and harvest after one day</p>

                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="0.00" />
                                    </Form.Group>

                                    <div className="mb-3">
                                        <Button className="common-btn white-btn">Submit</Button>
                                        <Button className="common-btn">Add liquidity</Button>
                                    </div>

                                    <p><small>If you have zero LP token to deposit please firstly add liquidity on pancakeswap for BNB/TABOO Pair </small></p>


                                </div>
                            </Tab>
                            <Tab eventKey="tab-stake2" title="Withdraw">
                            <div>
                                    fjlksfjksf
                                </div>
                            </Tab>
                            <Tab eventKey="tab-stake3" title="Harvest">
                            <div>
                                    fjlksfjksf
                                </div>
                            </Tab>
                            </Tabs>
                         </div>

                     </Col>
                    </Row>
                 </div>
                 
                </Col>
                
              </Row>
        
            </Container>
           
          </section>


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
                
                  xl={7}
                  lg={7}
                  md={12}
                  sm={12}
                  xs={12}
                  className="m-auto"
                >
                      <div className="stake-edit-left stack-edit stake-step-add">
                           <Row className="align-items-center">
                           <Col
                                    xl={5}
                                    lg={5}
                                    md={5}
                                    sm={12}
                                    xs={12}
                                    className=""
                                >
                                    <h4 className="mb-3">Stake Taboo</h4>
                                        <Form.Group className="mb-3">
                                                <Form.Label>Stake Amount</Form.Label>
                                                <Form.Control type="text"  placeholder="0.00" />
                                                </Form.Group>


                                                <Form.Group className="mb-3">

                                                <Form.Label>Balance</Form.Label>
                                                <Form.Control type="text" placeholder="0.00" />
                                                
                                            </Form.Group>

                                            <div>
                                                <Button className="common-btn">Stake Now</Button>
                                            </div>
                                    </Col>
                                    <Col
                                    xl={7}
                                    lg={7}
                                    md={7}
                                    sm={12}
                                    xs={12}
                                    className=""
                                >
                                    <div className="list-stake-step">
                                        <ul>
                                            <li>Stake in Taboo and Earn more</li>
                                            <li>APY is 16%</li>
                                            <li>Minimum Lockup period is 3 months</li>
                                            <li>No Deposit or Withdrawal Fee</li>
                                        </ul>
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

export default CreateStake;