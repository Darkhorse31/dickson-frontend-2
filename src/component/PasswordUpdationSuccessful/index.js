import React from "react";
import "../Forgetpage/Forget.scss";
import "./index.scss";
import Success_icon from "../../assets/check.png";
const Success = () => {
  return (
    <>
      <div className="Forget Success">
        <div className="Forget_wrapper Success_wrapper">
          <div className="text">
            <h3>
              PASSWORD
              <br />
              <span> UPDATED</span>
            </h3>
            <img src={Success_icon} alt="img" className="Success_img"></img>
            <p>
              Provide your account's email for which you want to reset your
              password!
            </p>
          </div>
          <button className="Next Login-btn">Login</button>
        </div>
      </div>
    </>
  );
};

export default Success;
