import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, Accordion, Dropdown,Form,FormControl,Button, InputGroup, } from "react-bootstrap";
import { getNftSaga } from "../store/reducers/nftReducer";
import { axios } from "../http";

const Artist =()=>{
   
   const dispatch = useDispatch();
   const [currentPage,setCurrentPage]=useState(1)
   
   const[category,setCategory]=useState('');

   const [meta,setMeta]=useState('')

	const { isAuthenticated, walletAddress,tier } = useSelector((state) => state.auth);

const [nft,setNft]=useState('')

const getData=async(page,limit=60,tier,search_tag,category)=>{
	// console.log('hh')
	let data={tier:tier,
              page:page,
			  limit:limit,
			  search_tag:search_tag,
			  category:category}
			  
	let res=await axios.post('/users/getCreaterUserList',data)

	// console.log('res',res.data)

	 if(res.data.status){
		 setNft(res.data.data)
	 }
	
}

useEffect(()=>{
    console.log("category",category)
	getData(currentPage,60,tier,meta,category)

},[nft,category,meta])



const handleSearch=async(e)=>{
	let value=e.target.value;

	if(value){
		setMeta(value);
	}
}


//console.log("nftfff",nft[1].name)

	return(<>
		 <section className="team-sec-new">
	        <Container>
	          <Row className="align-items-top">
	            <Col className="" >
	                <div className="outer-heading-line">
	                	 <Row className="justify-content-between">
	                       <Col md={6} sm={6} xs={12}>
	                          <h3 className="main-heading-inner mb-0"><a href=""><img src={"images/right-arrow.png"} /></a>Models</h3>
	                       </Col>
	                        <Col md={4} sm={6} xs={12}>
	                          <div className="newsletter-box m-0">
				               	   <InputGroup className="m-0">
								  <FormControl
								      placeholder="Search....."
								      aria-label="Recipient's username"
								      aria-describedby="basic-addon2"
									  onKeyUp={(e)=>handleSearch(e)}
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
	           
			   <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
				  <div>
				 
					   <Row className="justify-content-center">

					{nft.length>0?
						   <Col xl={12} lg={12} md={6} sm={12} xs={12}>
						   <div class="outer-explor-box artist-list-box">
							 <div className="img-box-artist">
							 <img className="img-main"  src={nft[1].image} />

							   <div className="insta-link">
								   <a className="link-main" href={nft[1].instagram} target={'_blank'}><i className="fa fa-instagram" ></i></a>
							   </div>
							 </div>
								
								 <div className="exploror-list-box">
									  <div className="price-line">
										  <h5>{nft[1]&&nft[1].name}<span>{nft[1].quantity}</span> </h5>
										 
									  </div>
									 
									 <p>

									 Tall (5'9"), buxom, and shapely blonde bombshell Khloe Terae was born on May 7, 1993 in Toronto, Ontario, Canada. Her mother was a Versace model. Of Italian descent, Terae started modeling at age three and worked at the Playboy Club in Cancun at age eighteen. Moreover, Khloe was an international Playmate in such countries as Greece, Romania, South Africa, and Venezuela: She not only was the February, 2013 Playmate of the Month in the Mexican edition of Playboy and the June, 2013 Playmate of the Month in the South African edition of Playboy, but also was South Africa's Playmate of the Year for 2014. Terae did her first nude shoot for Playboy Plus in November, 2013. Khloe was voted Playboy's Cybergirl of the Month for January, 2014 and the Cybergirl of the Year for 2015.
									 </p>
								 </div>
						   </div>
						</Col>

	                    :""}		
						   
				  
					 </Row>
				  </div>
			   </Col>
			 </Row>



	          <Row className="align-items-top">
	           
	            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
	               <div>
	              
	               	 <Row className="justify-content-center">

					    {nft.length>0?
						 nft.map((item,index)=>

							<Col className={index=="1"?'d-none':''} xl={3} lg={4} md={6} sm={6} xs={12}>
							<div class="outer-explor-box artist-list-box">
							  <div className="img-box-artist">
							  <img className="img-main"  src={item.image} />

								<div className="insta-link">
									<a className="link-main" href={item.instagram} target={'_blank'}><i className="fa fa-instagram" ></i></a>
								</div>
							  </div>
								 
								  <div className="exploror-list-box">
									   <div className="price-line">
										   <h5>{item.name}<span>{item.quantity}</span> </h5>
										  
									   </div>
									  
									  
								  </div>
							</div>
						 </Col>

						 ) 
						 :""}		
	               	 	
		           
		              </Row>
	               </div>
	            </Col>
	          </Row>
	        </Container>
	       
	      </section>
		</>)

}

export default Artist;