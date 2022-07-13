import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Row, Col, Container, Tabs,Tab,Table, Modal, Button, Form} from "react-bootstrap";

const JoinUs=()=>{

  useEffect(async()=>{
    window.scrollTo(0, 0)
 },[])  

 const [data, setData] = useState("");

 const[loading,setLoading]=useState(false);


 const handleData = (e) => {
  // console.log(e.target.name,e.target.value)
  setData((prevState)=>{
    if(e.target.name==="isModel"){
      return{
        ...prevState,
        [e.target.name]:e.target.checked
      }
    }
    return{
      ...prevState,
      [e.target.name]:e.target.value
    }
  })
 }

 const handleSubmit = async () => {

  try {
    if(!data.name){
      toast.warn("Name is missing!");
      return;
    }
    if(!data.phone){
      toast.warn("Phone Number is missing!");
      return;
    }
    if(!data.email){
      toast.warn("Email is missing!");
      return;
    }
    if(!data.social_media){
      toast.warn("Social Media is missing!");
      return;
    }
    if(!data.message){
      toast.warn("Message is missing!");
      return;
    }

    const payload = {
      name:data.name,
      phone:data.phone,
      email:data.email,
      social_media:data.social_media,
      message:data.message,
      isModel:data.isModel??false
    }
    // console.log(payload)
    setLoading(true);
    const {status , message} = await axios.post("https://api.taboo.io/users/join-us",payload);
    
     if(status){
        setLoading(false);
        toast.success("Your request is submitted successfully!")
     }
  } catch (err) {
    setLoading(false);
    console.log(err)
    toast.error("Something went wrong. Try again!")
  }
 }

    return(<>
         <section className="join-box-sec">
             <Container fluid className="p-0">
               <Row className="align-items-top">
                <Col md={6} sm={6} xs={12}>
                    <Row className="align-items-top">
                        
                        <Col md={7} sm={7} xs={12} className="p-0 order-2">
                           <Row className="align-items-top m-0">
                                <Col md={6} sm={6} xs={12} className="p-0">
                                    <div class="join-box-heading">
                                        <h2>Join Us</h2>
                                    </div>
                                </Col>
                                <Col md={6} sm={6} xs={12} className="p-0">
                                   <div className="join-first-box">
                                       <img className="img-fluid m-0"  src={"images/Team/team7.png"} />
                                   </div>
                                </Col>
                            </Row>
                            <div className="join-first-box">
                                       <img className="img-fluid m-0"  src={"images/Team/team7.png"} />
                                   </div>
                        </Col>
                        <Col md={5} sm={5} xs={12} className="p-0">
                           <div className="join-first-box">
                               <img className="img-fluid"  src={"images/Team/team7.png"} />
                               <div className="text-first-box">
                                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                               </div>
                           </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} sm={6} xs={12}>
                     <div class="form-join-us">
                         <Row className="align-items-top">
                            <Col  md={{ span: 2, offset: 1 }}>
                               <div>
                                   <h3 className="main-heading-inner mb-0"><a href=""><img src={"images/right-arrow.png"} /></a></h3>
                               </div>
                            </Col>
                            <Col md={6} sm={6} xs={12}>
                                <div>
                                   <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" required name="name" onChange={(e)=>handleData(e)} placeholder="" />
                                  </Form.Group>
                                  <Form.Group className="mb-3">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" name="phone" onChange={(e)=>handleData(e)} placeholder="" />
                                  </Form.Group>
                                  <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" onChange={(e)=>handleData(e)} placeholder="" />
                                  </Form.Group>
                                  <Form.Group className="mb-3">
                                    <Form.Label>Social Media</Form.Label>
                                    <Form.Control type="text" name="social_media" onChange={(e)=>handleData(e)} placeholder="" />
                                  </Form.Group>
                                  <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" name="message" onChange={(e)=>handleData(e)} rows={2} />
                                  </Form.Group>
                                  <Form.Group className="mb-3">
                                    <div className="checkbox">
                                      <label>
                                        <input type="checkbox" name="isModel" onChange={(e)=>handleData(e)} value=""></input>
                                        <span className="cr"><i className="cr-icon fa fa-check"></i></span>
                                       I AM A MODEL
                                      </label>
                                    </div>
                                  </Form.Group>
                                  <div>
                                      <Button onClick={()=>handleSubmit()} className="blue-btn"disabled={loading}>
                                         {loading?"Please wait":"Send Message"} 
                                      </Button>
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
export default JoinUs;