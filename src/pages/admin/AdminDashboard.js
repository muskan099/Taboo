import { Chart } from "react-google-charts";
import {
  Row,
  Col,
  Container,
  Tabs,
  Tab,
  Table,
  Modal,
  Button,
  Form,
} from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const value = 0.1;
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
    ["Dec", 1030],
  ];

  const options = {
    isStacked: true,
    legend: { position: "none" },
    curveType: "function",
    height: 250,
    colors: ["#871434"],
    vAxis: { minValue: 0 },
  };
  const { user } = useSelector((state) => state.auth);
  console.log({ user });
  return (
    <>
      <section className="creater-dash-sec">
        <Container fluid className="p-0">
          <Row>
            <Col lg={1} md={12} sm={12} xs={12}>
              <div className="sidemenu-creater">
                <ul>
                  <li className="active">
                    <NavLink to="/admin-dashboard">
                      <img
                        className="img-fluid m-0"
                        src={"images/dashboard.png"}
                      />
                    </NavLink>
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
            <Col lg={8} md={12} sm={12} xs={12}>
              <div className="top-collect-creater">
                <h3 className="main-heading-inner mb-0"> Admin Dashboard</h3>

                <Row>
                  <Col>
                    <div className="shadow-graph-box prograss-box-admin">
                      <ul>
                        <li>
                          <CircularProgressbar
                            value={value}
                            maxValue={1}
                            text={`${value * 100}%`}
                          />
                          <h3 className="main-heading-inner">Total NFT</h3>
                        </li>
                        <li>
                          <CircularProgressbar
                            value={value}
                            maxValue={1}
                            text={`${value * 100}%`}
                          />
                          <h3 className="main-heading-inner">For Sale</h3>
                        </li>
                        <li>
                          <CircularProgressbar
                            value={value}
                            maxValue={1}
                            text={`${value * 100}%`}
                          />
                          <h3 className="main-heading-inner">On Auction</h3>
                        </li>
                        <li>
                          <CircularProgressbar
                            value={value}
                            maxValue={1}
                            text={`${value * 100}%`}
                          />
                          <h3 className="main-heading-inner">
                            Total Register Users
                          </h3>
                        </li>
                        <li>
                          <CircularProgressbar
                            value={value}
                            maxValue={1}
                            text={`${value * 100}%`}
                          />
                          <h3 className="main-heading-inner">
                            Commision Earned
                          </h3>
                        </li>
                      </ul>
                    </div>

                    <div className="latest-user-row">
                      <h3 className="main-heading-inner mb-0"> Latest Users</h3>
                      <a href="" className="view-all-link">
                        See All
                      </a>
                    </div>

                    <div className="shadow-box">
                      <Table className="table-tank" responsive>
                        <thead>
                          <tr>
                            <th>S.No</th>
                            <th>Collection</th>
                            <th>Email Address</th>
                            <th>Wallet Address</th>
                            <th>Create Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>
                              <div class="owner-row-outer">
                                <img src="images/Team/team7.png" />
                                <div>
                                  <h5>Clementines Nightmare</h5>
                                </div>
                              </div>
                            </td>

                            <td>{user.email}</td>
                            <td>{user.wallet_address}</td>
                            <td> {user.created_at.slice(0, 9)}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col lg={3} md={12} sm={12} xs={12} className="pr-0">
              <div className="profile-img-left-box">
                <h3 className="main-heading-inner mb-0 text-center">
                  {" "}
                  My Profile
                </h3>
                <img
                  className="profile-main-img"
                  src={"images/Team/team7.png"}
                />
                <h4>{user.name}</h4>
                <p>{user._id.slice(0,6)}...{user._id.slice(-5)}</p>
                <hr />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdminDashboard;
