import { Row, Col, Container, Accordion, Dropdown,Form,FormControl,Button, InputGroup, } from "react-bootstrap";
import React from "react";
import Slider from "react-slick";


const Profile=()=>{
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
                                        <div>
                                            <img className="profile-main-img"  src={"images/bnb1.png"} /> BNB
                                        </div>
                                        <small>0.00</small>
                                    </label>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                        placeholder=""
                                        />
                                        <InputGroup.Text id="basic-addon2">0.00</InputGroup.Text>
                                    </InputGroup> 

                                   

                                   <div className="swap-icon">
                                   <img className="img-fluid m-0"  src={"images/swap1.png"} />
                                   </div>
                                    


                                    <label>
                                         <div>
                                            <img className="profile-main-img"  src={"images/bnb2.png"} /> Taboo
                                        </div>
                                        <small>0.00</small>
                                    </label>

                                    <InputGroup className="mb-3">
                                        <FormControl
                                        placeholder=""
                                        />
                                        <InputGroup.Text id="basic-addon2">0.00</InputGroup.Text>
                                    </InputGroup> 
                                    <p className="tol-line"><span>Slippage Tolerance</span><span>0.5%</span> </p>
                                    <div>
                                        <a href="" className="common-btn">Buy Now</a>
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
export default Profile;