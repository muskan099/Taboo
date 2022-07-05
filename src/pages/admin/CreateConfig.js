import axios from 'axios'
import { useState } from 'react';
import { Row, Col, Container, Tabs,Tab,Table, Modal, FormControl,Button, InputGroup, Form, Dropdown, FormGroup,} from "react-bootstrap";
import { toast } from "react-toastify";



const CreateConfig=()=>{

const[type,setType]=useState('swap');

const[address,setAddress]=useState('');

const[loading,setLoading]=useState(false)


const handleType=(e)=>{
    let value=e.target.value;
    
    console.log("value",value)

    if(value){

        setType(value);


    }
   
}


const handleAddress=(e)=>{

    let value=e.target.value;

    console.log("value",value)

     if(value){
        setAddress(value)
     }

}


const handleSubmit=async()=>{

     if(address==''){
        toast.warn("Please enter wallet address")
     }else
       {

        try{

            setLoading(true)

            let res=await axios.post("https://blockchain.taboo.io/config",{type:type,address:address});

            console.log("res",res)

             if(res.data.Status){
                setLoading(false)
                toast.success("Updated successfully!")

                

             }else
               {
                setLoading(false)
                toast.warn("Something went wrong.Please check file!")
               }

           

        }catch(e){


            setLoading(false)
            toast.warn("Something went wrong")
        }

       }

}


    return(<>
     <section className="creater-dash-sec">
             <Container fluid className="p-0">
               <Row>
                <Col lg={1} md={12} sm={12} xs={12}>
                    <div className="sidemenu-creater">
                        <ul>
                            <li className="active">
                                <a href=""><img className="img-fluid m-0"  src={"images/dashboard.png"} /></a>
                            </li>
                            <li>
                               <a href=""><img className="img-fluid m-0"  src={"images/list.png"} /></a>
                            </li>
                            <li>
                               <a href="/config"><img className="img-fluid m-0"  src={"images/list22.png"} /></a>
                            </li>
                            
                        </ul>
                    </div>
                </Col>
                <Col lg={11} md={12} sm={12} xs={12}>
                    <div className="top-collect-creater nft-collector">
                
                    <div className="shadow-box ">

                        <h1>Update system configuration</h1>
                       <Form>
                       <Form.Group className="mb-3">
                       <Form.Select aria-label="swap"onChange={(e)=>handleType(e)}>
                        <option value="Swap">Swap</option>
                        <option value="stake">stake</option>
                       
                        </Form.Select>

                        </Form.Group>
                        </Form>


                        
                        <Form>
                        <Form.Group className="mb-3">
                            <Form.Control
                            type="text"
                            placeholder="wallet address"
                            name="address"
                            value={address}
                            onChange={(e)=>handleAddress(e)}
                            />
                            </Form.Group>
                        </Form>

                          <Form>
                          <Form.Group className="mb-3">
                             <Button  onClick={handleSubmit} disabled={loading?true:false} className="blue-btn">
                                {loading?"Processing":"Submit"}</Button>
                            </Form.Group> 
                          </Form>
                         </div>
                         <div className="latest-user-row justify-content-end">
                            
                           
                         </div>
                     
                    </div>
                </Col>
               </Row>
             </Container>
        </section>
    
    </>)
}

export default CreateConfig;