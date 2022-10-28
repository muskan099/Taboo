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
import ExportToExcel from "../../components/UI/ExportToExcel";
import ExportToCSV from "../../components/UI/ExportToCSV";
import moment from "moment";
import Calendar from "react-calendar";
const TransactionList = () => {
  const [nft, setNft] = useState([]);

  const [currentPage, setCurrentPage] = useState();
  const [nftPerPage, setNftPerPage] = useState(20);
  const [startDate, setStartDate] = useState(new Date());
  let dateTime = startDate.toDateString();
  let current_date = moment(startDate, "YYYY-MM-DD").format().slice(0,10);
  const [endDate, setEndDate] = useState(new Date());
  let dateTime1 = endDate.toDateString();
  let current_date1 = moment(endDate, "YYYY-MM-DD").format().slice(0,10);
  // console.log("the current date is", { current_date });
  // console.log("the current date is", { current_date1 });

  const [totalNft, setTotalNft] = useState([]);
  const [result, setResult] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [status, setStatus] = useState("");
  const [submit, setSubmit] = useState(false);
  const [searchByDate,setSearchByDate] = useState(false)
  // console.log({ status });
  //startDate=2022-07-20&endDate=2022-07-23
  const getData = async (page, limit) => {
    const res = await axios.post("/transactions", {
      page: page,
      limit: limit,
      skip: page * limit - limit,
    });
    if (res.data) {
      // console.log(res.data.data);
      setNft(res.data.data[0].list);

      setResult(res.data.data[0]);
      setTotalNft(JSON.stringify(res.data.data[0].totalRecords[0].count));
    
      // console.log(res.data);
    }
  };
  // console.log({ nft });
  
  useEffect(() => {
    getData(currentPage, 20);
  }, []);

  
  let indexOfLastNft = currentPage * nftPerPage;
  let indexOfFirstNft = indexOfLastNft - nftPerPage;

  // console.log({currentPage});

  let currentNfts = nft.slice(indexOfFirstNft, indexOfLastNft);

  // console.log(nft);
  console.log({ currentNfts });
  useEffect(() => {
    getData(currentPage, 20);

    // console.log({ currentNfts });
  }, [currentPage]);
  function handleSelection() {
    setStatus("all");
  }
  function handleSelection1() {
    setStatus("success");
  }
  function handleSelection2() {
    setStatus("pending");
  }
  const [dateStartSelected,setDateStartSelected] = useState()
  const [dateEndSelected,setDateEndSelected] = useState()

  return (
    <section className="transaction-section">
      <Row>
        <Col lg={1} md={12} sm={12} xs={12}>
          <div className="sidemenu-creater">
            <ul>
           
            <li className="active">
                    <a href="/TransactionList">
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
                    <a href="/StackList">
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
                    <a href="/create-nft">
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
              <h3 className="title">Transaction List</h3>
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
                          handleSelection();
                        }}
                      >
                        All
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-2"
                        onClick={(e) => {
                          handleSelection1();
                        }}
                      >
                        Sucess
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
                  // {console.log({isVisible})}
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
                      <th>S.No</th>
                      <th>Nft</th>
                      <th>Nft Name</th>
                      <th>Wallet Address</th>
                      <th>Hash</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    { searchByDate ? nft
                      .filter((user) => {
                       return user.created_at >= current_date && user.created_at <= current_date1 && submit == true && user.nftImage != null ;
                      }) //"2022-07-18T11:40:37.144Z"
                      //Fri Jun 03 2022 00:00:00 GMT+0530 (India Standard Time)
                      .map((item, index) => (
                        
                        <tr key={item._id}>
                          {/* {console.log("created at", item.created_at)} */}
                          <td>{result.offSet + index + 1}</td>
                          <td>
                            <div>   <div class="owner-row-outer">
                            <img src={item.nftImage} />
                              </div></div>
                          </td>
                         
                          <td>
                           
                                 {item.nftName}
                                  
                          </td>
                          <td>
                           
                              {item.to_address.slice(0,5)}.....{item.to_address.slice(-5)}
                          
                          </td>
                          <td>
                            <a class="transaction-link-color" target={"_blank"} href={
                                  "https://www.bscscan.com/tx/" + item.trans_id
                                }>{item.trans_id.slice(0,5)}.....{item.trans_id.slice(-5)}</a>
                          </td>
                          <td>
                            <div>{item.total}</div>
                          </td>
                          <td>
                            <div>{item.status}</div>
                          </td>
                        </tr>
                      )) : status === 'all'  ? nft.filter((user) => {return user.nftImage != null}).map((item, index) => (
                        <tr key={item._id}>
                          {console.log("created at", item.created_at)}
                          <td>{result.offSet + index + 1}</td>
                          <td>
                            <div>   <div class="owner-row-outer">
                            <img src={item.nftImage} />
                              </div></div>
                          </td>
                         
                          <td>
                           
                                 {item.nftName}
                                  
                          </td>
                          <td>
                          {item.to_address.slice(0,5)}.....{item.to_address.slice(-5)}
                          </td>
                          <td>
                          <a class="transaction-link-color" target={"_blank"} href={
                                  "https://www.bscscan.com/tx/" + item.trans_id
                                }>{item.trans_id.slice(0,5)}.....{item.trans_id.slice(-5)}</a>
                          </td>
                          <td>
                            <div>{item.total}</div>
                          </td>
                          <td>
                            <div>{item.status}</div>
                          </td>
                        </tr>
                      )):nft.filter((user) => {
                        return user.status.includes(status) && user.nftImage != null;
                      }) //"2022-07-18T11:40:37.144Z"
                      //Fri Jun 03 2022 00:00:00 GMT+0530 (India Standard Time)
                      .map((item, index) => (
                        <tr key={item._id}>
                          {console.log("created at", item.created_at)}
                          <td>{result.offSet + index + 1}</td>
                          <td>
                            <div>   <div class="owner-row-outer">
                            <img src={item.nftImage} />
                              </div></div>
                          </td>
                         
                          <td>
                           
                                 {item.nftName}
                                  
                          </td>
                          <td>
                          {item.to_address.slice(0,5)}.....{item.to_address.slice(-5)}
                          </td>
                          <td>
                          <a class="transaction-link-color-black"target={"_blank"} href={
                                  "https://www.bscscan.com/tx/" + item.trans_id
                                }>{item.trans_id.slice(0,5)}.....{item.trans_id.slice(-5)}</a>
                          </td>
                          <td>
                            <div>{item.total}</div>
                          </td>
                          <td>
                            <div>{item.status}</div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </div>
            </Row>
          </div>
          <Pagination
                  nftPerPage={20}
                  totalNft={totalNft}
                  nft={nft}
                 setNft={setNft}
                 getData={getData}
                 limit={20}
                />
                  
        </Col>
      </Row>
    </section>
  );
};
export default TransactionList;
