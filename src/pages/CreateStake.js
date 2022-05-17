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