import React from "react";
import "../Forgetpage/Forget.scss";
import Key from "../../assets/key.png";
import Key_Icon from "../../assets/key-icon.png";
import Password from "../../assets/password.png";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
  const Navigate = useNavigate();
  return (
    <div className="updatePasswod Forget">
      <div className="updatePasswod_password Forget_wrapper">
        <img src={Key} alt="img" />
        <div className="text">
          <h3>
            NEW
            <br />
            <span> CREDENTIALS</span>
          </h3>
          <p>Your identity has been verified! Set your new password</p>
        </div>
        <form>
          <div className="Email">
            <img src={Key_Icon} alt="Logo" className="icon key" />
            <input
              type="password"
              placeholder="Enter New Password"
              className="input upinput"
            ></input>
              <img src={Password} alt="Logo" className="icon password" />
          </div>
        
          <div className="Email">
          <img src={Key_Icon} alt="Logo" className="icon key" />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="input  upinput"
            ></input>
             <img src={Password} alt="Logo" className="icon password" />
          </div>

          <button className="Next" onClick={()=>{
            Navigate("/passwordupdatesuccessfull")
          }}>Next</button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
