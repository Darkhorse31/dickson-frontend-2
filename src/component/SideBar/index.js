import React, { useState } from "react";
import "./index.scss";
import Logo from "../../assets/dickson-furniture-logo.png";
import { NavLink } from "react-router-dom";
import "./index.scss";
const Sidebar = () => {
  const [state, setstate] = useState("false");
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      setstate("false");
    }
  });
  const handleClick = () => {
    setstate(state === "false" ? "true" : "false");
  };
  return (
    <div className="Sidebar">
      <div className="Sidebar_Desktop">
        <img src={Logo} alt={"IMG"} className="LogoImage" />
        <ul className="sidebarlist">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/orderlist">Order List</NavLink>
          </li>

          <li>
            <NavLink to="/notification">Notification</NavLink>
          </li>

          <li>
            <NavLink to="/logout">Logout</NavLink>
          </li>
        </ul>
      </div>
      <div className="mobile_nav" active={state}>
        <img src={Logo} alt={"IMG"} className="LogoImage" />
        <ul className="sidebarlist">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/orderlist">Order List</NavLink>
          </li>

          <li>
            <NavLink to="/notification">Notification</NavLink>
          </li>

          <li>
            <NavLink to="/logout">Logout</NavLink>
          </li>
        </ul>
      </div>
      <div className="button" onClick={handleClick} active={state}></div>
    </div>
  );
};

export default Sidebar;
