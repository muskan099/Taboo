import { Chart } from "react-google-charts";
import { Row, Col, Container, Tabs,Tab,Table, Modal, Button, Form} from "react-bootstrap";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Dashboard=()=>{
    const value = 0.10;  
    const data = [
        ["Month", "Sales"],
        ["Jan", 1000],
        ["Feb", 1170],
        ["Mar", 660],
        ["Apr", 1030],
        ["May", 1000],
        ["Jun", 1170],
        ["Jul", 660],
        ["Aug", 1030],
        ["Sept", 1170],
        ["Oct", 660],
        ["Nov", 1030],
        ["Dec", 1030]
      ];

      const options = {
        isStacked: true,
        legend: { position: "none" },
        curveType: 'function',
        height:250,
        colors: ['#871434'],
        vAxis: { minValue: 0 },
      };



    return(<>
        <section className="creater-dash-sec">
             <Container fluid className="p-0">
               <Row>
                <Col lg={1} md={12} sm={12} xs={12}>
                    <div className="sidemenu-creater">
                        <ul>
                            <li>
                                <img className="img-fluid m-0"  src={"images/plus.png"} />
                            </li>
                            <li>
                                <img className="img-fluid m-0"  src={"images/plus.png"} />
                            </li>
                            <li>
                                <img className="img-fluid m-0"  src={"images/plus.png"} />
                            </li>
                            <li>
                                <img className="img-fluid m-0"  src={"images/plus.png"} />
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col lg={8} md={12} sm={12} xs={12}>
                    <div className="top-collect-creater">
                    <h3 className="main-heading-inner mb-0"> Top Collectables</h3>
                      <Row>
                      <Col lg={3} md={4} sm={6} xs={12}>
							<div class="outer-explor-box">
								
								<img className="img-main"  src={"images/Team/team4.png"} />
								
								  <div className="exploror-list-box">
									   <div className="price-line">
										   <h5>evcg<span>6</span> </h5>
										  <h6>30 Taboo</h6>
									   </div>
									   <div className="stoke-line">
											<ul>
												<li><img  src={"images/Team/team4.png"} /></li>
												<li><img  src={"images/Team/team2.png"} /></li>
												<li><img  src={"images/Team/team3.png"} /></li>
											</ul>
											<h6>Out Of Stocks </h6>
									   </div>
									   <hr></hr>
									   <div class="bid-row">
										   <span><img  src={"images/up-arrow.png"} /> Highest Bid</span>
										   <span><b>0 $ Taboo</b></span>
										   <span> New Bid <img  src={"images/up-arrow.png"} /> </span>
									   </div>
								  </div>
							</div>
						 </Col>
                         <Col lg={3} md={4} sm={6} xs={12}>
							<div class="outer-explor-box">
								
								<img className="img-main"  src={"images/Team/team4.png"} />
								
								  <div className="exploror-list-box">
									   <div className="price-line">
										   <h5>evcg<span>6</span> </h5>
										  <h6>30 Taboo</h6>
									   </div>
									   <div className="stoke-line">
											<ul>
												<li><img  src={"images/Team/team4.png"} /></li>
												<li><img  src={"images/Team/team2.png"} /></li>
												<li><img  src={"images/Team/team3.png"} /></li>
											</ul>
											<h6>Out Of Stocks </h6>
									   </div>
									   <hr></hr>
									   <div class="bid-row">
										   <span><img  src={"images/up-arrow.png"} /> Highest Bid</span>
										   <span><b>0 $ Taboo</b></span>
										   <span> New Bid <img  src={"images/up-arrow.png"} /> </span>
									   </div>
								  </div>
							</div>
						 </Col>
                         <Col lg={3} md={4} sm={6} xs={12}>
							<div class="outer-explor-box">
								
								<img className="img-main"  src={"images/Team/team4.png"} />
								
								  <div className="exploror-list-box">
									   <div className="price-line">
										   <h5>evcg<span>6</span> </h5>
										  <h6>30 Taboo</h6>
									   </div>
									   <div className="stoke-line">
											<ul>
												<li><img  src={"images/Team/team4.png"} /></li>
												<li><img  src={"images/Team/team2.png"} /></li>
												<li><img  src={"images/Team/team3.png"} /></li>
											</ul>
											<h6>Out Of Stocks </h6>
									   </div>
									   <hr></hr>
									   <div class="bid-row">
										   <span><img  src={"images/up-arrow.png"} /> Highest Bid</span>
										   <span><b>0 $ Taboo</b></span>
										   <span> New Bid <img  src={"images/up-arrow.png"} /> </span>
									   </div>
								  </div>
							</div>
						 </Col>
                         <Col lg={3} md={4} sm={6} xs={12}>
							<div class="outer-explor-box">
								
						  
                          
                          		<img className="img-main"  src={"images/Team/team4.png"} />
								
								  <div className="exploror-list-box">
									   <div className="price-line">
										   <h5>evcg<span>6</span> </h5>
										  <h6>30 Taboo</h6>
									   </div>
									   <div className="stoke-line">
											<ul>
												<li><img  src={"images/Team/team4.png"} /></li>
												<li><img  src={"images/Team/team2.png"} /></li>
												<li><img  src={"images/Team/team3.png"} /></li>
											</ul>
											<h6>Out Of Stocks </h6>
									   </div>
									   <hr></hr>
									   <div class="bid-row">
										   <span><img  src={"images/up-arrow.png"} /> Highest Bid</span>
										   <span><b>0 $ Taboo</b></span>
										   <span> New Bid <img  src={"images/up-arrow.png"} /> </span>
									   </div>
								  </div>
							</div>
						 </Col>
                     </Row>  

                     <hr/>

                     <h3 className="main-heading-inner">Analytics</h3>
                     <Row>
                      <Col lg={3} md={4} sm={6} xs={12}>
                          <div className="analytics-box">
                              <p>Unique Visitors</p>
                              <h5>6,54,29,708</h5>
                              <span className="gredient-line-red line-common"></span>
                              <p><small><b>4.6%</b>  Today</small></p>

                          </div>
                      </Col>
                      <Col lg={3} md={4} sm={6} xs={12}>
                          <div className="analytics-box">
                              <p>Total Subscription</p>
                              <h5>48,690</h5>
                              <span className="gredient-line-red line-common"></span>
                              <p><small><b>2.3%</b>  Month</small></p>

                          </div>
                      </Col>
                      <Col lg={3} md={4} sm={6} xs={12}>
                          <div className="analytics-box">
                              <p>New Profit (Sale)</p>
                              <h5>$13,160</h5>
                              <span className="gredient-line-red line-common"></span>
                              <p><small><b>10%</b>  Today</small></p>

                          </div>
                      </Col>
                      <Col lg={3} md={4} sm={6} xs={12}>
                          <div className="analytics-box">
                              <p>Daily Sales</p>
                              <h5>7,980</h5>
                              <span className="gredient-line-red line-common"></span>
                              <p><small><b>8%</b></small></p>

                          </div>
                      </Col>
                    </Row>

                    <Row className="mt-5">
                      <Col lg={8} md={8} sm={6} xs={12}>
                         <div className="area-chart shadow-graph-box">
                         <h3 className="main-heading-inner">Visitors Overview</h3>
                           <Chart
                            chartType="AreaChart"
                            width="100%"
                            height="400px"
                            data={data}
                            options={options}
                            />
                         </div>
                      </Col>
                      <Col lg={4} md={4} sm={6} xs={12}>
                        <div className="shadow-graph-box">
                        <h3 className="main-heading-inner">Sale</h3>
                            <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />;
                        </div>
                      </Col>
                    </Row>
                          
                    

                   

                     
                    </div>
                </Col>

                <Col lg={3} md={12} sm={12} xs={12} className="pr-0">
                <div className="profile-img-left-box">
                <h3 className="main-heading-inner mb-0 text-center"> My Profile</h3>
                     <img className="profile-main-img"  src={"images/Team/team7.png"} />
                     <h4>Cj Sparxx</h4>
                     <p>8b7b7078...978977b8b</p>
                     <hr/>


                     <h3 className="main-heading-inner mb-0 text-center">Top Models</h3>
                     
                    <div className="top-model-profile">
                        <img className="model-img"  src={"images/Team/team6.png"} />
                        <div className="center-details">
                            <h5>Cj Sparxx</h5>
                            <p>8b7b7078...978977b8b</p>
                        </div>
                        <a href="" className="blue-btn">Follow</a>
                    </div>

                    <div className="top-model-profile">
                        <img className="model-img"  src={"images/Team/team6.png"} />
                        <div className="center-details">
                            <h5>Cj Sparxx</h5>
                            <p>8b7b7078...978977b8b</p>
                        </div>
                        <a href="" className="blue-btn">Follow</a>
                    </div>

                    <div className="top-model-profile">
                        <img className="model-img"  src={"images/Team/team6.png"} />
                        <div className="center-details">
                            <h5>Cj Sparxx</h5>
                            <p>8b7b7078...978977b8b</p>
                        </div>
                        <a href="" className="blue-btn">Follow</a>
                    </div>

                    <div className="top-model-profile">
                        <img className="model-img"  src={"images/Team/team6.png"} />
                        <div className="center-details">
                            <h5>Cj Sparxx</h5>
                            <p>8b7b7078...978977b8b</p>
                        </div>
                        <a href="" className="blue-btn">Follow</a>
                    </div>

                    <div>
                        <a href="" className="see-all-link">
                            See All
                        </a>
                    </div>

                    

                 </div>
                </Col>
               </Row>
             </Container>
        </section>
    </>)

}

export default Dashboard;