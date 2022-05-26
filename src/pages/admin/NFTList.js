import {
  Row,
  Col,
  Container,
  Tabs,
  Tab,
  Table,
  Modal,
  FormControl,
  Button,
  InputGroup,
  Form,
  Dropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NFTList = () => {
  return (
    <>
      <section className="creater-dash-sec">
        <Container fluid className="p-0">
          <Row>
            <Col lg={1} md={12} sm={12} xs={12}>
              <div className="sidemenu-creater">
                <ul>
                  <li className="">
                    <NavLink to="/admin-dashboard">
                      <img
                        className="img-fluid m-0"
                        src={"images/dashboard.png"}
                      />
                    </NavLink>
                  </li>
                  <li className="active">
                    <NavLink to="/admin-dashboard">
                      <img className="img-fluid m-0" src={"images/list.png"} />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/admin-dashboard">
                      <img
                        className="img-fluid m-0"
                        src={"images/list22.png"}
                      />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={11} md={12} sm={12} xs={12}>
              <div className="top-collect-creater nft-collector">
                <div className="nft-list-btn-row">
                  <h3 className="main-heading-inner mb-0"> NFT List</h3>
                  <a className="common-btn" href="">
                    Export to Exel
                  </a>
                  <a className="common-btn" href="">
                    Export to CSV
                  </a>
                </div>

                <div className="filer-right-box allcategory-filter filter-nft-list">
                  <div className="outer-multiple-drop">
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
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
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        All Artist
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
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        All Category
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
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        Type
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
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        Status
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
                  </div>

                  <div className="newsletter-box m-0">
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
                      <tr>
                        <td>01</td>
                        <td>
                          <div class="owner-row-outer">
                            <img src="images/Team/team7.png" />
                            <div>
                              <h5>Clementines Nightmare</h5>
                            </div>
                          </div>
                        </td>

                        <td>Sam G</td>
                        <td>-</td>
                        <td>Art</td>
                        <td>Yes</td>
                        <td>100 ETH</td>
                        <td>
                          <div className="text-center">
                            {["checkbox"].map((type) => (
                              <div
                                key={`default-${type}`}
                                className="text-center"
                              >
                                <Form.Check
                                  type={type}
                                  id={`default-${type}`}
                                  label={` `}
                                />
                              </div>
                            ))}
                          </div>
                        </td>
                        <td>
                          <span className="status-box">Approved</span>
                        </td>
                        <td>
                          <a href="" className="view-icon">
                            <i className="fa fa-eye"></i>
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>01</td>
                        <td>
                          <div class="owner-row-outer">
                            <img src="images/Team/team7.png" />
                            <div>
                              <h5>Clementines Nightmare</h5>
                            </div>
                          </div>
                        </td>

                        <td>Sam G</td>
                        <td>-</td>
                        <td>Art</td>
                        <td>Yes</td>
                        <td>100 ETH</td>
                        <td>
                          <div className="text-center">
                            {["checkbox"].map((type) => (
                              <div
                                key={`default-${type}`}
                                className="text-center"
                              >
                                <Form.Check
                                  type={type}
                                  id={`default-${type}`}
                                  label={` `}
                                />
                              </div>
                            ))}
                          </div>
                        </td>
                        <td>
                          <span className="status-box">Approved</span>
                        </td>
                        <td>
                          <a href="" className="view-icon">
                            <i className="fa fa-eye"></i>
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>01</td>
                        <td>
                          <div class="owner-row-outer">
                            <img src="images/Team/team7.png" />
                            <div>
                              <h5>Clementines Nightmare</h5>
                            </div>
                          </div>
                        </td>

                        <td>Sam G</td>
                        <td>-</td>
                        <td>Art</td>
                        <td>Yes</td>
                        <td>100 ETH</td>
                        <td>
                          <div className="text-center">
                            {["checkbox"].map((type) => (
                              <div
                                key={`default-${type}`}
                                className="text-center"
                              >
                                <Form.Check
                                  type={type}
                                  id={`default-${type}`}
                                  label={` `}
                                />
                              </div>
                            ))}
                          </div>
                        </td>
                        <td>
                          <span className="status-box">Approved</span>
                        </td>
                        <td>
                          <a href="" className="view-icon">
                            <i className="fa fa-eye"></i>
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>01</td>
                        <td>
                          <div class="owner-row-outer">
                            <img src="images/Team/team7.png" />
                            <div>
                              <h5>Clementines Nightmare</h5>
                            </div>
                          </div>
                        </td>

                        <td>Sam G</td>
                        <td>-</td>
                        <td>Art</td>
                        <td>Yes</td>
                        <td>100 ETH</td>
                        <td>
                          <div className="text-center">
                            {["checkbox"].map((type) => (
                              <div
                                key={`default-${type}`}
                                className="text-center"
                              >
                                <Form.Check
                                  type={type}
                                  id={`default-${type}`}
                                  label={` `}
                                />
                              </div>
                            ))}
                          </div>
                        </td>
                        <td>
                          <span className="status-box">Approved</span>
                        </td>
                        <td>
                          <a href="" className="view-icon">
                            <i className="fa fa-eye"></i>
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>01</td>
                        <td>
                          <div class="owner-row-outer">
                            <img src="images/Team/team7.png" />
                            <div>
                              <h5>Clementines Nightmare</h5>
                            </div>
                          </div>
                        </td>

                        <td>Sam G</td>
                        <td>-</td>
                        <td>Art</td>
                        <td>Yes</td>
                        <td>100 ETH</td>
                        <td>
                          <div className="text-center">
                            {["checkbox"].map((type) => (
                              <div
                                key={`default-${type}`}
                                className="text-center"
                              >
                                <Form.Check
                                  type={type}
                                  id={`default-${type}`}
                                  label={` `}
                                />
                              </div>
                            ))}
                          </div>
                        </td>
                        <td>
                          <span className="status-box">Approved</span>
                        </td>
                        <td>
                          <a href="" className="view-icon">
                            <i className="fa fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>01</td>
                        <td>
                          <div class="owner-row-outer">
                            <img src="images/Team/team7.png" />
                            <div>
                              <h5>Clementines Nightmare</h5>
                            </div>
                          </div>
                        </td>

                        <td>Sam G</td>
                        <td>-</td>
                        <td>Art</td>
                        <td>Yes</td>
                        <td>100 ETH</td>
                        <td>
                          <div className="text-center">
                            {["checkbox"].map((type) => (
                              <div
                                key={`default-${type}`}
                                className="text-center"
                              >
                                <Form.Check
                                  type={type}
                                  id={`default-${type}`}
                                  label={` `}
                                />
                              </div>
                            ))}
                          </div>
                        </td>
                        <td>
                          <span className="status-box">Approved</span>
                        </td>
                        <td>
                          <a href="" className="view-icon">
                            <i className="fa fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>01</td>
                        <td>
                          <div class="owner-row-outer">
                            <img src="images/Team/team7.png" />
                            <div>
                              <h5>Clementines Nightmare</h5>
                            </div>
                          </div>
                        </td>

                        <td>Sam G</td>
                        <td>-</td>
                        <td>Art</td>
                        <td>Yes</td>
                        <td>100 ETH</td>
                        <td>
                          <div className="text-center">
                            {["checkbox"].map((type) => (
                              <div
                                key={`default-${type}`}
                                className="text-center"
                              >
                                <Form.Check
                                  type={type}
                                  id={`default-${type}`}
                                  label={` `}
                                />
                              </div>
                            ))}
                          </div>
                        </td>
                        <td>
                          <span className="status-box">Approved</span>
                        </td>
                        <td>
                          <a href="" className="view-icon">
                            <i className="fa fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>01</td>
                        <td>
                          <div class="owner-row-outer">
                            <img src="images/Team/team7.png" />
                            <div>
                              <h5>Clementines Nightmare</h5>
                            </div>
                          </div>
                        </td>

                        <td>Sam G</td>
                        <td>-</td>
                        <td>Art</td>
                        <td>Yes</td>
                        <td>100 ETH</td>
                        <td>
                          <div className="text-center">
                            {["checkbox"].map((type) => (
                              <div
                                key={`default-${type}`}
                                className="text-center"
                              >
                                <Form.Check
                                  type={type}
                                  id={`default-${type}`}
                                  label={` `}
                                />
                              </div>
                            ))}
                          </div>
                        </td>
                        <td>
                          <span className="status-box">Approved</span>
                        </td>
                        <td>
                          <a href="" className="view-icon">
                            <i className="fa fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>01</td>
                        <td>
                          <div class="owner-row-outer">
                            <img src="images/Team/team7.png" />
                            <div>
                              <h5>Clementines Nightmare</h5>
                            </div>
                          </div>
                        </td>

                        <td>Sam G</td>
                        <td>-</td>
                        <td>Art</td>
                        <td>Yes</td>
                        <td>100 ETH</td>
                        <td>
                          <div className="text-center">
                            {["checkbox"].map((type) => (
                              <div
                                key={`default-${type}`}
                                className="text-center"
                              >
                                <Form.Check
                                  type={type}
                                  id={`default-${type}`}
                                  label={` `}
                                />
                              </div>
                            ))}
                          </div>
                        </td>
                        <td>
                          <span className="status-box">Approved</span>
                        </td>
                        <td>
                          <a href="" className="view-icon">
                            <i className="fa fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className="latest-user-row justify-content-end">
                  <a href="" className="view-all-link">
                    See All
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default NFTList;
