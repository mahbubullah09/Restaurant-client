import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./Component/Layout/MainLayout";
import Home from "./Component/Home/Home";
import Menu from "./Component/Menu/Menu";
import OurShop from "./Component/Our Shop/OurShop";
import Login from "./Component/Authentication/Login";
import Registration from "./Component/Authentication/Registration";
import AuthProvider from "./provider/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/ourshop",
        element: <PrivateRoute>
          <OurShop />
        </PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/singup",
        element: <Registration />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);