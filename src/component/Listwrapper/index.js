import React, { useEffect, useState } from "react";
import "./index.scss";
import CardComponent from "../ListComponent/ListComponet";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
const ListWrapper = () => {
  const orderData = useSelector((state) => state.customerinfo.value);
  const [CustomerData, setCustomerData] = useState([]);
  useEffect(() => {
    const orders = async () => {
      axios
        .post(`http://89.40.2.219/api/v1/orders?user_id=${orderData.user_id}`)
        .then((res) => {
          const { data } = res;
          setCustomerData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    orders();
  }, []);
  return (
    <div className="listWrapper">
      <h3>Order List</h3>
      <div className="component_div">
        {CustomerData.map((element, idx) => {
          return <CardComponent Data={element} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default ListWrapper;
