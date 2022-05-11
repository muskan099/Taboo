import { Container,Row,Col, Button, Dropdown, Table } from "react-bootstrap";


const TransactionPage=()=>{ 

    return(<>

<section className="join-box-sec rank-outer-sec transaction-page-css">
             <Container fluid className="p-0">
               <Row className="align-items-stretch">
                <Col md={3} sm={4} xs={12}>
                    <div className="join-first-box rank-side-img">
                         <img className="img-fluid m-0"  src={"images/Team/team6.png"} />
                     </div>
                </Col>
                <Col md={9} sm={8} xs={12}>
                    <div className="outer-rank-box">
                    <div className="profile-img-stakes">
                <img src={"images/full-View.png"} alt="profile IMG" />
                <p>0x8768EA5bB7144c39EC3Df69406DcA255d06ac4fC</p>
              </div>
                     
                       <div>
                            <Table className="table-tank" responsive>
                              <thead>
                                <tr>
                                   <th>S.No</th>
                                   <th>Image</th>
                                   <th>Wallet Address</th>
                                  <th>Trasaction Hash</th>
                                  <th>Token</th>
                                  <th>Ipfs Link</th>
                                  <th>Status</th>
                                  
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>01</td>
                                  <td>
                                  <div class="icon-img">
                                         <img src="images/Team/team7.png" />
                                         
                                      </div>
                                  </td>
                                  <td>
                                    giduiu4uii6i54iu4iiuo
                                  </td>
                                  <td>
                                    giduiu4uii6i54iu4iiuo
                                  </td>
                                  <td>
                                  giduiu4uii6i54iu4iiuo
                                  </td>
                                  <td><a href=""> giduiu4uii6i54iu4iiuo</a></td>
                                  <td>
                                         <span class="success">Successful</span>
                                  </td>
                                 
                                </tr>

                                <tr>
                                  <td>02</td>
                                  <td>
                                  <div class="icon-img">
                                         <img src="images/Team/team7.png" />
                                         
                                      </div>
                                  </td>
                                  <td>
                                    giduiu4uii6i54iu4iiuo
                                  </td>
                                  <td>
                                    giduiu4uii6i54iu4iiuo
                                  </td>
                                  <td>
                                  giduiu4uii6i54iu4iiuo
                                  </td>
                                  <td><a href=""> giduiu4uii6i54iu4iiuo</a></td>
                                  <td>
                                  <span class="down">failed</span>
                                  </td>
                                 
                                </tr>

                                <tr>
                                  <td>03</td>
                                  <td>
                                  <div class="icon-img">
                                         <img src="images/Team/team7.png" />
                                      </div>
                                  </td>
                                  <td>
                                    giduiu4uii6i54iu4iiuo
                                  </td>
                                  <td>
                                    giduiu4uii6i54iu4iiuo
                                  </td>
                                  <td>
                                  giduiu4uii6i54iu4iiuo
                                  </td>
                                  <td><a href=""> giduiu4uii6i54iu4iiuo</a></td>
                                  <td>
                                         <span class="success">Successful</span>
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
          

          <div>
      <div className="padding-strip"></div>
      <section className="section-stakes-table">
        <Container>
          <Row>
            <Col>
            
              
                "No Data Found"
            
            </Col>
          </Row>
        </Container>
      </section>
    </div>
    
         </>)

}
export default TransactionPage;
