import React from "react";
import { useLoaderData } from "react-router-dom";
import AppDetails from "./AppDetails.jsx";
const AllApps = () => {
  const data = useLoaderData();

  return (
    <div className="max-w-11/12 mx-auto">
      <h1 className="text-center text-3xl font-bold my-4.5">
        Our All Applications
      </h1>
      <p className="text-center mb-10 opacity-70">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <AppDetails data={data}></AppDetails>
    </div>
  );
};

export default AllApps;
