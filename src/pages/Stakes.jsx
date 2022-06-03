import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Row, Col, Container, Spinner,Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
//import axios from "../http/axios/axios_main";
import { toast } from "react-toastify";
const Stakes = () => {
  const { walletAddress } = useSelector((state) => state.auth);
  const [stakesData, setStakesData] = useState(null);
  const [loading, setLoading] = useState(false);

  const [processing,setProcessing]=useState(false)

  const [showModal, setShowModal] = useState(false);
  const [ageError, setAgeError] = useState(false);

  const[marketData,setMarketData]=useState(false)

  const handleAbove18 = () => {
    setShowModal(false);
    localStorage.setItem("below-18", false);
  };

  const handleWithdraw=async(data)=>{
      //console.log("helloS",data)
      let stake_id=data._id;
      
      if(stake_id){
        //console.log("stake id",stake_id)

        setLoading(true);


        let res=await axios.post('https://blockchain.taboo.io/transfer-token',{stake_id:stake_id})

        console.log("res",res)
        if(res.data.status){

          setLoading(false);

          getData();
          toast.success("Withdraw request submitted successfully!")
        }else
          {
            setLoading(false);
            toast.warn("Something went wrong")
          }
      }

  }

  async function getData() {
    setLoading(true);
    const res = await axios.post("https://api.taboo.io/stakes", { address: walletAddress });
    if (res.status === 200) {
      setStakesData(res.data);
    }
    setLoading(false);
  }

  useEffect(() => {
    
    getData();
  }, []);

  console.log(stakesData);
  return (
    <div>
      <div className="padding-strip"></div>
      <section className="section-stakes-table">
        <button onClick={()=>setShowModal(true)}>Dummy Button</button>
        <Container>
          <Row>
            <Col>
              <div className="profile-img-stakes">
                <img src={"images/full-View.png"} alt="profile IMG" />
                <p>{walletAddress}</p>
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
                        <th width="30%">Wallet Address</th>
                        <th width="15%">Amount</th>
                        <th width="15%">Total Interest Earn</th>
                        <th width="15%">Total Amount</th>
                        <th width="10%">Status</th>
                        <th width="15%">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stakesData.stakes.map((item) => (
                        <tr key={item._id}>
                          <td width="30%">

                          {`${item.wallet_address?.slice(0, 5)}....${item.wallet_address?.slice(
                    -5
                  )}`}
                            
                           </td>
                          <td width="15%">{item.stakeinfo.deposit}</td>
                          <td width="15%">
                            {Number(item.stakeinfo.interest_earned).toFixed(4)}
                          </td>
                          <td width="15%">
                            {Number(
                              item.stakeinfo.current_coin_balance
                            ).toFixed(4)}
                          </td>
                          <td width="10%">
                            <span className={`active-status`}>
                              {/*`${item.stakeinfo.status[0].toUpperCase()}${item.stakeinfo.status.slice(
                              1
                            )}`*/}
                              Active
                            </span>
                          </td>
                          <td width="15%">
                            <button  onClick={()=>handleWithdraw(item)}
                              className="common-btn white-btn withdrow-btn"
                              disabled={item.stakeinfo.status=="closed"||processing?true:false}
                            >
                              { 
                                   item.stakeinfo.status=="closed"?'Closed':' Withdraw'
                                
                             }
                              
                            </button>

                          </td>
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
                <div className="outer-div">Are You sure you want to withdraw you stake amount.</div>
                <button onClick={() => setAgeError(true)}>Submit</button>
                <button onClick={handleAbove18}>Cancel</button>
              </>
            ) : (
              <div className="outer-div mb-0">
                <h3>Successfully withdraw...!!!</h3>
                
              </div>
            )}
          </Modal.Body>
        </Modal>
    </div>
  );
};

export default Stakes;
