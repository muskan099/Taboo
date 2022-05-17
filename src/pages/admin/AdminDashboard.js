import { Chart } from "react-google-charts";
import { Row, Col, Container, Tabs,Tab,Table, Modal, Button, Form} from "react-bootstrap";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AdminDashboard=()=>{
    const value = 0.10;  
    const data = [
        ["Month", "Sales"],
        ["Jan", 1000],
        ["Feb", 1170],
        ["Mar", 660],
        ["Apr", 1030],
        ["May", 1000],
        ["Jun", 1170],
        ["Jul", 660],
        ["Aug", 1030],
        ["Sept", 1170],
        ["Oct", 660],
        ["Nov", 1030],
        ["Dec", 1030]
      ];

      const options = {
        isStacked: true,
        legend: { position: "none" },
        curveType: 'function',
        height:250,
        colors: ['#871434'],
        vAxis: { minValue: 0 },
      };



    return(<>
        <section className="creater-dash-sec">
             <Container fluid className="p-0">
               <Row>
                <Col lg={1} md={12} sm={12} xs={12}>
                    <div className="sidemenu-creater">
                        <ul>
                            <li>
                                <img className="img-fluid m-0"  src={"images/plus.png"} />
                            </li>
                            <li>
                                <img className="img-fluid m-0"  src={"images/plus.png"} />
                            </li>
                            <li>
                                <img className="img-fluid m-0"  src={"images/plus.png"} />
                            </li>
                            <li>
                                <img className="img-fluid m-0"  src={"images/plus.png"} />
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col lg={8} md={12} sm={12} xs={12}>
                    <div className="top-collect-creater">
                    <h3 className="main-heading-inner mb-0"> Admin Dashboard</h3>
                     

                    <Row>
                       <Col>
                       <div className="shadow-graph-box prograss-box-admin">
                       <ul>
                               <li>
                               
                               <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />
                               <h3 className="main-heading-inner">Total NFT</h3>
                               </li>
                               <li>
                               
                               <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />
                               <h3 className="main-heading-inner">For Sale</h3>
                               </li>
                               <li>
                              
                               <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />
                               <h3 className="main-heading-inner">On Auction</h3>
                               </li>
                               <li>
                               
                               <CircularProgressbar value4={value} maxValue={1} text={`${value * 100}%`} />
                               <h3 className="main-heading-inner">Total Register Users</h3>
                               </li>
                               <li>
                               
                               <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />
                               <h3 className="main-heading-inner">Commision Earned</h3>
                               </li>
                           </ul>
                         </div>
                       </Col>
                    </Row>
                          
                    

                   

                     
                    </div>
                </Col>

                <Col lg={3} md={12} sm={12} xs={12} className="pr-0">
                <div className="profile-img-left-box">
                <h3 className="main-heading-inner mb-0 text-center"> My Profile</h3>
                     <img className="profile-main-img"  src={"images/Team/team7.png"} />
                     <h4>Cj Sparxx</h4>
                     <p>8b7b7078...978977b8b</p>
                     <hr/>


            

                    

                 </div>
                </Col>
               </Row>
             </Container>
        </section>
    </>)
}

export default AdminDashboard;