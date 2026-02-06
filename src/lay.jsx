import React from "react";
import {Outlet} from "react-router-dom";
import Nav from "./components/navbar";
import Footer from "./components/footer";

function Layout() {
  return (
    <div className="bg-secondary min-h-screen">
      <Nav />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout; 