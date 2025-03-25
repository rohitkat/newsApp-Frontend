import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.js";
import TopLinks from "./TopLinks.tsx";
import Footer from "./Footer.tsx";

const Layout = () => {
  return (
    <div>
      <TopLinks />
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;