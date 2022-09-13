import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Row, Col, Container, Spinner,Modal,Form,FormControl,Button, InputGroup, } from "react-bootstrap";
//import axios from "../http/axios/axios_main";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import { TabooBalance } from "../helpers/TabooHelper";
import { TabooPunk } from "../helpers/TabooPunk";
import { loginSaga, logout } from "../store/reducers/authReducer";
import { Transaction } from "../helpers/Transaction";
import calculateDays from "../helpers/CalculateDays";

const Stakes = () => {
  const { walletAddress } = useSelector((state) => state.auth);
  const [stakesData, setStakesData] = useState(null);
  const [loading, setLoading] = useState(false);

  const [withdrawData,setWithdrawData]=useState(false)

  const [processing,setProcessing]=useState(false)

  const [showModal, setShowModal] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const { isAuthenticated,balance ,tier} = useSelector((state) => state.auth);
  const[marketData,setMarketData]=useState(false)
const[reStake,setReStake] = useState(false)
const[reStakeData,setReStakeData] = useState(false)
console.log({reStake})
  const handleAbove18 = () => {
    setShowModal(false);
    localStorage.setItem("below-18", false);
  };
  const handleClose = () => {
console.log("close button")
    setReStake(false);
  }

  const handleWithdrawRequest=(data)=>{

    setWithdrawData(data)
    setShowModal(true)

  }

  const startWithdraw=async()=>{ //alert("Hello")
      
       await handleWithdraw(withdrawData);
        
  }
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

  let today=new Date();
  today=new Date(today);

  const end_date=moment(today,"YYYY-MM-DD HH:mm:ss",true).format()
 const handleSubmit=async()=>{
   let currentBalance = parseFloat(reStakeData.current_coin_balance)
   let taboo_balance=parseFloat(balance)
   const amount1 = tabooToken-currentBalance;
    if(tabooToken==""){
          toast.warn("Please enter amount to stake!")
    }
    else if(tabooToken<currentBalance){
      toast.warn("Stake cannot be less than currentBalance ")
    }else if(taboo_balance<amount1){
      toast.warn("You do not have sufficient fund to stake!")
    }else
      {
         setIsStart(true)

         await handleBalance(walletAddress);

        
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

      
         let res = true;
         let hash = true;
         let stakeId = reStakeData._id
console.log({reStakeData})
         if(tabooToken>currentBalance){
           const amount = tabooToken-currentBalance;

            res=await axios.post('https://test.taboo.io/make-stake',{
  
                                address:walletAddress,
                                taboo_amount:amount,
                                
                
                        });
               if(res.data.status){

                   hash=await Transaction(res.data)
                    }
         }

           console.log('token',res)           

            if(res){
              

               if(hash){

                   const res=await axios.post('https://test.taboo.io/create-restake',{
                     address:walletAddress,
                     amount:tabooToken,
                     date:end_date,
                     hash:hash,
                     rate:rate,
                     stake_id:stakeId
                   })



                  setIsStart(false)

                  toast.success("Token staked successfully!")
                  setReStake(false)

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
  const handleWithdraw=async(data)=>{
      //console.log("helloS",data)
      let stake_id=data._id;

     let current_balance=data.current_coin_balance;
      
    // toast.warn("unstaking under maintenance for 24 hours");
      
       if(stake_id){
        //console.log("stake id",stake_id)
        
        setLoading(true);

        current_balance=parseFloat(current_balance);

        if(current_balance>=2000000 && data.deleted==0){

          toast.warn("Hi, since the amount you are trying to withdraw is more than 2 million Taboos, due to security reasons, we need to verify your withdrawal claim. Please send us an email at support@taboo.io with a withdrawal request and we will whitelist this wallet for withdrawal within 24 hours.")
          
          
        }else
          {

              setShowModal(false)
              let res=await axios.post('https://blockchain.taboo.io/transfer-token',{stake_id:stake_id})
            
              console.log("res",res)
              if(res.data.status){
                setWithdrawData(false)

                setLoading(false);

                getData();
                toast.success("Withdraw request submitted successfully!")
              }else
                {
                  setWithdrawData(false)

                  setLoading(false);

                  current_balance=parseFloat(current_balance);

                    if(current_balance>=2000000){

                      toast.warn("Hi, since the amount you are trying to withdraw is more than 2 million Taboos, due to security reasons, we need to verify your withdrawal claim. Please send us an email at support@taboo.io with a withdrawal request and we will whitelist this wallet for withdrawal within 24 hours.")

                      
                    }else
                      {
                        toast.warn("Something went wrong")

                      }
                      
                }

       }  
      }
      
  }

  async function getData() {
    setLoading(true);
    const res = await axios.post("https://test.taboo.io/stakes", { address: walletAddress});
    if (res.status === 200) {
      setStakesData(res.data);
    }
    setLoading(false);
  }
const handleReStake = (data) => {
  setReStake(true);
  setReStakeData(data);
  let currentBalance = parseFloat(data.current_coin_balance)
  setTabooToken(currentBalance);

}
console.log(reStakeData)
  useEffect(() => {
    //toast.warn("Hi, since the amount you are trying to withdraw is more than 5 million Taboos, due to security reasons, we need to verify your withdrawal claim. Please send us an email at support@taboo.io with a withdrawal request and we will whitelist this wallet for withdrawal within 24 hours.")

    getData();
  }, [walletAddress]);

  console.log(stakesData);
  return (
    <div>
      <div className="padding-strip"></div>
      <section className="section-stakes-table">
        {/* <button onClick={()=>setShowModal(true)}>Dummy Button</button>  */}
        <Container>
          <Row>
            <Col>
              <div className="profile-img-stakes">
                <img src={"images/full-View.png"} alt="profile IMG" />
                <p>{walletAddress}</p>

                <p>If no option chosen within 7 days the stake will recommit at the previous level</p>
              </div>
              {console.log(stakesData && stakesData?.stakes.length)}
              {loading && (
                <div className="text-center">
                  <Spinner animation="border" role="status" />
                </div>
              )}
              {!loading &&
                stakesData &&
                stakesData?.stakes.length === 0 &&
                "No Record Found"}
              {!loading && stakesData && stakesData?.stakes.length > 0 ? (
                <div className="table-responsive">
                  <Table
                    responsive
                    striped
                    hover
                    size="sm"
                    className="table-stakes"
                  >
                    <thead>
                      <tr>
                        <th width="15%">Wallet Address</th>
                        <th width="10%">Amount</th>
                        <th width="15%">Total Interest</th>
                        <th width="10%">Total Amount</th>
                        <th  width="8%">Start Date</th>
                        <th  width="8%">Lockup End</th>
                        <th width="10%">Status</th>
                        <th width="15%">Action</th>
                        <th width="10%">APY(%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stakesData.stakes.map((item) => (
                        
                        <tr key={item._id}>
                          <td width="15%">

                          {`${item.wallet_address?.slice(0, 5)}....${item.wallet_address?.slice(
                    -5
                  )}`}
                            
                           </td>
                          <td width="10%">{item.stakeinfo.deposit}</td>
                          <td width="10%">
                            {Number(item.stakeinfo.interest_earned).toFixed(4)}
                          </td>
                          <td width="10%">
                            {Number(
                              item.stakeinfo.current_coin_balance
                            ).toFixed(4)}
                          </td>

                          <td width="8%">{moment(item.stakeinfo.startdate).format("YYYY-MM-DD") }</td>
                          <td width="8%">{moment(item.stakeinfo.enddate).format("YYYY-MM-DD") }</td>

                          <td width="10%">
                            <span className={`active-status`}>
                              {/*`${item.stakeinfo.status[0].toUpperCase()}${item.stakeinfo.status.slice(
                              1
                            )}`*/}
                              Active
                            </span>
                          </td>
                          <td width="15%">
                            <button  onClick={()=>handleWithdrawRequest(item)}
                              className="common-btn white-btn withdrow-btn"
                              disabled={item.stakeinfo.status=="closed"||item.stakeinfo.status=="active"||processing?true:false}
                            >
                              { 
                                   item.stakeinfo.status=="closed"?'Closed':' Withdraw'
                                
                             }
                              
                            </button>
                            
                            { calculateDays(moment(item.stakeinfo.enddate).format("YYYY-MM-DD"),new Date()) > 0 && item.stakeinfo.status!=="closed"? <button  onClick={() => handleReStake(item.stakeinfo)}
                              className="common-btn white-btn withdrow-btn"
                              
                            >
                             ReStake
                            </button> : ""}
                            

                          </td>

                          <td width="10%">{item.stakeinfo.interest_rate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              ) : (
                <></>
              )}
            </Col>
          </Row>
        </Container>
      </section>
      <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="modal-comming-soon below-18-popup"
          backdrop="static"
          keyboard={false}
          show={showModal}
          onHide={handleAbove18}
        >
          <Modal.Header className="border-none p-0"></Modal.Header>
          <Modal.Body className="outer-age-box">
            {!ageError ? (
              <>
                <div className="outer-div">Are You sure you want to withdraw your stake amount.</div>
                <button onClick={() => startWithdraw()}>Submit</button>
                <button onClick={handleAbove18}>Cancel</button>
              </>
            ) : (
              <div className="outer-div mb-0">
                <h3>Successfully withdraw...!!!</h3>
                
              </div>
            )}
          </Modal.Body>
        </Modal>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="modal-comming-soon below-18-popup"
          backdrop="static"
          keyboard={false}
          show={reStake}
          onHide={handleClose}
        >
          <Modal.Header closeButton className="border-none p-0" ></Modal.Header>
          <Modal.Body className="outer-age-box">
           
          
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
                                                <Form.Control type="text" onChange={(e)=>handleToken(e)}  placeholder="0.00" value={tabooToken}/>
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
                                            <li>Minimum Lockup period is 3 months</li>
                                            <li>No Deposit or Withdrawal Fee</li>
                                        </ul>
                                    </div>
                                    </Col>
                           </Row>
                       

                       
                
          </Modal.Body>
        </Modal>
    </div>
  );
};

export default Stakes;
