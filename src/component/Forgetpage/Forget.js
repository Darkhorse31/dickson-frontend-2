import React from "react";
import Lock from "../../assets/lock.png";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";
import "./Forget.scss";
export const Forget = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="Forget">
        <div className="Forget_wrapper">
          <img src={Lock} alt="img" />
          <div className="text">
            <h3>
              FORGET
              <br />
              <span> PASSWORD</span>
            </h3>
            <p>
              Provide your account's email for which you want to reset your
              password!
            </p>
          </div>
          <form>
            <div className="Email">
              <EmailIcon className="email" />
              <input
                type="email"
                placeholder="Enter Email Address"
                className="input"
              ></input>
            </div>

            <button
              className="Next"
              onClick={() => {
                Navigate("/updatepassword");
              }}
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
