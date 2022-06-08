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
                            <Col  xl={8} lg={8} md={8} sm={12} xs={12}>
                                    <div class="buy-coin-shadow-box ">
                                        <div className="swap-row-new">
                                            <label><img className="profile-main-img"  src={"images/Team/team7.png"} /> BNB</label>
                                            <label><img className="profile-main-img"  src={"images/Team/team7.png"} /></label>
                                            <label><img className="profile-main-img"  src={"images/Team/team7.png"} /> BNB</label>
                                        </div>
                                        <div className="taboo-price-row">
                                            <div className="price-persent">
                                                <span>65.54</span>
                                                <small>BNB/TABOO -1.234(2.29%)</small>
                                            </div>
                                            <ul>
                                                <li className="active"> <a  href="">24 H</a></li>
                                                <li> <a href="">24 H</a></li>
                                                <li> <a href="">24 H</a></li>
                                                <li> <a href="">24 H</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                   
                                </Col>  
                                <Col
                                
                                xl={4}
                                lg={4}
                                md={4}
                                sm={12}
                                xs={12}
                                className=""
                                >
                                <div class="buy-coin-shadow-box">
                                    <label><img className="profile-main-img"  src={"images/Team/team7.png"} /> BNB</label>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                        placeholder=""
                                        />
                                        <InputGroup.Text id="basic-addon2">0.00</InputGroup.Text>
                                    </InputGroup> 

                                    <br />
                                    


                                    <label><img className="profile-main-img"  src={"images/Team/team7.png"} /> BNB</label>

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