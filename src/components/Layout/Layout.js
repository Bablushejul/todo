import React from "react";
import SideBar from "../Sidebar/SideBar";
import Header from "../Header/Header";
import PageBody from "../PageBody/PageBody";
//import PageLayOutBody from "../PageBody/PageLayOutBody";

const Layout = () => {
  return (
    <div>
      <SideBar />
      <Header />
      <PageBody />
      {/* <PageLayOutBody /> */}
    </div>
  );
};

export default Layout;
