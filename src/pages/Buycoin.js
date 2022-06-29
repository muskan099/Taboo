import { Row, Col, Container, Accordion, Dropdown,Form,FormControl,Button, InputGroup, ToastHeader, } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from'axios'
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {BNBBalance} from '../helpers/BNBHelper';
import { BuyTabooCoin ,BuyTabooCoinByOtherToken,TokenBalance} from "../helpers/BuyTaboo";
import { web3 } from "../helpers/Web3Helper";
import { BuyTaboo,TabooPrice, getBalance,BuyTabooByETH,BuyTabooByUSDT,BuyTabooByMatic,TabooPriceByMatic,
TabooPriceByUSDT,TabooPriceByEth } from "../helpers/BuyCoin";

import {ApproveETH} from '../helpers/ApproveETH'

import {Approve, ApproveUSDT} from "../helpers/ApproveUSDT";

import {ApproveMatic} from '../helpers/ApproveMatic'

import {Transaction} from '../helpers/Transaction'

import Slider from "react-slick";
import { BNBTOTAboo } from "../helpers/BNBTOTAboo";

const esymbol="https://taboonft.s3.us-east-2.amazonaws.com/icons/etho.png";

const bsymbol="https://taboonft.s3.us-east-2.amazonaws.com/icons/bnb.png"

const mSymbol="https://taboonft.s3.us-east-2.amazonaws.com/icons/matic.png";
const uSymbol="https://taboonft.s3.us-east-2.amazonaws.com/icons/usdt.webp";

