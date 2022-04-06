import React, { useEffect, useState } from "react";
import { Table, Row, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "../http/axios/axios_main";

const Stakes = () => {
  const { walletAddress } = useSelector((state) => state.auth);
  const [stakesData, setStakesData] = useState(null);

  useEffect(() => {
    async function getData() {
      const res = await axios.post("/stakes", { address: walletAddress });
      if (res.status === 200) {
        setStakesData(res.data);
      }
    }
    getData();
  }, []);

  console.log(stakesData);
  return (
    <div>
      <div className="padding-strip"></div>
      <section className="section-stakes-table">
        <Container>
          <Row>
            <Col>
              <div className="profile-img-stakes">
                <img src={"images/full-View.png"} alt="profile IMG" />
                <p>{walletAddress}</p>
              </div>
              {console.log(stakesData && stakesData?.stakes.length)}
              {stakesData && stakesData?.stakes.length > 0 ? (
                <div className="table-responsive">
                  <Table
                  responsive
                  striped
                  hover
                  size="sm"
                  className="table-stakes"
                >
                  <thead>
                    <tr>
                      <th width="30%">Wallet Address</th>
                      <th width="15%">Amount</th>
                      <th width="15%">Total Interest Earn</th>
                      <th width="15%">Total Amount</th>
                      <th width="10%">Status</th>
                      <th width="15%">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stakesData.stakes.map((item) => (
                      <tr key={item._id}>
                        <td width="30%" >{item.wallet_address}</td>
                        <td width="15%">{item.stakeinfo.deposit}</td>
                        <td width="15%">
                          {Number(item.stakeinfo.interest_earned).toFixed(4)}
                        </td>
                        <td width="15%">
                          {Number(item.stakeinfo.current_coin_balance).toFixed(
                            4
                          )}
                        </td>
                        <td width="10%">
                          <span className={`active-status`}>
                            {/*`${item.stakeinfo.status[0].toUpperCase()}${item.stakeinfo.status.slice(
                              1
                            )}`*/}
                            Active
                          </span>
                        </td>
                        <td width="15%">
                          <button
                            className="common-btn white-btn withdrow-btn"
                            disabled
                          >
                            Withdraw
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                </div>
              ) : (
                "No Data Found"
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Stakes;
