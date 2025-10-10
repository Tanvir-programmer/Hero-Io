import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import Layouts from "../Layouts/Layouts.jsx";
import AllApps from "../Components/AllApps.jsx";
import AppDetailPage from "../Pages/AppDetailPage.jsx";
import Installation from "../Components/Installation.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "apps",
        element: <AllApps />,
        loader: () => fetch("../data.json"),
      },
      {
        path: "installation",
        element: <Installation />,
      },
      {
        path: "apps/:id",
        element: <AppDetailPage />,
        loader: async ({ params }) => {
          const res = await fetch("../data.json");
          if (!res.ok)
            throw new Response("Failed to load data", { status: 404 });
          const list = await res.json();
          return list.find((a) => String(a.id) === String(params.id)) || null;
        },
      },
    ],
  },
]);

export default router;
