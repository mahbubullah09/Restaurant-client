import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./Component/Layout/MainLayout";
import Home from "./Component/Home/Home";
import Menu from "./Component/Menu/Menu";
import OurShop from "./Component/Our Shop/OurShop";
import Login from "./Component/Authentication/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/menu",
        element: <Menu/>,
      },
      {
        path: "/ourshop",
        element: <OurShop/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);