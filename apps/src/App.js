import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import { isLogin } from "./helpers/util";
// import CarrierService from "./pages/carrier-service/CarrierService";
import Home, { PageTitle } from "./pages/Home/Home";
import Transaction from "./pages/Transactions";
import UserDetail from "./pages/UserDetail";
import UserInfo from "./pages/UserInfo";
import UserList from "./pages/UserList";
// import WaterService from "./pages/water/WaterService";
import Unservice from "./Unservice";
import store from "./redux/store";

function App() {
  const login = isLogin();

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
    <Provider store={store}>
      <PageTitle text="GOLD CMS" />
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          {routing}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
