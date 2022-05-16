import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, Accordion, Dropdown,Form,FormControl,Button, InputGroup, } from "react-bootstrap";
import { getNftSaga } from "../store/reducers/nftReducer";


const Explore =()=>{
   
   const dispatch = useDispatch();
   const [currentPage,setCurrentPage]=useState(1)
   
   const[category,setCategory]=useState('');

	const { isAuthenticated, walletAddress,tier } = useSelector((state) => state.auth);

	const { nft} = useSelector((state) => state.nft);
    console.log('nft',nft.length)
const getData=(page,limit=60,tier,search_tag)=>{
	console.log('hh')
	let data={tier:tier,
              page:page,
			  limit:limit,
			  search_tag:search_tag}
	dispatch(getNftSaga(data));
}

useEffect(()=>{
    console.log("category",category)
	getData(currentPage,60,tier,category)

},[currentPage,category])


	return(<>
		 <section className="team-sec-new">
	        <Container>
	          <Row className="align-items-top">
	            <Col className="" >
	                <div className="outer-heading-line">
	                	 <Row className="justify-content-between">
	                       <Col md={6} sm={6} xs={12}>
	                          <h3 className="main-heading-inner mb-0"><a href=""><img src={"images/right-arrow.png"} /></a> Explore</h3>
	                       </Col>
	                        <Col md={4} sm={6} xs={12}>
	                          <div className="newsletter-box m-0">
				               	   <InputGroup className="m-0">
								  <FormControl
								      placeholder="Search....."
								      aria-label="Recipient's username"
								      aria-describedby="basic-addon2"
								    />
								    <Button
					                    
					                  >
					                    <img className="search-icon" src={"images/icons-Search-Line.png"} alt="logo" />
					                  </Button>
								  </InputGroup>
				              </div>
	                       </Col>
	                     </Row>
	                	
	                	
	                </div>
	             
		        </Col>	
		      </Row>
	          <Row className="align-items-top">
	            <Col
	              xxl={3}
	              xl={3}
	              lg={4}
	              md={4}
	              sm={4}
	              xs={12}
	              className=""
	            >
	             <div className="list-outer-box">
	             	<label className="heading-label">Likes</label>
	             	<div className="price-range-box">
			      		<div id="slider-range"></div>
						<p>
						  <input type="text" id="amount" readonly></input>
						</p>
			      	</div>

			       <hr></hr>
	             	<Accordion defaultActiveKey="0">
					  <Accordion.Item eventKey="0">
					  	<label className="heading-label">Likes</label>
					    <Accordion.Header>Most Liked</Accordion.Header>
					    <Accordion.Body>
					      <div className="radio">
				          <label>
				            <input type="radio" name="o1" value="" checked></input>
				            <span className="cr"><i className="cr-icon fa fa-circle"></i></span>
				            Price: High to Low
				          </label>
				        </div>
				        <div className="radio">
				          <label>
				            <input type="radio" name="o1" value="" checked></input>
				            <span className="cr"><i className="cr-icon fa fa-circle"></i></span>
				            Price: Low to High
				          </label>
				        </div>
				        <div className="radio">
				          <label>
				            <input type="radio" name="o1" value="" checked></input>
				            <span className="cr"><i className="cr-icon fa fa-circle"></i></span>
				            A To Z
				          </label>
				        </div>
				        <div className="radio">
				          <label>
				            <input type="radio" name="o1" value="" checked></input>
				            <span className="cr"><i className="cr-icon fa fa-circle"></i></span>
				            Latest
				          </label>
				        </div>
					    </Accordion.Body>
					  </Accordion.Item>
					  <Accordion.Item eventKey="1">
					  	<label className="heading-label">Style</label>
					    <Accordion.Header>Love</Accordion.Header>
					    
					    <Accordion.Body>
					      <div className="checkbox">
				          <label>
				            <input type="checkbox" value=""></input>
				            <span className="cr"><i className="cr-icon fa fa-check"></i></span>
				            Option one is this 
				          </label>
				        </div>
				        <div className="checkbox">
				          <label>
				            <input type="checkbox" value=""></input>
				            <span className="cr"><i className="cr-icon fa fa-check"></i></span>
				            Option one is this 
				          </label>
				        </div>
				        <div className="checkbox">
				          <label>
				            <input type="checkbox" value=""></input>
				            <span className="cr"><i className="cr-icon fa fa-check"></i></span>
				            Option one is this 
				          </label>
				        </div>
				        <div className="checkbox">
				          <label>
				            <input type="checkbox" value=""></input>
				            <span className="cr"><i className="cr-icon fa fa-check"></i></span>
				            Option one is this 
				          </label>
				        </div>
					    </Accordion.Body>
					  </Accordion.Item>
					   <Accordion.Item eventKey="2">
					   	<label className="heading-label">Creator</label>
					    <Accordion.Header>Verified Only</Accordion.Header>
					    <Accordion.Body>
					      <div className="checkbox">
				          <label>
				            <input type="checkbox" value=""></input>
				            <span className="cr"><i className="cr-icon fa fa-check"></i></span>
				            Option one is this 
				          </label>
				        </div>
				        <div className="checkbox">
				          <label>
				            <input type="checkbox" value=""></input>
				            <span className="cr"><i className="cr-icon fa fa-check"></i></span>
				            Option one is this 
				          </label>
				        </div>
				        <div className="checkbox">
				          <label>
				            <input type="checkbox" value=""></input>
				            <span className="cr"><i className="cr-icon fa fa-check"></i></span>
				            Option one is this 
				          </label>
				        </div>
				        <div className="checkbox">
				          <label>
				            <input type="checkbox" value=""></input>
				            <span className="cr"><i className="cr-icon fa fa-check"></i></span>
				            Option one is this 
				          </label>
				        </div>
					    </Accordion.Body>
					  </Accordion.Item>
					</Accordion>
					<div className="reset-link-outer">
						<a href=""className="reset-link" ><img src={"images/cross.png"} alt="close" />Reset Filter</a>
					</div>
	             </div>
	             
	            </Col>
	            <Col xxl={9} xl={9} lg={9} md={8} sm={8} xs={12}>
	               <div>
	               	 <Row>
	               	 	<Col>
	               	 		<div className="filer-right-box">
	               	 			<Dropdown>
								  <Dropdown.Toggle id="dropdown-basic">
									   Rcently Added
									  </Dropdown.Toggle>

									  <Dropdown.Menu>
									    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
									    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
									    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
									  </Dropdown.Menu>
								</Dropdown>
								<ul>
									<li className="active"><a href="#" onClick={()=>setCategory('')}>All items</a></li>
									<li><a href="#"onClick={()=>setCategory('Sexy')}>Sexy</a></li>
									<li><a href="#"onClick={()=>setCategory('Models')}>Models</a></li>
									<li><a href="#"onClick={()=>setCategory('Metaverse')}>Metavers</a></li>
									<li><a href="#"onClick={()=>setCategory('Lifestyles')}>Lifestyle</a></li>
									<li><a href="#"onClick={()=>setCategory('Premium')}>Premium</a></li>
								</ul>
	               	 		</div>
	               	 	</Col>		
	               	 </Row>
	               	 <Row>

					    {nft.length>0?
						 nft.map((item)=>

							<Col lg={4} md={6} sm={6} xs={12}>
							<div class="outer-explor-box">
								<Link to={`/details/${item._id}`}>
								<img className="img-main"  src={item.image} />
								</Link>
								 
								  <div className="exploror-list-box">
									   <div className="price-line">
										   <h5>{item.name}<span>{item.quantity}</span> </h5>
										  <h6>{item.price} Taboo</h6>
									   </div>
									   <div className="stoke-line">
											<ul>
												<li><img  src={"images/Team/team4.png"} /></li>
												<li><img  src={"images/Team/team2.png"} /></li>
												<li><img  src={"images/Team/team3.png"} /></li>
											</ul>
											<h6>{item.status=="sold"?"Sold out":"in stock"} </h6>
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

						 ) 
						 :""}		
	               	 	
		               	{/* <Col lg={4} md={6} sm={6} xs={12}>
	               	 	   <div class="outer-explor-box">
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
		               	 </Col>
		               	 <Col lg={4} md={6} sm={6} xs={12}>
	               	 	   <div class="outer-explor-box">
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
		               	 </Col>
		               	 <Col lg={4} md={6} sm={6} xs={12}>
	               	 	   <div class="outer-explor-box">
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
		               	 </Col>
		               	 <Col lg={4} md={6} sm={6} xs={12}>
	               	 	   <div class="outer-explor-box">
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
		               	 </Col>
		               	 <Col lg={4} md={6} sm={6} xs={12}>
	               	 	   <div class="outer-explor-box">
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
		               	 </Col> */}
		              </Row>
	               </div>
	            </Col>
	          </Row>
	        </Container>
	       
	      </section>
		</>)

}

export default Explore;