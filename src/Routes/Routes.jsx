import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Home from "../Pages/Home.jsx";
import Layouts from "../Layouts/Layouts.jsx";
import Allapps from "../Components/Allapps.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    children: [
      {
        index: true,
        // loader: () => fetch("/booksData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        Component: Allapps,
      },
    ],
  },
]);
export default router;
