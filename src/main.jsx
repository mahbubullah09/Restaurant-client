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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cart from "./Component/Cart/Cart";
import UserDash from "./Component/Layout/userDash";
import MangeUsers from "./Component/AdminDash/Users/MangeUsers";
import AdminRoute from "./PrivateRoute/AdminRoute";
import AddItem from "./Component/AdminDash/ManageItems/AddItem";
import ManageItems from "./Component/AdminDash/ManageItems/MnageItems";
import UpdateItem from "./Component/AdminDash/ManageItems/UpdateItem";
import Payment from "./Component/userDash/Payment";
import AdminHome from "./Component/AdminDash/AdminHome";
import UserHome from "./Component/userDash/UserHome";



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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><UserDash/>,</PrivateRoute>,
    children: [

      {
        path: 'userhome',
        element: <UserHome/>
      },
      {
        path: 'cart',
        element: <Cart/>
      },
      {
        path: 'payment',
        element: <Payment/>
      },

      //adminRoute
      {
        path: 'adminhome',
        element: <AdminRoute><AdminHome/></AdminRoute>
      },
      {
        path: 'manegeusers',
        element: <AdminRoute><MangeUsers/></AdminRoute>
      },
      {
        path: 'additem',
        element: <AdminRoute><AddItem/></AdminRoute>
      },
      {
        path: 'manageitems',
        element: <AdminRoute><ManageItems/></AdminRoute>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
    ]
  }
]);

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>

  </React.StrictMode>
);