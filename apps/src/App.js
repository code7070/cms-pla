import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { isLogin } from "./helpers/util";
import Home from "./pages/Home/Home";
import Transaction from "./pages/Transactions";
import UserDetail from "./pages/UserDetail";
import UserInfo from "./pages/UserInfo";
import UserList from "./pages/UserList";
import Unservice from "./Unservice";

function App() {
  const login = isLogin();
  const loc = useLocation();

  useEffect(() => {
    console.log("Location Change", loc);
    window.postMessage(loc, "https://wknd-otto.my.id");
  }, [loc]);

  let routing = <Route path="*" element={<Home />} />;
  if (login)
    routing = (
      <>
        {/* <Route path="/pulsa" element={<CarrierService />} />
        <Route path="/paket-data" element={<CarrierService />} />
        <Route path="/pdam" element={<WaterService />} />
        <Route path="/telepon" element={<WaterService />} /> */}
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/login-info" element={<UserInfo />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="*" element={<Unservice />} />
      </>
    );

  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      {routing}
    </Routes>
  );
}

export default App;
