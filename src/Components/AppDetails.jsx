import React from "react";
import { IoDownload } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
function AppDetails({ data }) {
  const [search, setSearch] = React.useState("");
  const apps = Array.isArray(data) ? data : data ? [data] : [];

  if (apps.length === 0) {
    return <div className="p-4">No apps to display.</div>;
  }

  const filteredApps = apps.filter((app) => {
    const title = app.appTitle || app.title || "";
    return title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <div className="font-bold text-2xl py-4">
          ({filteredApps.length}) Apps_Found
        </div>
        <div>
          <label className="input flex items-center gap-2">
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
            <input
              type="search"
              required
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none"
            />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
        {filteredApps.slice(0, 30).map((app, index) => {
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
              <div className=" rounded-lg p-4 shadow-md flex flex-col transform transition duration-200 ease-out hover:shadow-lg hover:scale-105 hover:bg-gray-50 cursor-pointer">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-40 object-cover rounded mb-3"
                />

                <h3 className="text-lg font-semibold mb-1 text-center">
                  {title}
                </h3>

                <div className="mt-auto text-sm text-gray-700 flex justify-between">
                  <div className="flex items-center text-[#47d390] text-xl">
                    <div>
                      <IoDownload />{" "}
                    </div>
                    <div>{downloads}</div>
                  </div>
                  <div className="flex items-center text-[#632ee3] text-xl">
                    <div className="">
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
