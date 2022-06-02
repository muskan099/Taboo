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
	console.log('hh')
	let data={tier:tier,
              page:page,
			  limit:limit,
			  search_tag:search_tag,
			  category:category}
			  
	let res=await axios.post('/users/getCreaterUserList',data)

	console.log('res',res.data)

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


	return(<>
		 <section className="team-sec-new">
	        <Container>
	          <Row className="align-items-top">
	            <Col className="" >
	                <div className="outer-heading-line">
	                	 <Row className="justify-content-between">
	                       <Col md={6} sm={6} xs={12}>
	                          <h3 className="main-heading-inner mb-0"><a href=""><img src={"images/right-arrow.png"} /></a> Artist</h3>
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
						 nft.map((item)=>

							<Col xl={3} lg={4} md={6} sm={6} xs={12}>
							<div class="outer-explor-box artist-list-box">
								<Link to="#">
								<img className="img-main"  src={item.image} />
								</Link>
								 
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