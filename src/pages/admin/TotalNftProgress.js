import {
    Row,
    Col
} from "react-bootstrap";
import { axios } from "../../http";
import React, { useEffect, useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
  
  const TransactionList = () => {
    const [nftNumber , setNftNumber ] = useState();
    const [percent , setPercent ] = useState();
  
    
  
   const getData = async () => {
      const res = await axios.get("/nftSellsCount");
      // console.log(res.data);
      if (res.data) {
      
      setPercent(Math.floor(res.data.data.sold_persent))
      let totalNft = (res.data.data.all_nft)*0.1;
      setNftNumber(Math.ceil(totalNft))
// console.log({nftNumber})
    }
};


    
    useEffect(() => {
      getData();
    }, []);
  
    
   
    
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
          <Col lg={4} md={4} sm={6} xs={12}>
              <Row>
              <Col lg={6} md={12} sm={12} xs={12}>
                <div className="shadow-graph-box">
                        <h3 className="main-heading-inner">Total sales</h3>
                        <CircularProgressbar value={percent} text={`${percent}%`} />;
                           </div>
                        </Col>
                        <Col lg={6} md={12} sm={12} xs={12}>
                        <div className="shadow-graph-box">
                        <h3 className="main-heading-inner">Total Nft</h3>
                        <CircularProgressbar value={nftNumber}  maxValue={2} text={`${nftNumber * 100}%`}/>;
                        </div>
                        </Col>
                        
              </Row>
                      </Col>
        </Row>
      </section>
    );
  };
  export default TransactionList;
  