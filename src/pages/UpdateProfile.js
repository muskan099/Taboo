import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Container,
 Form,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { axios } from "../http";

const CreateNft = () => {
  const dispatch = useDispatch();

  /* const {
       nft,
      } = useSelector((state) => state.nft); */

  const navigate = useNavigate();

  const { nft, isLoading } = useSelector((state) => state.nft);
const[sendOtp,setSendOtp] = useState(false)
const[otp,setOtp] = useState()
  const { isAuthenticated, walletAddress, balance, tier } = useSelector(
    (state) => state.auth
  );

  const [name, setName] = useState("");

  
  const [createStart, setCreateStart] = useState(false);
const[email,setEmail] = useState("")


  
  const handleName = (e) => {
    let value = e.target.value;

    if (value) {
      setName(value);
    }
  };

  const handleEmail = (e) => {
    let value = e.target.value;

    if (value) {
      setEmail(value);
    }
  };
  const handleOtp = (e) => {
    let value = e.target.value;

    if (value) {
      setOtp(value)
    }
  };

 
  const handleSubmit = async (e) => {
   const pattern = /^[A-Za-z]+$/;
    const space = /^[a-zA-Z\s]*$/;
 let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
   

    if (name === "") {
      toast.error("Name is required!");
    } else if (!pattern.test(name) && pattern.test(space)) {
      toast.error("Name can only be alphabets");
    } else if (!email) {
        toast.error("please enter  email");
      } else if (!regex.test(email)) {
        toast.error("Please enter Valid Email ");
      } else {
      setCreateStart(true);

      handleSendOtp();
     
     
    if(otp){

      const res = await axios.post('/profileUpdate',{
        name:name,
        email:email,
        address:walletAddress
      })
            toast.success("Nft created successfully!");
      
            setCreateStart(false);
      
            setTimeout(navigate("/explore"), 120000);
    }
    }
  };
  const handleSendOtp = async(e) => {
    const res = await axios.post('/sendOTP',{
      email:email,
      address:"0x4C8bD57F6c6619B92e378037c8F225348f39F628"
     })
     setSendOtp(true)
     toast.success("OTP has been sent successfully to your email address")
  }
const handleVerify = async(e) => {

  const res = await axios.post('/VerifyOtpByAddress',{
    email:email,
    otp:otp,
    address:"0x4C8bD57F6c6619B92e378037c8F225348f39F628"
   })
   toast.success("OTP Verifed")
   const res1 = await axios.post('/profileUpdate',{
    name:name,
    email:email,
    address:walletAddress,
    last_name:"kapoor"
  })
        toast.success("Nft created successfully!");
  
        setCreateStart(false);
  
        setTimeout(navigate("/explore"), 120000);

}
  return (
    <>
      <section className="crate-page-sec">
        <Container>
          <Row>
          <div className="profile-img-stakes">
                <img src={"images/full-View.png"} alt="profile IMG" />
                <p>{walletAddress}</p>

             
              </div>
            <Col className="justify-content-md-center padding-container">
              <h3 className="main-heading-inner ">
                <a href="">
                  <img src={"images/right-arrow.png"} />
                </a>{" "}
               {sendOtp?"Verify Otp":"Update Profile" }
              </h3>
              <div>
                <Row>
                  <Col md={8} sm={8} xs={12}>
                    <div className="outer-create-form">
                    
                     {sendOtp?    <Form.Group className="mb-4">
<Form.Control
  type="text"
  onKeyUp={(e) => handleOtp(e)}
  placeholder="Enter Otp"
/>
</Form.Group>
                     
                :   
                <><Form.Group className="mb-4">
                        <Form.Control
                          type="text"
                          onKeyUp={(e) => handleName(e)}
                          placeholder="Your Name"
                        />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Control
                          type="text"
                          onKeyUp={(e) => handleEmail(e)}
                          placeholder="Your Email Address"
                        />
                      </Form.Group>
                      </>

                
               




}
                   
                     
                     

                    
                      

                      <div className="align-center-button">
                        {sendOtp?  <button
                          className="blue-btn width-btn"
                         
                          onClick={(e) => handleVerify(e)}
                        >
                             Verify
                     
                        </button> :  <button
                          className="blue-btn width-btn"
                         
                          onClick={(e) => handleSubmit(e)}
                        >
                             Update Profile
                        
                        
                        </button>}
                       
                      </div>
                    </div>
                  </Col>
                  <Col md={4} sm={4} xs={12}>
                   
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CreateNft;