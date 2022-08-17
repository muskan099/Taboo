import {
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Table,
} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { axios } from "../../http";
import Pagination from "./Pagination";
import React, { useEffect, useState } from "react";
import moment from "moment";
import Calendar from "react-calendar";
import ExportToExcel from "../../components/UI/ExportToExcel";
import ExportToCSV from "../../components/UI/ExportToCSV";
const StackList = () => {
  const [nft, setNft] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [nftPerPage, setNftPerPage] = useState(20);
  const [dateSelected,setDateSelected] = useState(false)
  
  const [startDate, setStartDate] = useState(new Date());
 
  let current_date = moment(startDate, "YYYY-MM-DD").format().slice(0,10);
  console.log({current_date})
  const [endDate, setEndDate] = useState(new Date());
  const [searchByDate,setSearchByDate] = useState(false)
  let current_date1 = moment(endDate, "YYYY-MM-DD").format().slice(0,10);
  console.log("the current date1",{current_date1})
  console.log("the current date", { current_date });

  const [totalNft, setTotalNft] = useState();
 
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(false);
  const[ stakeinfo, setStakeinfo] = useState()

 
  const getData = async (page, limit,skip=(page * limit) - limit) => {
    {console.log("get data called")}
    {console.log(page)}
    {console.log(limit)}

    const res = await axios.get(`/AllstakeList?limit=${limit}&skip=${skip}`);
    console.log(res.data)
   console.log("the stakes info is ",res.data.stakes[0].stakeinfo)
   
    if (res.data) {
      setNft(res.data.stakes[0].list);

    
      setTotalNft(res.data.stakes[0].totalRecords[0].count)
     
      setStakeinfo(JSON.stringify(res.data.stakes.stakeinfo))
      
    }
  };
  console.log("total no. of nfts",{totalNft});
  console.log({ nft });
  console.log({ currentPage });
  useEffect(() => {
    
    getData(currentPage, 20);

  }, []);
  
  
 
  
  
 
  function handleSelection() {
    setStatus("success");
  }
  function handleSelection1() {
    setStatus("sold");
  }
  function handleSelection2() {
    setStatus("pending");
  }
  return (
    <section className="transaction-section">
      <Row>
        <Col lg={1} md={12} sm={12} xs={12}>
          <div className="sidemenu-creater">
            <ul>
            <li className="active">
          
                    <a href="/StackList">
                      <img
                        className="img-fluid m-0"
                        src={"images/list22.png"}
                      />
                    </a>
               
                    
                  </li>
                  <li>
                    <a href="/nft-list">
                      <img className="img-fluid m-0" src={"images/list.png"} />
                    </a>
                  </li>
                  <li>
                    <a href="/TransactionList">
                      <img
                        className="img-fluid m-0"
                        src={"images/list22.png"}
                      />
                    </a>
                  </li>

                
                  <li>
                    <a href="/ContactList">
                      <img
                        className="img-fluid m-0"
                        src={"images/list22.png"}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/create-stake">
                      <img
                        className="img-fluid m-0"
                        src={"images/list22.png"}
                      />
                    </a>
                  </li>
            </ul>
          </div>
        </Col>
        <Col lg={11} md={12} sm={12} xs={12}>
          <div className="transactionList">
            <Row className="title-container">
              <h3 className="title">Stack List</h3>
             
            <ExportToExcel csvData={nft} fileName={"StackList.js"}/>
            <ExportToCSV nft={nft}/>
            </Row>
            <Row className="transactionList-dropDown">
              <div className="dropDown-options">
                <Row className="dropDown-category">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Status
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        href="#/action-1"
                        onClick={(e) => {
                         setStatus("active")
                        }}
                        >
                        {console.log({status})}
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-2"
                        onClick={(e) => {
                          handleSelection1();
                        }}
                      >
                        Sold
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-3"
                        onClick={(e) => {
                          handleSelection2();
                        }}
                      >
                        Pending
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Row>
                <div className="newsletter-box m-0 input-column">
                  <InputGroup>
                    <FormControl
                      placeholder="Start Date....."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onClick={() => {
                        setIsVisible(true);
                      }}
                      />
                     <FormControl
                      placeholder="End Date....."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onClick={() => {
                        setIsVisible1(true);
                        setIsVisible(false);
                      }} />
                      <div  class="transaction-page-btn" onClick={(e) => {
                        e.preventDefault();
                        setSubmit(true)
                        setIsVisible(false)
                        setIsVisible1(false)
                      }}>
                      Search
                       </div>
                  </InputGroup>
                
                  
               
                </div>
              </div>
              <Col></Col>
            </Row>
            <Col lg={4} md={4} sm={4} xs={4} className="calendar">
              {isVisible ? (
                <Calendar
                  value={startDate}
                  onChange={(startDate) => {
                    setStartDate(startDate)
                  
                    setSearchByDate(true);
                  }}
                />
              ) : (
                ""
              )}
               {isVisible1 ? (
                <Calendar
                  value={endDate}
                  onChange={(endDate) => {
                    setIsVisible(false)
                    setEndDate(endDate)
                  {console.log({isVisible})}
                    setSearchByDate(true);
                  }}
                />
              ) : (
                ""
              )}
            </Col>
            <Row>
              {" "}
              <div className="shadow-box ">
                <Table className="table-tank" responsive>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Deposit</th>
                      <th>Interest Earn</th>
                      <th>Wallet Address</th>
                      <th>Current Balance</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  
                    {searchByDate
                      ? nft
                          .filter((user) => {
                            return (
                             
                              user.created_at >= current_date && user.created_at <= current_date1 && submit == true 
                            );
                          }) //"2022-07-18T11:40:37.144Z"
                          //Fri Jun 03 2022 00:00:00 GMT+0530 (India Standard Time)
                          .map((item, index) => (
                            <tr key={item._id}>
                             <td>{item.created_at}</td>
                              <td>{console.log(item.stakeinfo.startingbalance)}
                               
                                <td>{item.stakeinfo.startingbalance}</td>
                                <td>
                              <div>{item.stakeinfo.interest_earned}</div>
                            </td>
                             </td>

                              {console.log("stake info",item.stakeinfo)}
                             
                             <td>
                              <div className="addressLineClamp">
                                {item.wallet_address}
                              </div>
                            </td>
                            <td>
                              <div>{item.stakeinfo.closingbalance}</div>
                            </td>
                            <td>
                              <div>{item.status}</div>
                            </td>
                            <td>
                              <div>{item.status}</div>
                            </td>
                            </tr>
                          ))
                      : nft.filter((user) => { return (
                        user.status.includes(status)
                      )}).map((item, index) => (
                          <tr key={item._id}>
                           
                            <td>{item.created_at}</td>
                            <td>{item.stakeinfo.startingbalance}</td>
                           
                            <td>
                              <div>{item.stakeinfo.interest_earned}</div>
                            </td>
                            <td>
                              <div className="addressLineClamp">
                                {item.wallet_address}
                              </div>
                            </td>
                            <td>
                              <div>{item.stakeinfo.closingbalance}</div>
                            </td>
                            <td>
                              <div>{item.status}</div>
                            </td>
                            <td>
                              <div>{item.status}</div>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </Table>
              
                <Pagination
                  nftPerPage={20}
                  totalNft={totalNft}
                 nft={nft}
                 getData={getData}
                 limit={20}
              
                />
              </div>
            </Row>
          </div>
       
        </Col>
      </Row>
    </section>
  );
};
export default StackList;
