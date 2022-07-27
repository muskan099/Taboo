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
const StackList = () => {
  const [nft, setNft] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [nftPerPage, setNftPerPage] = useState(20);
  const [date, setDate] = useState();
  const selectedDate = new Date();

  let current_date = moment(date).format("YYYY-MM-DD");

  console.log("the current date", { current_date });

  const [totalNft, setTotalNft] = useState([]);
  const [result, setResult] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(false);
  console.log({ status });
  const getData = async (page, limit) => {
    const res = await axios.post("/transactions", {
      page: page,
      limit: limit,
      skip: page * limit - limit,
    });
    if (res.data) {
      console.log(res.data.data);
      setNft(res.data.data[0].list);

      setResult(res.data.data[0]);
      setTotalNft(res.data.data[0].totalRecords[0].count);
      console.log(
        "TOTAL RECORDS : count",
        res.data.data[0].totalRecords[0].count
      );
      console.log(res.data);
    }
  };
  console.log({ nft });
  useEffect(() => {
    getData(currentPage, 20);
  }, []);

  const paginate = (pageNumber) => {
    console.log({ pageNumber });

    setCurrentPage(pageNumber);
  };
  let indexOfLastNft = currentPage * nftPerPage;
  let indexOfFirstNft = indexOfLastNft - nftPerPage;

  console.log(nft);

  let currentNfts = nft.slice(indexOfFirstNft, indexOfLastNft);

  console.log(nft);
  console.log({ currentNfts });
  useEffect(() => {
    getData(currentPage, 20);

    console.log({ currentNfts });
  }, [currentPage]);
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
              <li className="active-link">
                <a href="/">
                  <img src={"images/dashboard.png"} alt="image" />
                </a>
              </li>
              <li className="active-link">
                <a href="/">
                  <img src={"images/list.png"} alt="image" />
                </a>
              </li>
              <li className="active-link">
                <a href="/">
                  <img src={"images/list22.png"} alt="image" />
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col lg={11} md={12} sm={12} xs={12}>
          <div className="transactionList">
            <Row className="title-container">
              <h3 className="title">Stack List</h3>
              <a href="/" className="transaction-page-btn">
                Export to Excel
              </a>
              <a href="/" className="transaction-page-btn">
                Export to CSV
              </a>
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
                  </InputGroup>
                  <InputGroup>
                    <FormControl
                      placeholder="End Date....."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                  </InputGroup>
                  <InputGroup className="m-0">
                    <FormControl
                      placeholder="Search....."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <Button>
                      <img
                        className="search-icon"
                        src={"images/icons-Search-Line.png"}
                        alt="logo"
                      />
                    </Button>
                  </InputGroup>
                </div>
              </div>
              <Col></Col>
            </Row>
            <Col lg={4} md={4} sm={4} xs={4} className="calendar">
              {isVisible ? (
                <Calendar
                  value={selectedDate}
                  onChange={(selectedDate) => {
                    setDate(selectedDate);
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
                    {console.log({ current_date })}
                    {date
                      ? nft
                          .filter((user) => {
                            return (
                              user.status.includes(status) &&
                              user.created_at
                                .slice(0, 10)
                                .includes(current_date)
                            );
                          }) //"2022-07-18T11:40:37.144Z"
                          //Fri Jun 03 2022 00:00:00 GMT+0530 (India Standard Time)
                          .map((item, index) => (
                            <tr key={item._id}>
                              {console.log(
                                "created at",
                                item.created_at.slice(0, 10)
                              )}
                              <td>{result.offSet + index + 1}</td>
                              <td>
                                <div>{item.content_id}</div>
                              </td>
                              <td>
                                <div>{item.nftName}</div>
                              </td>
                              <td>
                                <div className="addressLineClamp">
                                  {item.to_address}
                                </div>
                              </td>
                              <td>
                                <div>{item.nft_hash}</div>
                              </td>
                              <td>
                                <div>{item.total}</div>
                              </td>
                              <td>
                                <div>{item.status}</div>
                              </td>
                            </tr>
                          ))
                      : nft.map((item, index) => (
                          <tr key={item._id}>
                            {console.log(
                              "created at",
                              item.created_at.slice(0, 10)
                            )}
                            <td>{result.offSet + index + 1}</td>
                            <td>
                              <div>{item.content_id}</div>
                            </td>
                            <td>
                              <div>{item.nftName}</div>
                            </td>
                            <td>
                              <div className="addressLineClamp">
                                {item.to_address}
                              </div>
                            </td>
                            <td>
                              <div>{item.nft_hash}</div>
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
            nftPerPage={nftPerPage}
            totalNft={totalNft}
            paginate={paginate}
          />
        </Col>
      </Row>
    </section>
  );
};
export default StackList;
