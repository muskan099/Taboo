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
import React, { useEffect, useState } from "react";
const TransactionList = () => {
  const [nft, setNft] = useState([]);

  const getData = async (page, limit) => {
    const res = await axios.post("/transactions", {
      page: page,
      limit: 20,
      skip: page * limit - limit,
    });

    if (res.data) {
      console.log("data from api", res.data.data[0].list);
      setNft(res.data.data[0].list);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(nft);
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
            <Row>
              {" "}
              <div className="shadow-box ">
                <Table className="table-tank" responsive>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Collection</th>
                      <th>Artist Name</th>
                      <th>YOP</th>
                      <th>Sub Category</th>
                      <th>For Sale</th>
                      <th>Basic Price</th>
                      <th>Featured</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <div>
                      {nft.map((item) => (
                        <h1>{item.content_id}</h1>
                      ))}
                    </div>
                  </tbody>
                </Table>
              </div>
            </Row>
          </div>
          <Row className=" pagination-row-explore">
            <Col
              className="set-limit"
              lg={6}
              md={6}
              sm={6}
              xs={12}
              style={{ display: "flex", alignItems: "self-start" }}
            ></Col>

            <Col className="" lg={6} md={6} sm={6} xs={12}></Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};
export default TransactionList;
