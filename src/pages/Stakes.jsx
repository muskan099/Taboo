import React from "react";
import { Table, Row, Col, Container } from "react-bootstrap";

const Stakes = () => {
  return (
    <div>
      <div className="padding-strip"></div>
      <section className="section-stakes-table">
      	<Container>
      		<Row>
      			<Col>
      			   <div className="profile-img-stakes">
      			   	   <img src={"images/full-View.png"} alt="profile IMG" />
      			   	   <p>767766gs67gs6767gs6sg6g69gs6gsd67u6867y67y6ery</p>
      			   </div>
      				<Table responsive striped  hover size="sm" className="table-stakes">
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
					    <tr>
					      <td width="30%">767766gs67gs6767gs6sg6g69gs6gsd67u6867y67y6ery</td>
					      <td width="15%">120</td>
					      <td width="15%">5%</td>
					      <td width="15%">120</td>
					      <td width="10%"><span className="active-status">Active</span></td>
					      <td width="15%"><button className="common-btn white-btn withdrow-btn">Withdraw</button></td>
					    </tr>
					    <tr>
					      <td width="30%">767766gs67gs6767gs6sg6g69gs6gsd67u6867y67y6ery</td>
					      <td width="15%">120</td>
					      <td width="15%">5%</td>
					      <td width="15%">120</td>
					      <td width="10%"><span className="active-status">Active</span></td>
					      <td width="15%"><button className="common-btn white-btn withdrow-btn">Withdraw</button></td>
					    </tr>
					    <tr>
					      <td width="30%">767766gs67gs6767gs6sg6g69gs6gsd67u6867y67y6ery</td>
					      <td width="15%">120</td>
					      <td width="15%">5%</td>
					      <td width="15%">120</td>
					      <td width="10%"><span className="active-status">Active</span></td>
					      <td width="15%"><button className="common-btn white-btn withdrow-btn">Withdraw</button></td>
					    </tr>
					    
					  </tbody>
					</Table>
      			</Col>
      		</Row>
      	</Container>
      </section>
    </div>
  );
};

export default Stakes;
