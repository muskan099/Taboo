import { Row, Col, Container, Button, Dropdown, Table} from "react-bootstrap";

const Rank=()=>{


       return(<>
         <section className="join-box-sec rank-outer-sec">
             <Container fluid className="p-0">
               <Row className="align-items-stretch">
                <Col md={3} sm={4} xs={12}>
                    <div className="join-first-box rank-side-img">
                         <img className="img-fluid m-0"  src={"images/Team/team6.png"} />
                     </div>
                </Col>
                <Col md={9} sm={8} xs={12}>
                    <div className="outer-rank-box">
                       <div className="magazine-heading rank-heading">
                           <h2>TOP NFTs</h2>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                       </div>
                       <div className="filer-right-box allcategory-filter">
                            <a className="blue-btn mt-0" href="">All Categories</a>
                            <Dropdown>
                              <Dropdown.Toggle id="dropdown-basic">
                                      7 Days
                                     </Dropdown.Toggle>

                                     <Dropdown.Menu>
                                       <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                       <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                       <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                     </Dropdown.Menu>
                            </Dropdown>
                            
                       </div>
                       <div>
                            <Table className="table-tank" responsive>
                              <thead>
                                <tr>
                                   <th>S.No</th>
                                  <th>Collection</th>
                                  <th>Volume</th>
                                  <th>24H%</th>
                                  <th>7D%</th>
                                  <th>Floor Price</th>
                                  <th>Owner</th>
                                  <th>Items</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>01</td>
                                  <td>
                                      <div class="owner-row-outer">
                                          <img src="images/Team/team7.png" />
                                          <div><h5>Clementines Nightmare</h5></div>
                                      </div>
                                  </td>
                                  <td>
                                     <div class="icon-img">
                                         <img src="images/Team/team7.png" />
                                         57 
                                      </div>
                                  </td>
                                  <td>
                                         <span class="success">+94.05%</span>
                                  </td>
                                  <td>
                                         <span class="down">-20.12%</span>
                                  </td>
                                  <td>
                                         <span class="down">$T 750000</span>
                                  </td>
                                  <td>
                                         <span class="down">80</span>
                                  </td>
                                  <td>
                                         <span class="down">25</span>
                                  </td>
                                </tr>
                                 <tr>
                                  <td>02</td>
                                  <td>
                                      <div class="owner-row-outer">
                                          <img src="images/Team/team7.png" />
                                          <div><h5>Clementines Nightmare</h5></div>
                                      </div>
                                  </td>
                                  <td>
                                     <div class="icon-img">
                                         <img src="images/Team/team7.png" />
                                         57 
                                      </div>
                                  </td>
                                  <td>
                                         <span class="success">+94.05%</span>
                                  </td>
                                  <td>
                                         <span class="down">-20.12%</span>
                                  </td>
                                  <td>
                                         <span class="down">$T 750000</span>
                                  </td>
                                  <td>
                                         <span class="down">80</span>
                                  </td>
                                  <td>
                                         <span class="down">25</span>
                                  </td>
                                </tr>
                                 <tr>
                                  <td>03</td>
                                  <td>
                                      <div class="owner-row-outer">
                                          <img src="images/Team/team7.png" />
                                          <div><h5>Clementines Nightmare</h5></div>
                                      </div>
                                  </td>
                                  <td>
                                     <div class="icon-img">
                                         <img src="images/Team/team7.png" />
                                         57 
                                      </div>
                                  </td>
                                  <td>
                                         <span class="success">+94.05%</span>
                                  </td>
                                  <td>
                                         <span class="down">-20.12%</span>
                                  </td>
                                  <td>
                                         <span class="down">$T 750000</span>
                                  </td>
                                  <td>
                                         <span class="down">80</span>
                                  </td>
                                  <td>
                                         <span class="down">25</span>
                                  </td>
                                </tr>
                                 <tr>
                                  <td>04</td>
                                  <td>
                                      <div class="owner-row-outer">
                                          <img src="images/Team/team7.png" />
                                          <div><h5>Clementines Nightmare</h5></div>
                                      </div>
                                  </td>
                                  <td>
                                     <div class="icon-img">
                                         <img src="images/Team/team7.png" />
                                         57 
                                      </div>
                                  </td>
                                  <td>
                                         <span class="success">+94.05%</span>
                                  </td>
                                  <td>
                                         <span class="down">-20.12%</span>
                                  </td>
                                  <td>
                                         <span class="down">$T 750000</span>
                                  </td>
                                  <td>
                                         <span class="down">80</span>
                                  </td>
                                  <td>
                                         <span class="down">25</span>
                                  </td>
                                </tr>
                                 <tr>
                                  <td>05</td>
                                  <td>
                                      <div class="owner-row-outer">
                                          <img src="images/Team/team7.png" />
                                          <div><h5>Clementines Nightmare</h5></div>
                                      </div>
                                  </td>
                                  <td>
                                     <div class="icon-img">
                                         <img src="images/Team/team7.png" />
                                         57 
                                      </div>
                                  </td>
                                  <td>
                                         <span class="success">+94.05%</span>
                                  </td>
                                  <td>
                                         <span class="down">-20.12%</span>
                                  </td>
                                  <td>
                                         <span class="down">$T 750000</span>
                                  </td>
                                  <td>
                                         <span class="down">80</span>
                                  </td>
                                  <td>
                                         <span class="down">25</span>
                                  </td>
                                </tr>
                               
                              </tbody>
                            </Table>
                       </div>
                    </div>
                </Col>
               </Row>
             
            </Container>
         </section>
       </>)
}

export default Rank;
