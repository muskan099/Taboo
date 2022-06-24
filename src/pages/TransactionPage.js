import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axios } from "../http";
import { Container,Row,Col, Button, Dropdown, Table,Modal,Form} from "react-bootstrap";
import { CreateReSale } from "../helpers/CreateResale";
import { toast } from "react-toastify";
const TransactionPage=()=>{ 

  const { isAuthenticated, walletAddress,tier } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);

  const[isLoading,setIsLoading]=useState(false)

  const[data,setData]=useState('');

  const[saleData,setSaleData]=useState('');

  const [minPrice, setMinPrice] = useState(0);

 const handleClose = () => {
  setShow(false);
};


 const getData=async()=>{

   let res=await axios.post('/user-nft',{address:walletAddress});
   console.log("data",res)
   setData(res.data)

 }

 const handleMinPrice = (e) => {
  let value = e.target.value;

  if (isNaN(value)) {
    e.target.value = "";
  } else {
    setMinPrice(value);
  }
};
 useEffect(async()=>{
    await getData();
 },[])


 const handleCreateSale=async(data)=>{
   console.log("data sale",data)

   setSaleData(data)


   setShow(true);


 }



 const submitSale=async()=>{

    console.log("sale Data",saleData)
  let price=parseFloat(saleData.contentinfo.price);

   if(minPrice>0){

                    setIsLoading(true);
              let tx=await CreateReSale(walletAddress,saleData.contentinfo.token_id,minPrice);

              if(tx){

                  let res=axios.post('/create-sale',{content_id:saleData.contentinfo._id,price:minPrice,forsale:"yes"});

                handleClose();

                setIsLoading(false);

                toast.success("Sale created successfully!")

              }else{
                 setIsLoading(false)
                  toast.warn("Something went wrong")
              }
      
   }else{
      toast.warn("Please enter price")
   }
    
 }


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
                                  <th>Action</th>
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
                                              <span class="success">success</span>
                                        </td>

                                        <td>
                                          <button disabled={item.contentinfo.forsale=="yes"?false:false} onClick={()=>handleCreateSale(item)}>Sale</button>
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


            <Modal
            show={show}
            className="modal-comming-soon bid-modal"
            backdrop="static"
            keyboard={false}
            onHide={handleClose}
            centered
          >
            <Modal.Header
              closeButton
              className="border-none p-0"
              style={{ zIndex: "10000000" }}
            ></Modal.Header>
            <Modal.Body>
              <div class="bid-modal-box">
                <h3>Create a Sale</h3>
                 
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Min Price</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="min price"
                      name="minPrice"
                      onChange={(e)=>handleMinPrice(e)}
                      value={minPrice}
                    />
                  </Form.Group>

                 
                </Form>

                <div>
                  <a href="#"
                    className="blue-btn"
                    onClick={() => {
                      if (!isLoading) {
                        submitSale();
                      }
                    }}
                    disabled={isLoading}
                    style={{ cursor: isLoading ? "no-drop" : "pointer" }}
                  >
                   {isLoading?"Processing":"Submit"}
                  </a>

                  <a href="" className="border-btn">
                    Cancel
                  </a>
                </div>
              </div>
            </Modal.Body>
          </Modal>


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
