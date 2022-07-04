import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { isLogin } from "./helpers/util";
import CarrierService from "./pages/carrier-service/CarrierService";
import Home, { PageTitle } from "./pages/Home/Home";
import Transaction from "./pages/Transactions";
import UserInfo from "./pages/UserInfo";
import WaterService from "./pages/water/WaterService";
import Unservice from "./Unservice";

function App() {
  const login = isLogin();

  let routing = <Route path="*" element={<Home />} />;
  if (login)
    routing = (
      <>
        <Route path="/pulsa" element={<CarrierService />} />
        <Route path="/paket-data" element={<CarrierService />} />
        <Route path="/pdam" element={<WaterService />} />
        <Route path="/telepon" element={<WaterService />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="*" element={<Unservice />} />
      </>
    );

  return (
    <>
      <PageTitle text="PLA Service" />
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          {routing}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
