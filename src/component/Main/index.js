import React from "react";
import "./index.scss";
import Login from "../Login/Login";
import Logo from "../../assets/dickson-furniture-logo.png";
import LandingPage from "../LandingPage/LandingPage";
import Home from "../Home";
import { Forget } from "../Forgetpage/Forget.js";
import UpdatePassword from "../UpdatePassword";
import Success from "../PasswordUpdationSuccessful";
import { Routes, Route } from "react-router-dom";
export const Landing = () => {
  return (
    <>
      <div className="Login">
        <img src={Logo} alt="logo" className="brandlogo"></img>
        <Routes>
          <Route index element={<Login></Login>}></Route>
        </Routes>

        {/* <Login /> */}
        {/* <LandingPage/> */}
        {/* <Home/> */}
        {/* <Forget/> */}
        {/* <UpdatePassword/> */}
        {/* password update Success  */}
        {/* <Success/> */}
      </div>
    </>
  );
};
