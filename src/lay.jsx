import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./components/navbar";
import Footer from "./components/footer";

function Layout() {
  const location = useLocation();

  const isValentine = location.pathname === "/val";

  return (
    <div className="bg-secondary min-h-screen">
      <Nav transparent={isValentine} />
      
      <Outlet />
      
      {!isValentine && <Footer />}
    </div>
  );
}

export default Layout;
