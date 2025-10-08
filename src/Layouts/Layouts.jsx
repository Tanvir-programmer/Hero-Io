import React from "react";
import Home from "../Pages/Home";
import { Outlet } from "react-router-dom";

import Footer from "../Pages/Footer";
import Navbar from "../Pages/Navbar";

const Layouts = () => {
  return (
    <div>
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Navbar />

        <div style={{ flex: 1 }}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layouts;
