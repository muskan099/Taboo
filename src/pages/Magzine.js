import { Row, Col, Container, Button} from "react-bootstrap";


const Magzine=()=>{
    return(
        <>
         <section className="magzine-sec">
             <Container>
                <Row className="align-items-top">
                    <Col md={8} sm={8} xs={12} className="m-auto">
                       <div class="magazine-heading">
                           <h2>Fashion Magazine</h2>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                       </div>
                    </Col>
                </Row>
                 <Row className="align-items-top mt-3">
                    <Col lg={12} md={12} sm={12} xs={12}>
                       <div className="magzine-box-img">
                           
                       </div>
                    </Col>
                </Row>
            </Container>
        </section> 
        </>
    )
}

export default  Magzine;