import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import axios from "../http/axios/axios_main";
import { userLoginSaga } from "../store/reducers/authReducer";
import {useSelector } from "react-redux";
import {
  Row,
  Col,
  Container,
 Form,
} from "react-bootstrap";

const Login = () => {
  const auth = useAuth();
  // console.log(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
 

  const[sendOtp,setSendOtp] = useState(false)
  const [loading,setLoading]=useState(false);
  const[otp,setOtp] = useState()
  const { isAuthenticated, walletAddress } = useSelector(
    (state) => state.auth
  );
  const [createStart, setCreateStart] = useState(false);
  const [name, setName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("")

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please provide all values");
      return;
    }
    handleSendOtp();
    if(otp){
let formData = {
  email,
  password
}
      dispatch(userLoginSaga({ formData, navigate }));
    }
    // try {
    //   const res = await axios.post("/users/login", formData);
    //   console.log(res);
    //   if (res.data?.user?.user_role === "admin") {
    //     navigate("/admin-dashboard");
    //   }
    // } catch (error) {}
  };
  const handleSendOtp = async(e) => {
    setLoading(true)

    const res = await axios.post('/sendOTP',{
      email:email,
      address:walletAddress
     })
     setSendOtp(true)

     setLoading(false)

     toast.success("OTP has been sent successfully to your email address")
  }
const handleVerify = async(e) => {
  setLoading(true);
  const res = await axios.post('/VerifyOtpByAddress',{
    email:email,
    otp:otp,
    address:walletAddress
   })
  // toast.success("OTP Verifed")
  
    if(res.status){

    
            toast.success("OTP verified");
      
            setCreateStart(false);
            setLoading(false)
           
         
    }else
      {     setLoading(false)

        toast.error("Otp verification failed!");
      }

}
const handleOtp = (e) => {
  let value = e.target.value;

  if (value) {
    setOtp(value)
  }
};
const handleEmail = (e) => {
  let value = e.target.value;

  if (value) {
    setEmail(value);
  }
};
const handlePassword = (e) => {
  let value = e.target.value;

  if (value) {
    setPassword(value);
  }
};
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ minWidth: "800px" }}
      >
        <form
          onSubmit={submitHandler}
          style={{ width: "500px", marginTop: "150px", marginBottom: "150px" }}
        >
          <h3>Sign In</h3>
          {sendOtp?    <Form.Group className="mb-4">
<Form.Control
  type="text"
  onKeyUp={(e) => handleOtp(e)}
  placeholder="Enter Otp"
/>
</Form.Group>
                     
                :   
                <>  <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  onChange={(e) => handleEmail(e)}
                  value={email}
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  onChange={(e) => handlePassword(e)}
                  value={password}
                />
              </div>
              <div className="mb-3">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label className="custom-control-label" htmlFor="customCheck1">
                    Remember me
                  </label>
                </div>
              </div>
           
                      </>

                
               




}
<div className="align-center-button">
                        {sendOtp?  <button
                          className="blue-btn width-btn"
                          disabled={loading?true:false}
                          onClick={(e) => handleVerify(e)}
                        >
                            {loading?"Processing":" Verify"}
                     
                        </button> :  <button
                          className="blue-btn width-btn"
                          disabled={loading?true:false}

                          onClick={submitHandler}
                        >
                           {loading?"Processing":"Submit"} 
                        
                        
                        </button>}
                       
                      </div>                
                     
        
          <p>
            Not Registered <Link to="/signup">Signup</Link>
          </p>
          {/* <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p> */}
        </form>
      </div>
    </>
  );
};

export default Login;
