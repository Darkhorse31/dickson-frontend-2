import React, { useState, useEffect } from "react";
import AssetImage from "../../assets/room.png";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";
import { B1Floor, B2Floor } from "../Floor";
import axios from "axios";
import { useParams } from "react-router-dom";
import { allassets } from "../../redux/slice/AssetSice";
var FormData = require("form-data");

const Asset = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userid = useSelector((state) => state.customerinfo.value);
  const assetData = useSelector((state) => state.assetSlice.value);
  const [showImage,setshowImage]=useState([])
  const [file, setfile] = useState([null]);
  const [status, setstatus] = useState("completed");
  const [notify, setnotify] = useState("no");
  const [unitId, setunitId] = useState("");
  const [remarks, setremarks] = useState("");
  const [building, setbuilding] = useState("");
  const [Floor, setFloor] = useState("");
  useEffect(() => {
    const AllData = async () => {
      await axios
        .post(
          `http://89.40.2.219/api/v1/details?user_id=${userid.user_id}&order_id=${id}`
        )
        .then((res) => {
          const { data } = res;
          dispatch(allassets(data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    AllData();
  }, []);
  const [FileList]=file;
 
  
  // transfer Data
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("unit_id", unitId);
    data.append("user_id", userid.user_id);
    data.append("status", status);
    data.append("remarks", remarks);
    data.append("notify", notify);
    // console.log(file);
    [...file].forEach((e) => {
      data.append("image[]", e);
    });
    await axios
      .post("http://89.40.2.219/api/v1/send_remarks", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Transfer Data
  // Redux Data
  const unique = [...new Set(assetData.map((item) => item.building))];
  const uniqueFloor = [
    ...new Set(
      assetData.map((Floor) => {
        return building === Floor.building ? Floor.floor : "";
      })
    ),
  ];
  const uniqueunitId = [
    ...new Set(
      assetData.map((unitId) => {
        return building === unitId.building && Floor === unitId.floor
          ? unitId.unit_id
          : "";
      })
    ),
  ];
  
  // uniqueunitId.forEach((unitId) => {
  //   console.log(unitId);
  // });
  return (
    <div className="Asset">
      <h3 className="heading">Upload Image</h3>   
      <form onSubmit={handleSubmit}>
        <div className="Select">
          <select
            className="AssetSelect"
            style={{ textTransform: "uppercase" }}
            onChange={(e) => {
              setbuilding(e.target.value);
            }}
          >
            <option value="">
              <h3>Select Building</h3>
            </option>
            {unique.map((ele) => {
              return <option value={ele}>{ele}</option>;
            })}
          </select>
          <select
            className="AssetSelect"
            style={{ textTransform: "uppercase" }}
            onChange={(e) => setFloor(e.target.value)}
          >
            <option>
              <h3>Select Floor</h3>
            </option>
            {uniqueFloor.map((floor) => {
              return floor !== "" ? <option value={floor}>{floor}</option> : "";
            })}
          </select>
          <select
            className="AssetSelect"
            style={{ textTransform: "uppercase" }}
            onChange={(e) => setunitId(e.target.value)}
          >
            <option>
              <h3>Select UnitId</h3>
            </option>
            {uniqueunitId.map((unitId) => {
              return unitId!==""?<option value={unitId}>Unit Id {unitId}</option>:"";
            })}
          </select>
        </div>
        <div className="buttongroup">
          <div className="div1">Building<span style={{color:"royalblue",fontWeight:"bold",marginLeft:"3px"}}>{building}</span></div>
          <div className="div2">Floor <span style={{color:"#a09df5",fontWeight:"bold",marginLeft:"3px"}}>{Floor}</span></div>
          <div className="div1">Unit Id<span style={{color:"royalblue",fontWeight:"bold",marginLeft:"3px"}}>{unitId}</span></div>
        </div>
        {/* image upload starting  */}
        <div className="Assets_image">
          <img src={AssetImage} alt="Asset Image"></img>
          <img src={AssetImage} alt="Asset Image"></img>
          <img src={AssetImage} alt="Asset Image"></img>
          <img src={AssetImage} alt="Asset Image"></img>
        </div>
        {/* Image upload Tab */}
        <div className="input">
          <label for="upload">Upload</label>
          <input
            type="file"
            id="upload"
            name="upload"
            accept="images/*"
            className="fileInputtype"
            onChange={(e) => setfile([e.target.files])}
            multiple
          />
        </div>
        <div className="Textarea">
          <label>Add Remark</label>
          <textarea
            type="text"
            className="textarea"
            id="remark"
            name="remark"
            value={remarks}
            onChange={(e) => setremarks(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="Submit">
          Send
        </button>
        <button type="submit" className="Submit" onClick={e=>setnotify("yes")}>
          Send with Notification
        </button>
      </form>
    </div>
  );
};

export default Asset;
