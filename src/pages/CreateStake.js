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


const CreateStake=()=>{

  const { isAuthenticated, walletAddress,balance ,tier} = useSelector((state) => state.auth);

  const[tabooToken,setTabooToken]=useState('')

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

          today=today.setDate(today.getDate()+90);

          today=new Date(today);

          const end_date=moment(today,"YYYY-MM-DD HH:mm:ss",true).format()
          
          const res=await axios.post('/make-stake',{

                               address:walletAddress,
                               taboo_amount:tabooToken
               
                       });
           
            console.log('token',res)           

             if(res.data.status){
               const hash=await Transaction(res.data)

                if(hash){

                    const res=await axios.post('/create-stake',{
                      address:walletAddress,
                      amount:tabooToken,
                      date:end_date,
                      hash:hash
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
                                                        value="lazy"
                                                        checked
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
                                                        value="lazy"
                                                        
                                                      />
                                                      <span class="cr">
                                                        <i class="cr-icon fa fa-check"></i>
                                                      </span>
                                                      <div class="bsc-block">
                                                        <span>6 month</span>
                                                      </div>
                                                    </label>
                                                  </div>
                                                  <div class="radio">
                                                    <label>
                                                      <input
                                                        type="radio"
                                                        name="mint_type"
                                                        value="lazy"
                                                        
                                                      />
                                                      <span class="cr">
                                                        <i class="cr-icon fa fa-check"></i>
                                                      </span>
                                                      <div class="bsc-block">
                                                        <span>12 month</span>
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
                                            <li>APY is 16%</li>
                                            <li>Minimum Lockup period is 3 months</li>
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