const BuyCoin=()=>{

 const { isAuthenticated, walletAddress,balance ,tier} = useSelector((state) => state.auth);

 const[bnbBalance,setBnbBalance]=useState(0);
  const [bnbAmount,setBNBAmount]=useState(0)

  const [tabooAmount,setTabooAmount]=useState(0)

  const [isLoading,setIsloading]=useState(false);

  const [isLoadingBalance,setIsloadingBalance]=useState(false);

  const [currencyType,setCurrencyType]=useState("BNB");

  const [cryptoIcon,setCryptoIcon]=useState(bsymbol);

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
      

    console.log("currency Type2",currencyType);


          setIsloadingBalance(true);

       if(currencyType=="USDT"){

          let balance= await TokenBalance(walletAddress);

          console.log("other balance",balance);

          setBnbBalance(balance)

          setIsloadingBalance(false);

       }else
         {

          let res=await axios.post('https://api.taboo.io/balance',{address:walletAddress,currencyType:currencyType});

          let balance=res.data.balance//await BNBBalance(address);

           console.log('balance',balance)
  
           setBnbBalance(balance)

           setIsloadingBalance(false)

         }
        

     
  }
  


  useEffect(async()=>{
    
    if(isAuthenticated){


     await getBNBBalance(walletAddress);
      
     await  handleToken(bnbAmount)

    }

   
    
  },[walletAddress,currencyType,bnbBalance])



   const handleToken=async(value)=>{

   // let currency="bnb";

              if(currencyType=="BNB"||currencyType=="ETH"){

                  console.log("currency",currencyType)

                let res= await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=taboo-token&vs_currencies=${currencyType}&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true%27`)
                
                console.log("res",res);

                let price=0;
                  
                if(currencyType=="BNB"){
                    price= res.data['taboo-token'][`bnb`];
                }else if(currencyType=="ETH"){
                  price= res.data['taboo-token'][`eth`];
                }else if(currencyType=="Matic"){
                  price= res.data['taboo-token'][`matic`];
                }

                console.log("price",price);

                let taboo= (1/price)*value;

   
               setTabooAmount(taboo)

              }
              else
              {

                let  geko_ids="matic-network";

                if(currencyType=="USDT"){
                  geko_ids="tether";
                }else if(currencyType=="Matic"){
                  geko_ids="matic-network";
                }

                let res= await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${geko_ids}&vs_currencies=bnb`)
                
                console.log("res isd",res.data[`${geko_ids}`]['bnb']);

                let matic_bnb=res.data[`${geko_ids}`]['bnb'];

                let bnb_amount=matic_bnb*value;

                 let taboo=await BNBTOTAboo(bnb_amount)

                 setTabooAmount(taboo);
                 

              }

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

            toast.warn("You do not have sufficient "+currencyType+".")

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

              let hash=false;


              if(currencyType=="BNB"){

                // hash=await BuyTaboo(bnbAmount,tabooAmount)

                let web3js= await web3();

                let chainId=await web3js.eth.getChainId();
                console.log('chainId',chainId)
                 
                if(chainId==97){

                     
                let tx=await BuyTabooCoin(walletAddress,bnbAmount);

                hash=await Transaction({tx:tx})
                }else{
                    toast.warn("Please connect to Binance network!")
                }

              }else if(currencyType=="ETH"){

                 
                   
                  
                let web3js= await web3();

                let chainId=await web3js.eth.getChainId();
                console.log('chainId',chainId)
                 
                if(chainId==3){

                     
                let tx=await BuyTabooCoin(walletAddress,bnbAmount);

                hash=await Transaction({tx:tx})
                }else{
                    toast.warn("Please connect to Etherium network!")
                }







                /*try{

                  let usdt=await ApproveETH(bnbAmount,walletAddress);

                  let txObj={tx:usdt};

                  let trx=await Transaction(txObj);

                  hash=await BuyTabooByETH(bnbAmount,tabooAmount)

                }catch(e){console.log(e)
                     hash=false;
                }
                  */




                
              }else if(currencyType=="USDT"){
                 //alert("hello")

                  try{

                    let usdt=await BuyTabooCoinByOtherToken(walletAddress,bnbAmount);

                    let txObj={tx:usdt};

                    hash=await Transaction(txObj);

                   //hash=await BuyTabooByUSDT(bnbAmount,tabooAmount)

                  }catch(e){console.log(e)
                       hash=false;
                  }
              

                

              }else if(currencyType=="Matic"){


                      
                let web3js= await web3();

                let chainId=await web3js.eth.getChainId();
                console.log('chainId',chainId)
                 
                if(chainId==80001){

                     
                let tx=await BuyTabooCoin(walletAddress,bnbAmount);

                hash=await Transaction({tx:tx})
                }else{
                    toast.warn("Please connect to Polygon network!")
                }


                 


                // hash=await BuyTabooByMatic(bnbAmount,tabooAmount)

              }
 
            
 
            if(hash){

               console.log("babalALX",hash)
              setIsloading(false);

              getBNBBalance(walletAddress)

              let amount=tabooAmount.toFixed(0)

              let res=await axios.post("https://api.taboo.io/transfer-coin",{address:walletAddress,amount:amount,hash:hash.transactionHash});

 
              toast.success("Transaction submitted successfully!");


            }else
              {
                setIsloading(false);

                toast.warn("You do not have sufficient "+currencyType+". ")
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



   const handleCurrecy=async(e)=>{


      let value=e.target.value;


      setCurrencyType(value);


      console.log("currencyTyp",value)
      
      handleToken(bnbAmount)

     if(value=="BNB"){

        
          setCryptoIcon(bsymbol)

          getBNBBalance(walletAddress);

       // let balance=await BNBBalance(walletAddress);

       // setBnbBalance(balance);
      }else
       {


          if(value=="ETH"){
            setCryptoIcon(esymbol)
           }else if(value=="Matic"){
              setCryptoIcon(mSymbol);
           }else if(value=="USDT"){
              setCryptoIcon(uSymbol)
           }

         // let balance=await getBalance(walletAddress,value)

       //   setBnbBalance(balance); 

          getBNBBalance(walletAddress);

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
                                            <img className="profile-main-img"  src={cryptoIcon} /> 
                                            <Form.Select aria-label="Default select example" onChange={(e)=>handleCurrecy(e)}>
                                              


                                              <option value="BNB">BNB</option>
                                              <option value="ETH">ETH</option>
                                              <option value="Matic">Matic</option>
                                              <option value="USDT">USDT</option>
                                              
                                             {/* 
                                               
                                              
                                              
                                             
                                             */} 
                                              

                                                 

                                            </Form.Select>
                                        </div>
                                        <small className="">Current Balance {isLoadingBalance?"Loading":bnbBalance&&bnbBalance}</small>
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