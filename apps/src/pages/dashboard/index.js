import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { isLogin } from "../../helpers/util";
import MainDashboard from "./MainDashboard";
import Sidebar from "./Sidebar";
import SidebarService from "./SidebarService";
import UserInfo from "./UserInfo";

const DashboardRoute = () => {
  const { pathname: path } = useLocation();
  useEffect(() => {
    console.log("PATH CHANGES: ", path);
  }, [path]);

  return (
    <Routes>
      <Route index path="/" element={<MainDashboard />} />
      <Route path="user-info" element={<UserInfo />} />
      <Route path=":pages" element={<SidebarService />}>
        <Route path=":service" element={<SidebarService />} />
      </Route>
    </Routes>
  );
};

const ViewLogin = ({ login }) => {
  return (
    <p className="text-xl text-gray-500 font-bold my-5">
      {login ? `Your login info: ${JSON.stringify(login)}` : `You're not login`}
    </p>
  );
};

const Dashboard = () => {
  const login = isLogin();

  let content = <ViewLogin login={login} />;
  if (login) content = <DashboardRoute />;

  return (
    <div className="container mx-auto flex">
      <div className="flex-initial">
        <Sidebar />
      </div>
      <div className="flex-1 p-10 break-words bg-gray-200 shadow">
        <p className="container">{content}</p>
      </div>
    </div>
  );
};

export default Dashboard;
