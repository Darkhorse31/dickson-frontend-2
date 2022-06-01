import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
const Items = ({data}) => {
  return (
    <div className="asset">
      <div className="setting">
        <SettingsIcon classname="assets_icon" />
      </div>

      <div className="right">
        <h3>{data.item_name}</h3>
        <p>{data.quantity}</p>
      </div>
    </div>
  );
};

export default Items;
