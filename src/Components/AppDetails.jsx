import React from "react";

// Show up to 8 apps in a responsive grid (4 columns on large screens).
function AppDetails({ data }) {
  // Normalize data to an array
  const apps = Array.isArray(data) ? data : data ? [data] : [];

  if (apps.length === 0) {
    return <div className="p-4">No apps to display.</div>;
  }

  return (
    <div className="container mx-auto px-4">
      {/* Responsive grid: 1 col (xs), 2 (sm), 3 (md), 4 (lg) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {apps.slice(0, 8).map((app, index) => {
          const title = app.appTitle || app.title || `App ${index + 1}`;
          const image =
            app.image || "https://via.placeholder.com/300x200?text=No+Image";
          const downloads = app.downloads ?? "N/A";
          const avgRating = app.ratingAvg ?? app.rating ?? "N/A";

          return (
            <div
              key={app.id ?? index}
              className="border rounded-lg p-4 shadow-sm flex flex-col"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover rounded mb-3"
              />

              <h3 className="text-lg font-semibold mb-1">{title}</h3>

              <div className="mt-auto text-sm text-gray-700">
                <div>Downloads: {downloads}</div>
                <div>Avg rating: {avgRating}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AppDetails;
