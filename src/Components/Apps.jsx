import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function Apps({ app }) {
  const [totalRatings, setTotalRatings] = useState(0);

  useEffect(() => {
    if (app?.ratings) {
      const total = app.ratings.reduce((sum, r) => sum + r.count, 0);
      setTotalRatings(total);
    }
  }, [app]);

  if (!app) return null;

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

          <div className="text-sm mb-4 flex justify-between gap-6">
            <div className="text-center">
              <div>Downloads:</div>
              <h2 className="font-bold text-3xl">{app.downloads ?? "N/A"}</h2>
            </div>

            <div className="text-center">
              <div>Average Rating:</div>
              <h2 className="font-bold text-3xl">{app.ratingAvg ?? "N/A"}</h2>
            </div>

            <div className="text-center">
              <div>Total Ratings:</div>
              <h2 className="font-bold text-3xl">{totalRatings}</h2>
            </div>
          </div>

          <div>
            {" "}
            <Link
              to="/apps"
              className="inline-block mt-6 btn btn-primary font-bold"
            >
              Install
            </Link>
          </div>
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
    </div>
  );
}

export default Apps;
