import React from "react";
import { IoDownload } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
function AppDetails({ data }) {
  const apps = Array.isArray(data) ? data : data ? [data] : [];

  if (apps.length === 0) {
    return <div className="p-4">No apps to display.</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <div className="font-bold text-2xl py-4">
          ({apps.length}) Apps_Found
        </div>
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
        {apps.slice(0, 30).map((app, index) => {
          const title = app.appTitle || app.title || `App ${index + 1}`;
          const image =
            app.image || "https://via.placeholder.com/300x200?text=No+Image";
          const downloads = app.downloads ?? "N/A";
          const avgRating = app.ratingAvg ?? app.rating ?? "N/A";

          return (
            <Link
              to={`/apps/${app.id ?? index}`}
              key={app.id ?? index}
              className="block"
            >
              <div className="border rounded-lg p-4 shadow-sm flex flex-col transform transition duration-200 ease-out hover:shadow-lg hover:scale-105 hover:bg-gray-50 cursor-pointer">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-40 object-cover rounded mb-3"
                />

                <h3 className="text-lg font-semibold mb-1">{title}</h3>

                <div className="mt-auto text-sm text-gray-700 flex justify-between">
                  <div className="flex items-center">
                    <div>
                      <IoDownload />{" "}
                    </div>
                    <div>{downloads}</div>
                  </div>
                  <div className="flex items-center">
                    <div>
                      <IoIosStar />
                    </div>
                    <div>{avgRating}</div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default AppDetails;
