import React, { useEffect } from "react";
import "./index.scss";
import CustomerImage from "../../assets/img-1.png";
import { useNavigate } from "react-router-dom";
const CustomerCard = (props) => {
  const { Data } = props;
  const { items } = Data;
  const Navigate = useNavigate();
  return (
    <main
      className="MainList"
      onClick={() => {
        Navigate(`order-detail/${Data.order_id}`);
      }}
    >
      <div className="ListComp_wrapper">
        {/* img */}
        <img
          src={CustomerImage}
          alt="Customerimage"
          className="CustomerImage"
        />
        <div className="right">
          <h3 className="nameofCustomer">{Data.customer_name}</h3>
          <h4 className="Pro_name">{Data.project_name}</h4>
          <h5 className="Date">{Data.order_date}</h5>
        </div>
      </div>
    </main>
  );
};

export default CustomerCard;
