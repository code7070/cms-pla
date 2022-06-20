import React from "react";
import Button from "../../components/button";

const ServicePage = () => (
  <div className="text-center my-20">
    <div className="text-3xl">SERVICE PAGE</div>
    <div className="text-blue-300">This page is empty</div>
  </div>
);

const NotAlone = ({ children = <ServicePage /> }) => {
  const clicks = () => (window.location.href = "https://wknd-otto.my.id/");

  const denyView = (
    <div className="text-center my-20">
      <div className="text-center my-5 text-3xl ">I NEED SUPER DASHBOARD</div>
      <div>
        <Button onClick={clicks}>Open SUPER</Button>
      </div>
    </div>
  );

  if (window.parent === window.self) return denyView;
  return children;
};

export default NotAlone;
