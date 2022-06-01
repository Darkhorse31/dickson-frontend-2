import React, { useEffect, useState } from "react";
import "./index.scss";
import Customer_image from "../../assets/detail-pic.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Items from "../Asset";
const CustomerDetail = () => {
  // All respose Data state
  const [Order_id,setorderId]=useState("");
  const [Data, setData] = useState([]);
  const [Ntems, setitems] = useState([]);
  const [subdata, setsubdata] = useState({});
  const userid = useSelector((state) => state.customerinfo.value);
  useEffect(() => {
    const DetailComponent = async () => {
      await axios
        .post(`http://89.40.2.219/api/v1/orders?user_id=${userid.user_id}`)
        .then((res) => {
          const { data } = res;
          setData(data);
          const [data1] = data;
          setsubdata(data1);
          const { items } = data1;
          setitems(items);
          setorderId(data1.order_id)
        })
        .catch((err) => {
          console.log(err);
        });
    };
    DetailComponent();
  }, []);
 console.log()
  const Navigate = useNavigate();
  return (
    <div className="CustomerDetail">
      <div className="CustomerDetail_top">
        <div className="CustomerDetail_information">
          <p>{subdata.order_date}</p>
          <h3>{subdata.project_name}</h3>
          <div className="OrderNo">ORDER NO : DIC9874563</div>
        </div>
      </div>
      <div className="CustomerDetail_bottom">
        <div className="customer_info">
          <img src={Customer_image} alt="image" className="cimage" />
          {/* Name  */}
          <div className="infoDiv">
            <h3>{subdata.customer_name}</h3>
            <p>{subdata.customer_phone}</p>
          </div>
        </div>
        <div className="customer_info_Location">
          {/* Location -icon  */}
          <div className="location_Info">
            <LocationOnIcon classname="location" />
            <h3 className="location1">Location</h3>
          </div>

          {/* Address  */}
          <p>{subdata.address}</p>
        </div>
        <div className="Total_order">
          {/* Quantitiy  */}
          <h3 className="Qua">Quantitiy</h3>
          <div className="total_asset">
            {Ntems.map((element) => {
              return <Items data={element} />;
            })}
          </div>
        </div>
        <div className="Customer_contact_detail">
          <div className="costomer_site">
            <h3>On Site Contact No.</h3>
            <h4>{subdata.onsite_phone}</h4>
          </div>
          <div className="Customer_NO">
            <h3> Customer No.</h3>
            <h4>{subdata.customer_phone}</h4>
          </div>
        </div>
        <div className="ImageUpload">
          <h3>UPLOAD IMAGES OF THE PRODUCTS INSTALLED</h3>
          <button
            className="docs"
            onClick={() => {
              Navigate(`/orderlist/add-remarks/${Order_id}`);
            }}
          >
            Upload Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetail;
