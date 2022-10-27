import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment'
import { axios } from "../http";
import { Row, Col, Container, Accordion, Dropdown,Form,FormControl,Button, InputGroup, Tab, Tabs } from "react-bootstrap";
import { toast } from "react-toastify";
import { Transaction } from "../helpers/Transaction";
import { TabooBalance } from "../helpers/TabooHelper";
import { TabooPunk } from "../helpers/TabooPunk";
import { loginSaga, logout } from "../store/reducers/authReducer";
import { web3 } from "../helpers/Web3Helper";
import VerifyTransactions from "../helpers/VeriyTransaction";


const CreateStake=()=>{

  const { isAuthenticated, walletAddress,balance ,tier} = useSelector((state) => state.auth);

  const[tabooToken,setTabooToken]=useState('')

  const [stakeTime,setStakeTime]=useState(3)

  const [rate,setRate]=useState(12)

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const[isStart,setIsStart]=useState(false)

  const handleBalance = async (address) => {
    //let address = await Connect();

    let punk= await TabooPunk(address);
    // console.log("punks",punk)
    let tier=punk>0?"3 Tier":"1 Tier"
    let balance= await TabooBalance(address)
    console.log("balance",balance)

    if (address && address.length) {
      dispatch(loginSaga({ address: address,balance:balance,tabooPunk:punk,tier:tier}));
    }
  };




  useEffect(async()=>{

       if(isAuthenticated){
        await handleBalance(walletAddress);

       }else
         {
           navigate('/')
         }
  },[balance])


 
   const handleToken=(e)=>{
     let value=e.target.value;
     if(isNaN(value)){
       e.target.value="";
     }else
      {
        setTabooToken(value)
      }
   }



   const handleStakeTime=(e)=>{

         let value=e.target.value;

         if(value=="3"){
              setRate(12)
             setStakeTime(3)

          }else if(value=="6"){

              setRate(16)

               setStakeTime(6)

          }else if(value=="12"){

                  setRate(20)

                setStakeTime(12)

          }else
            {
              setRate(13);

              setStakeTime(3)
            }


   }

   

  const handleSubmit=async()=>{
    let taboo_balance=parseFloat(balance)
     if(tabooToken==""){
           toast.warn("Please enter amount to stake!")
     }
     else if(tabooToken<1000){
       toast.warn("Stake min 1000 taboo tokens")
     }else if(taboo_balance<tabooToken){
       toast.warn("You do not have sufficient fund to stake!")
     }else
       {
          setIsStart(true)

          await handleBalance(walletAddress);

          let today=new Date();
          let rate=12;

          if(stakeTime=="3"){

            today=today.setDate(today.getDate()+90);

          }else if(stakeTime=="6"){
             rate=16;
            today=today.setDate(today.getDate()+180);
          }else if(stakeTime=="12"){
              rate=20;
            today=today.setDate(today.getDate()+365);
          }

         // today=today.setDate(today.getDate()+90);

          today=new Date(today);

          const end_date=moment(today,"YYYY-MM-DD HH:mm:ss",true).format()
          
          const res=await axios.post('/make-stake',{

                               address:walletAddress,
                               taboo_amount:tabooToken
               
                       });
           
            console.log('token',res)           

             if(res.data.status){
               const hash=await Transaction(res.data)

                let txData=await VerifyTransactions(hash,tabooToken);

                if(txData.status){

                    const res=await axios.post('/create-stake',{
                      address:walletAddress,
                      amount:txData.taboo_amount,
                      date:end_date,
                      hash:hash,
                      rate:rate,
                      stakeTime
                    })



                   setIsStart(false)

                   toast.success("Token staked successfully!")

                  navigate('/stakes')

                }else{

                  setIsStart(false)
                  toast.error("Transaction Failed")
                }
             }else
              {
                setIsStart(false)
              }
       }
  }

    return(<>
          


          <section className="profile-upper-banner">
          <Container fluid className="p-0">
              <Row>
                <Col>
                  <div className="profile-banner">
                         <img className="img-fluid m-0"  src={"images/banner-buy.png"} />
                     </div>
                </Col>
             </Row>
          </Container>
            <Container>
              
              <Row className="align-items-top">
                <Col
                
                  xl={7}
                  lg={7}
                  md={12}
                  sm={12}
                  xs={12}
                  className="m-auto"
                >
                      <div className="stake-edit-left stack-edit stake-step-add">
                           <Row className="align-items-center">
                           <Col
                                    xl={5}
                                    lg={5}
                                    md={5}
                                    sm={12}
                                    xs={12}
                                    className=""
                                >
                                    <h4 className="mb-3">Stake Taboo</h4>
                                     
                                        <Form.Group className="mb-3">
                                                <Form.Label>Stake Amount</Form.Label>
                                                <Form.Control type="text" onKeyUp={(e)=>handleToken(e)}  placeholder="0.00" />
                                                </Form.Group>

                                                <Form.Group className="mb-3">

                                                <Form.Label>Select Duration</Form.Label>
                                                <div className="radio-check-time">
                                                <div class="radio">
                                                    <label>
                                                      <input
                                                        type="radio"
                                                        name="mint_type"
                                                        value="3"
                                                        checked={stakeTime==3?true:false}
                                                        onChange={(e)=>handleStakeTime(e)}
                                                      />
                                                      <span class="cr">
                                                        <i class="cr-icon fa fa-check"></i>
                                                      </span>
                                                      <div class="bsc-block">
                                                        <span>3 Month</span>
                                                      </div>
                                                    </label>
                                                  </div>
                                                  <div class="radio">
                                                    <label>
                                                      <input
                                                        type="radio"
                                                        name="mint_type"
                                                        value="6"
                                                        checked={stakeTime==6?true:false}
                                                        onChange={(e)=>handleStakeTime(e)}
                                                        
                                                      />
                                                      <span class="cr">
                                                        <i class="cr-icon fa fa-check"></i>
                                                      </span>
                                                      <div class="bsc-block">
                                                        <span>6 Month</span>
                                                      </div>
                                                    </label>
                                                  </div>
                                                  <div class="radio">
                                                    <label>
                                                      <input
                                                        type="radio"
                                                        name="mint_type"
                                                        value="12"
                                                        checked={stakeTime==12?true:false}
                                                        onChange={(e)=>handleStakeTime(e)}
                                                        
                                                      />
                                                      <span class="cr">
                                                        <i class="cr-icon fa fa-check"></i>
                                                      </span>
                                                      <div class="bsc-block">
                                                        <span>12 Month</span>
                                                      </div>
                                                    </label>
                                                  </div>
                                                </div>

                                                </Form.Group>


                                                <Form.Group className="mb-3">

                                                <Form.Label>Balance</Form.Label>
                                                <Form.Control type="text" placeholder="0.00" value={balance} readOnly/>
                                                
                                            </Form.Group>

                                          

                                            

                                            <div>
                                                <Button className="common-btn"onClick={handleSubmit} disabled={isStart}>{isStart?"Processing":"Stake Now"}</Button>
                                            </div>
                                    </Col>
                                    <Col
                                    xl={7}
                                    lg={7}
                                    md={7}
                                    sm={12}
                                    xs={12}
                                    className=""
                                >
                                    <div className="list-stake-step">
                                        <ul>
                                            <li>Stake in Taboo and Earn more</li>
                                            <li>APY is {rate}%</li>
                                            <li>Minimum Lockup period is {stakeTime} months</li>
                                            <li>No Deposit or Withdrawal Fee</li>
                                        </ul>
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

export default CreateStake;