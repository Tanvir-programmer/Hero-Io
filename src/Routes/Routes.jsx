import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Home from "../Pages/Home.jsx";
import Layouts from "../Layouts/Layouts.jsx";
import AllApps from "../Components/AllApps.jsx";
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
        loader: () => fetch("./data.json"),
      },
    ],
  },
]);
export default router;
