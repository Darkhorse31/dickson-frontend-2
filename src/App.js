import "./App.scss";
import CustomerDetail from "./component/CustomerDetail";
import { Forget } from "./component/Forgetpage/Forget";
import Home from "./component/Home";
import { Landing } from "./component/Main";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./component/LandingPage/LandingPage";
import ListWrapper from "./component/Listwrapper";
import Asset from "./component/AssetUpload";
import UpdatePassword from "./component/UpdatePassword";
import Success from "./component/PasswordUpdationSuccessful";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/passwordupdatesuccessfull" element={<Success />}></Route>
        <Route path="/updatepassword" element={<UpdatePassword />} />
        <Route path="/orderlist" element={<Home />}>
          <Route path="order-detail/:id" element={<CustomerDetail />} />
          <Route path="add-remarks/:id" element={<Asset />}></Route>
          <Route index element={<ListWrapper />}></Route>
        </Route>
        <Route path="/forget" element={<Forget />}></Route>
      </Routes>
    </div>
  );
}

export default App;
