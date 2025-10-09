import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { BiSolidCommentDots } from "react-icons/bi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { addToDB, getFromDB } from "../Utility/addToDB";

function Apps({ app }) {
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (app) {
      const installedApps = getFromDB("installedApps") || [];
      setIsInstalled(installedApps.includes(app.id));
    }
  }, [app]);

  if (!app) return null;

  const handleInstall = () => {
    const installedApps = getFromDB("installedApps") || [];
    if (!installedApps.includes(app.id)) {
      addToDB("installedApps", [...installedApps, app.id]);
      setIsInstalled(true);
      toast.success(`${app.title} installed successfully!`);
    } else {
      toast.info(`${app.title} is already installed.`);
    }
  };

  return (
    <div className="bg-[#e9e9e9] p-6 rounded-lg shadow-md">
      <div className="flex flex-col lg:flex-row justify-start gap-10 items-start">
        <div>
          <img
            src={
              app.image || "https://via.placeholder.com/600x300?text=No+Image"
            }
            alt={app.title}
            className="w-96 h-64 object-cover rounded mb-4"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-2">{app.title}</h1>
          <h2 className="font-semibold my-2">
            Developed by{" "}
            <span className="text-[#632ee3]">
              {app.companyName || "productive.io"}
            </span>
          </h2>

          <div className="divider divider-primary"></div>

          <p className="text-gray-600 mb-4">{app.description}</p>

          <button
            className={`btn font-bold bg-[#00d390] text-white text-2xl p-8 ${
              isInstalled ? "opacity-60 cursor-not-allowed" : ""
            }`}
            onClick={handleInstall}
            disabled={isInstalled}
          >
            {isInstalled ? "Installed" : "Install Now"}
          </button>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default Apps;
