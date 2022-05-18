import { Row, Col, Container, Tabs,Tab,Table, Modal, FormControl,Button, InputGroup, Form, Dropdown,} from "react-bootstrap";



const TransactionList=()=>{
    return(<>
     <section className="creater-dash-sec">
             <Container fluid className="p-0">
               <Row>
                <Col lg={1} md={12} sm={12} xs={12}>
                    <div className="sidemenu-creater">
                        <ul>
                            <li className="active">
                                <a href=""><img className="img-fluid m-0"  src={"images/dashboard.png"} /></a>
                            </li>
                            <li>
                               <a href=""><img className="img-fluid m-0"  src={"images/list.png"} /></a>
                            </li>
                            <li>
                               <a href=""><img className="img-fluid m-0"  src={"images/list22.png"} /></a>
                            </li>
                            
                        </ul>
                    </div>
                </Col>
                <Col lg={11} md={12} sm={12} xs={12}>
                    <div className="top-collect-creater nft-collector">
                   <div className="nft-list-btn-row">
                       <h3 className="main-heading-inner mb-0"> Transaction History</h3>
                       <a className="common-btn" href="">Export to Exel</a>
                       <a  className="common-btn" href="">Export to CSV</a>
                   </div>

                   <Row>
                       <Col lg={3} md={4} sm={12} xs={12}>
                            <div className="trans-commision-box">
                                <p>Commision in ETH 0.34657755</p>
                                <a href="" className="link-view">View</a>
                            </div>
                       </Col>
                       <Col lg={3} md={4} sm={12} xs={12}>
                            <div className="trans-commision-box">
                                <p>Commision in BNB 0.34657755</p>
                                <a href="" className="link-view">View</a>
                            </div>
                       </Col>
                       <Col lg={3} md={4} sm={12} xs={12}>
                            <div className="trans-commision-box">
                                <p>Commision in MATIC 0.34657755</p>
                                <a href="" className="link-view">View</a>
                            </div>
                       </Col>
                   </Row>
                   
                   

                    <div className="shadow-box ">
                         <Table className="table-tank" responsive>
                              <thead>
                                <tr>
                                   <th>S.No</th>
                                  <th>Hash </th>
                                  <th>Sender</th>
                                  <th>Receiver</th>
                                  <th>NFT</th>
                                  <th>Amount</th>
                                  <th>Commision</th>
                                  <th>Date</th>
                                 
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>01</td>
                                 <td>00dss0...898tr89</td>
                                 <td>00dss0...898tr89</td>
                                 <td>00dss0...898tr89</td>
                                 <td>Monkey #7</td>
                                 <td>0.0001000000 NFT</td>
                                 <td>0.0001000000 NFT</td>
                                 <td>06 May, 2022</td>
                                 
                                 
                                  
                                </tr>

                                <tr>
                                  <td>01</td>
                                 <td>00dss0...898tr89</td>
                                 <td>00dss0...898tr89</td>
                                 <td>00dss0...898tr89</td>
                                 <td>Monkey #7</td>
                                 <td>0.0001000000 NFT</td>
                                 <td>0.0001000000 NFT</td>
                                 <td>06 May, 2022</td>
                                 
                                 
                                  
                                </tr>

                                <tr>
                                  <td>01</td>
                                 <td>00dss0...898tr89</td>
                                 <td>00dss0...898tr89</td>
                                 <td>00dss0...898tr89</td>
                                 <td>Monkey #7</td>
                                 <td>0.0001000000 NFT</td>
                                 <td>0.0001000000 NFT</td>
                                 <td>06 May, 2022</td>
                                 
                                 
                                  
                                </tr>

                                <tr>
                                  <td>01</td>
                                 <td>00dss0...898tr89</td>
                                 <td>00dss0...898tr89</td>
                                 <td>00dss0...898tr89</td>
                                 <td>Monkey #7</td>
                                 <td>0.0001000000 NFT</td>
                                 <td>0.0001000000 NFT</td>
                                 <td>06 May, 2022</td>
                                 
                                 
                                  
                                </tr>

                                <tr>
                                  <td>01</td>
                                 <td>00dss0...898tr89</td>
                                 <td>00dss0...898tr89</td>
                                 <td>00dss0...898tr89</td>
                                 <td>Monkey #7</td>
                                 <td>0.0001000000 NFT</td>
                                 <td>0.0001000000 NFT</td>
                                 <td>06 May, 2022</td>
                                 
                                 
                                  
                                </tr>

                                <tr>
                                  <td>01</td>
                                 <td>00dss0...898tr89</td>
                                 <td>00dss0...898tr89</td>
                                 <td>00dss0...898tr89</td>
                                 <td>Monkey #7</td>
                                 <td>0.0001000000 NFT</td>
                                 <td>0.0001000000 NFT</td>
                                 <td>06 May, 2022</td>
                                 
                                 
                                  
                                </tr>

                                <tr>
                                  <td>01</td>
                                 <td>00dss0...898tr89</td>
                                 <td>00dss0...898tr89</td>
                                 <td>00dss0...898tr89</td>
                                 <td>Monkey #7</td>
                                 <td>0.0001000000 NFT</td>
                                 <td>0.0001000000 NFT</td>
                                 <td>06 May, 2022</td>
                                 
                                 
                                  
                                </tr>

                                <tr>
                                  <td>01</td>
                                 <td>00dss0...898tr89</td>
                                 <td>00dss0...898tr89</td>
                                 <td>00dss0...898tr89</td>
                                 <td>Monkey #7</td>
                                 <td>0.0001000000 NFT</td>
                                 <td>0.0001000000 NFT</td>
                                 <td>06 May, 2022</td>
                                 
                                 
                                  
                                </tr>

                                
                                
                              </tbody>
                            </Table>
                         </div>
                         <div className="latest-user-row justify-content-end">
                            
                             <a href="" className="view-all-link">See All</a>
                         </div>
                     
                    </div>
                </Col>
               </Row>
             </Container>
        </section>
    
    </>)
}

export default TransactionList;