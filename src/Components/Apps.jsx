import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Apps({ app }) {
  const [totalRatings, setTotalRatings] = useState(0);

  useEffect(() => {
    if (app && app.ratings) {
      const total = app.ratings.reduce((sum, r) => sum + r.count, 0);
      setTotalRatings(total);
    } else {
      setTotalRatings(0);
    }
  }, [app]);

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (app) {
      const installedApps = JSON.parse(
        localStorage.getItem("installedApps") || "[]"
      );
      setIsInstalled(installedApps.includes(app.id));
    } else {
      setIsInstalled(false);
    }
  }, [app]);

  if (!app) return null;

  const handleInstall = () => {
    const installedApps = JSON.parse(
      localStorage.getItem("installedApps") || "[]"
    );
    if (!installedApps.includes(app.id)) {
      installedApps.push(app.id);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      setIsInstalled(true);
      toast.success(`${app.title} installed successfully! 🎉`);
    } else {
      toast.info(`${app.title} is already installed.`);
    }
  };

  return (
    <div className="bg-[#e9e9e9] p-6">
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

          <div className="text-sm mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-6 w-full px-4">
            <div className="text-center flex items-center gap-2">
              <div>
                <div>Downloads:</div>
                <h2 className="font-bold text-3xl">{app.downloads ?? "N/A"}</h2>
              </div>
              <div className="text-5xl text-[#632ee3]">
                <MdOutlineFileDownload />
              </div>
            </div>

            <div className="text-center">
              <div className="flex gap-3 items-center">
                <div>
                  <div>Average Rating:</div>
                  <h2 className="font-bold text-3xl">
                    {app.ratingAvg ?? "N/A"}
                  </h2>
                </div>
                <div className="text-5xl text-[#632ee3]">
                  <IoMdStar />
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex gap-2 items-center">
                <div>
                  <div>Total Ratings:</div>
                  <h2 className="font-bold text-3xl">{totalRatings}</h2>
                </div>
                <div className="text-5xl text-[#632ee3]">
                  <BiSolidCommentDots />
                </div>
              </div>
            </div>
          </div>

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

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4 text-center">
          Rating Breakdown
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={app.ratings}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="my-4">
        <h1 className="font-bold text-4xl my-2.5">Description</h1>
        <p>{app.description_details}</p>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default Apps;
