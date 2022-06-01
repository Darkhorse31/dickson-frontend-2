import React from "react";
import "./LandingPage.scss";
import { Link } from "react-router-dom";
import PImage from "../../assets/profile.png";
import { useSelector } from "react-redux";
const LandingPage = () => {
  const customer = useSelector((state) => state.customerinfo.value);
  return (
    <div className="LandingPage">
      <div className="Landingpage_wrapper">
        <div className="left">
          <img src={PImage} alt="img" className="new" />
          <h3 style={{ textAlign: "center" }}>{customer.name}</h3>
        </div>
        <div className="right">
          <ul className="LandingPage_list">
            <li className="link_list">
              <Link to="/orderlist">Order List</Link>
            </li>

            <li className="link_list">
              <Link to="/notification">Notifications</Link>
            </li>
            <li className="link_list">
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
