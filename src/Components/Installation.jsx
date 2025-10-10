import React, { useEffect, useState } from "react";
import { getFromDB, removeFromDB, addToDB } from "../Utility/addToDB";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("title");

  useEffect(() => {
    const storedData = getFromDB("installedApps") || [];
    setInstalledApps(storedData);
  }, []);

  const handleRemove = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updated);

    if (updated.length > 0) {
      addToDB("installedApps", updated);
    } else {
      removeFromDB("installedApps");
    }

    toast.success("App removed successfully!");
  };

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };

  const sortedApps = [...installedApps].sort((a, b) => {
    const fieldA = a[sortCriteria].toUpperCase();
    const fieldB = b[sortCriteria].toUpperCase();
    if (fieldA < fieldB) return -1;
    if (fieldA > fieldB) return 1;
    return 0;
  });

  if (installedApps.length === 0) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-6">Installed Apps</h1>
        <p className="text-gray-500 mt-10">No installed apps found.</p>
        <ToastContainer position="bottom-right" autoClose={2000} />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-center">Installed Apps</h1>

        <div className="relative z-10 flex ml-auto">
          <label
            htmlFor="sort"
            className="mr-2 text-gray-700 font-medium self-center"
          >
            Sort By:
          </label>
          <select
            id="sort"
            value={sortCriteria}
            onChange={handleSortChange}
            className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="title">App Title (A-Z)</option>
            <option value="companyName">Company Name (A-Z)</option>
          </select>
        </div>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedApps.map((app) => (
          <li
            key={app.id}
            className="p-4 border border-gray-300 rounded-lg shadow-md flex flex-col justify-between bg-white hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-16 h-16 object-cover rounded-md border"
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/64")
                  }
                />
                <div>
                  <h2 className="text-xl font-semibold">{app.title}</h2>
                  <p className="text-gray-500 text-sm">{app.companyName}</p>
                </div>
              </div>

              <button
                onClick={() => handleRemove(app.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-colors"
              >
                Uninstall
              </button>
            </div>
          </li>
        ))}
      </ul>

      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
};

export default Installation;
