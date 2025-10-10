import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";

const Layouts = () => {
  const navigation = useNavigation();

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar />

      {navigation.state === "loading" ? (
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col items-center space-y-4">
            {/* Simple spinner */}
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-lg font-semibold text-gray-600">Loading...</p>
          </div>
        </div>
      ) : (
        <div style={{ flex: 1 }}>
          <Outlet />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Layouts;
