import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Home from "../Pages/Home.jsx";
import Layouts from "../Layouts/Layouts.jsx";
import AllApps from "../Components/AllApps.jsx";
import AppDetailPage from "../Pages/AppDetailPage.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,

        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        Component: AllApps,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/apps/:id",
        Component: AppDetailPage,

        loader: async ({ params }) => {
          const res = await fetch("./data.json");
          const list = await res.json();

          const id = params.id;
          const found = list.find((a) => String(a.id) === String(id));
          return found || null;
        },
      },
    ],
  },
]);
export default router;
