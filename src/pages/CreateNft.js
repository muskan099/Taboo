import { Row, Col, Container, Button, Dropdown, Table, Form} from "react-bootstrap";


const CreateNft=()=>{

    return(<>
           <section className="crate-page-sec">
             <Container>
               <Row>
                <Col md={12} sm={12} xs={12}>
                   <h3 className="main-heading-inner mb-0"><a href=""><img src={"images/right-arrow.png"} /></a> Create NFT</h3>
                   <div>
                      <Row>
                         <Col md={8} sm={8} xs={12}>
                           <div className="outer-create-form">
                              <ul class="select-transaction-list">
                                <li>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="mint_type" value="lazy" checked />
                                            <span class="cr"><i class="cr-icon fa fa-check"></i></span>
                                            <div class="bsc-block">
                                                <span>Lazy Minting</span>
                                                
                                            </div>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="mint_type" value="normal" />
                                            <span class="cr"><i class="cr-icon fa fa-check"></i></span>
                                            <div class="bsc-block">
                                                <span>Normal Minting</span>
                                                
                                            </div>
                                        </label>
                                    </div>
                                </li>

                              </ul>
                              <ul class="select-transaction-list">
                               
                                <li>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="blockchain" class="blockchain" value="BNB" chain="56" alert="Please switch to BSC network!!" rpc="https://bsc-dataseed.binance.org/" />
                                            <span class="cr"><i class="cr-icon fa fa-check"></i></span>
                                            <div class="bsc-block">
                                                <img src="https://clubvirtual.io/assets/images/icon/icon3.png" />
                                                <span>BSC</span>
                                            </div>
                                        </label>
                                    </div>
                                    
                                </li>
                                 <li>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="blockchain" class="blockchain" value="MATIC" chain="137" alert="Please switch to Matic network!!" rpc="https://polygon-rpc.com/" />
                                            <span class="cr"><i class="cr-icon fa fa-check"></i></span>
                                            <div class="bsc-block">
                                                <img src="https://clubvirtual.io/assets/images/icon/polygon.png" />
                                                <span>Polygon</span>
                                            </div>
                                        </label>
                                    </div>
                                    
                                </li>
                                <li>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="blockchain" class="blockchain" value="ETH" chain="1" alert="Please switch to ETH network!!" rpc="https://mainnet.infura.io/v3/" />
                                            <span class="cr"><i class="cr-icon fa fa-check"></i></span>
                                            <div class="bsc-block">
                                                <img src="https://clubvirtual.io/assets/images/icon/ETH.png" />
                                                <span>ETH</span>
                                            </div>
                                        </label>
                                    </div>
                                    
                                </li>

                            </ul>


                             <div class="upload-img-box">
                                 <div>
                                    <div>PNG,JPG,GIF,WEBP or MP4, Max 20mb</div>
                                    <div class="upload-btn-wrapper">
                                       <button class="blue-btn">Upload</button>
                                       <input type="file" name="myfile" />
                                   </div>
                                 </div>
                             </div>


                            <Form.Group className="mb-4">
                                <Form.Control type="file" size="lg" />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Control type="text" placeholder="Your NFT Name" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                 <Form.Control as="textarea" rows={4} />
                            </Form.Group>

                            
                             <Row>
                                <Col md={4} sm={4} xs={12}>
                                   <Form.Group className="mb-3">
                                        <Form.Label>Quantity</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                 </Col>
                             </Row>

                             <Row>
                                <Col md={4} sm={4} xs={12}>
                                  <Form.Group className="mb-3">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                                 </Col>
                                 <Col md={4} sm={4} xs={12}>
                                   <Form.Group className="mb-3">
                                        <Form.Label>Royalities</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                 </Col>
                             </Row>

                             <h5>Attributes</h5>


                             <Row>
                                <Col md={3} sm={3} xs={12}>
                                   <Form.Group className="mb-3">
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                 </Col>
                                 <Col md={3} sm={3} xs={12}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Trait</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                 </Col>
                                 <Col md={3} sm={3} xs={12}>
                                     <Form.Group className="mb-3">
                                        <Form.Label>Percentage</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                 </Col>
                                 <Col md={3} sm={3} xs={12}>
                                    <div className="mt-4">
                                        <button className="blue-btn">Add Attributes</button>
                                    </div>
                                 </Col>
                             </Row>

                             <Row className="mt-3">
                                <Col md={12} sm={12} xs={12}>

                                   <Table striped bordered hover>
                                      <thead>
                                        <tr>
                                           <th>Category</th>
                                            <th>Trait</th>
                                            <th>%</th>
                                            <th>Option</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                      </tbody>
                                    </Table>
                                  
                                 </Col>
                                 
                             </Row>

                             <div >
                                 <button className="blue-btn">Create Item</button>
                             </div>
                           </div>
                         </Col>
                         <Col md={4} sm={4} xs={12}>
                         <div className="mt-4">
                            <div class="outer-explor-box mt-0">
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

export default CreateNft;
