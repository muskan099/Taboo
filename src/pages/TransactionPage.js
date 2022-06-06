import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axios } from "../http";
import { Container,Row,Col, Button, Dropdown, Table } from "react-bootstrap";


const TransactionPage=()=>{ 

  const { isAuthenticated, walletAddress,tier } = useSelector((state) => state.auth);

 const[data,setData]=useState('');

 const getData=async()=>{

   let res=await axios.post('/user-nft',{address:walletAddress});
   console.log("data",res)
   setData(res.data)

 }


 useEffect(async()=>{
    await getData();
 },[])


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
                <p>{walletAddress}</p>
              </div>
                     
                       <div>
                            <Table className="table-tank" responsive>
                              <thead>
                                <tr>
                                   <th>S.No</th>
                                   <th>Image</th>
                                   <th>Wallet Address</th>
                                  <th>Trasaction Hash</th>
                                  <th className="">Token</th>
                                  <th className="d-none">Ipfs Link</th>
                                  <th>Status</th>
                                  
                                </tr>
                              </thead>
                              <tbody>
                                
                                {data&& data.map((item,index)=>


                                        <tr>
                                        <td>{index+1}</td>
                                        <td>
                                        <div class="icon-img">
                                              <img src={"https://taboonft.s3.us-east-2.amazonaws.com/images/"+item.contentinfo.image} />
                                              
                                            </div>
                                        </td>
                                        <td>
                                        <a href={"https://www.bscscan.com/address/"+item.user_wallet_address} target={'_blank'}>

                                          {`${item.user_wallet_address?.slice(0, 3)}...${item.user_wallet_address?.slice(
                    -8
                  )}`} </a>
                                        </td>
                                        <td>

                                        <a href={"https://www.bscscan.com/tx/"+item.trans_id} target={'_blank'}>
                                          {}

                                          
                                          {`${item.trans_id?.slice(0, 3)}...${item.trans_id?.slice(
                    -8
                  )}`}                </a>
                                        </td>
                                        <td className="">
                                           {item.contentinfo.token_id}
                                          
                                        </td>
                                        <td className="d-none"><a href={item.contentinfo.ipfs} target="_blank"> 
                                        {`${item.contentinfo.ipfs?.slice(0, 3)}...${item.contentinfo.ipfs?.slice(
                    -8
                  )}`}</a></td>
                                        <td>
                                              <span class="success">{item.status}</span>
                                        </td>

                                        </tr>


                                   
                               ) }
                                
                               


                               
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
     {/* <section className="section-stakes-table">
        <Container>
          <Row>
            <Col>
            
              
                "No Data Found"
            
            </Col>
          </Row>
        </Container>
                                        </section> */}
    </div>
    
         </>)

}
export default TransactionPage;
