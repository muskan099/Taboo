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
const TransactionList = () => {
  const [nft, setNft] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [nftPerPage, setNftPerPage] = useState(20);
  const [date, setDate] = useState("");
  const [totalNft, setTotalNft] = useState([]);
  const [result, setResult] = useState([]);
  console.log("the date is", date);
  const getData = async (page, limit) => {
    const res = await axios.post("/transactions", {
      page: page,
      limit: 100,
      skip: page * limit - limit,
    });
    if (res.data) {
      setNft(res.data.data[0].list);
      setResult(res.data.data[0]);
      setTotalNft(res.data.data[0].totalRecords[0]);
      console.log("TOTAL RECORDS", res.data);
      console.log("total nft", totalNft);
    }
  };
  console.log(nft);
  useEffect(() => {
    getData(currentPage, 100);
  }, []);

  const indexOfLastNft = currentPage * nftPerPage;
  const indexOfFirstNft = indexOfLastNft - nftPerPage;

  const currentNfts = nft.slice(indexOfFirstNft, indexOfLastNft);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
              <h3 className="title">Transaction List</h3>
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
                      All Paintings Name
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
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
                      onChange={(e) => {
                        setDate(e.target.value);
                      }}
                    />
                  </InputGroup>
                  <InputGroup>
                    <FormControl
                      placeholder="End Date....."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) => {
                        setDate(e.target.value);
                      }}
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
                    {currentNfts
                      .filter((user) => user.created_at.includes(date))
                      .map((item, index) => (
                        <tr key={item._id}>
                          <td>{result.offSet + index}</td>
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
export default TransactionList;
