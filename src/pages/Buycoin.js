import { Row, Col, Container, Accordion, Dropdown,Form,FormControl,Button, InputGroup, ToastHeader, } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from'axios'
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {BNBBalance} from '../helpers/BNBHelper';

import { BuyTaboo,TabooPrice } from "../helpers/BuyCoin";

import Slider from "react-slick";


const BuyCoin=()=>{

  const { isAuthenticated, walletAddress,balance ,tier} = useSelector((state) => state.auth);

 const[bnbBalance,setBnbBalance]=useState(0);
  const [bnbAmount,setBNBAmount]=useState(0)

  const [tabooAmount,setTabooAmount]=useState(0)

  const [isLoading,setIsloading]=useState(false);


    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
      responsive: [
        {
          breakpoint: 320,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 2, slidesToScroll: 1, infinite: false }
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3, slidesToScroll: 1, infinite: false }
        }
      ]
  };



  const getBNBBalance=async(address)=>{
       //let res=await axios.post('https://api.taboo.io/balance',{address:walletAddress});
      let balance=await BNBBalance(address);

      console.log('balance',balance)

       setBnbBalance(balance)
  }
  


  useEffect(async()=>{
    
    if(isAuthenticated){


     await getBNBBalance(walletAddress);
      

    }

   
    
  },[walletAddress])



   const handleToken=async(value)=>{

   // let currency="bnb";

       

    //let res= await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=taboo-token&vs_currencies=${currency}&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true%27`)
    
   // console.log("res",res);
    // const price=res.data['taboo-token']['bnb'];

    //  console.log("price",price);

    // let taboo= (1/price)*value;

    let taboo=await TabooPrice(value)

     taboo=taboo.toFixed(0)

     console.log('taboo',taboo)
     taboo=taboo/1000000000;

     taboo=taboo.toFixed(0)
     setTabooAmount(taboo)

   }
   
   const handleBNB=async(e)=>{
     let value=e.target.value;
     

     if(isAuthenticated){
          
      if(isNaN(value)){
        e.target.value=0;
      }else
        {

          if(bnbBalance<value){


            e.target.value=0;

            toast.warn("You do not have sufficient BNB.")

          }else
            {
              

              setBNBAmount(value);

              handleToken(value)

            }
          
        }
     }else
       {
        toast.warn("Please connect wallet!")
       }
   }




   const handleBuyCoin=async()=>{

      
        if(isAuthenticated){
            


          if(bnbAmount>0&&tabooAmount>0){

            setIsloading(true);
 
             let hash=await BuyTaboo(bnbAmount,tabooAmount)
 
            if(hash){


              setIsloading(false);

              getBNBBalance(walletAddress)
 
              toast.success("Transaction submitted successfully!")

            }else
              {
                setIsloading(false);

                toast.warn("Something went wrong. please check with other amount")
              }
 
         }else
           {
             toast.warn("Please enter amount first!.")
           }

        }else
          {
            toast.warn("please connect wallet!")
          }

       
              
   }




    return(<>

    
    <section className="profile-upper-banner">
          <Container fluid className="p-0">
              <Row>
                <Col>
                  <div className="profile-banner">
                         <img className="img-fluid m-0"  src={"images/Team/team6.png"} />
                     </div>
                </Col>
             </Row>
          </Container>
            <Container>
              
               <Row>
                   <Col lg={10} className="m-auto">
                       <div class="buy-coin-box-outer">
                        <Row className="align-items-top">
                           
                                <Col
                                
                                xl={8}
                                lg={8}
                                md={8}
                                sm={12}
                                xs={12}
                                className="m-auto"
                                >
                                <div class="buy-coin-shadow-box">
                                    <label>
                                        <div className="flex-box-bnb">
                                            <img className="profile-main-img"  src={"images/bnb1.png"} /> 
                                            <Form.Select aria-label="Default select example">
                                              <option>BNB</option>
                                              <option value="1">ETH</option>
                                              <option value="2">Tether</option>
                                              <option value="3">USD</option>
                                            </Form.Select>
                                        </div>
                                        <small className="">Current Balance {bnbBalance&&bnbBalance}</small>
                                    </label>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                        placeholder="" onKeyUp={(e)=>handleBNB(e)}
                                        />
                                        <InputGroup.Text id="basic-addon2"></InputGroup.Text>
                                    </InputGroup> 

                                   

                                   <div className="swap-icon">
                                   <img className="img-fluid m-0"  src={"images/arrow.png"} />
                                   </div>
                                    


                                    <label>
                                         <div>
                                            <img className="profile-main-img"  src={"images/bnb2.png"} /> Taboo
                                        </div>
                                        <small className="d-none">{balance&&balance}</small>
                                    </label>

                                    <InputGroup className="mb-3">
                                        <FormControl
                                        placeholder="" readOnly
                                        />
                                        <InputGroup.Text id="basic-addon2">{tabooAmount}</InputGroup.Text>
                                    </InputGroup> 
                                    <p className="tol-line d-none"><span>Slippage Tolerance</span><span>0.5%</span> </p>
                                    <div>
                                        <button  disabled={isLoading} onClick={handleBuyCoin} className="common-btn">{isLoading?"Please Wait":"Buy Now"}</button>
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
export default BuyCoin;