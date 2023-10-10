import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import MyJewelry from "../pages/MyJewelry/MyJewelry";
import AllJewelry from "../pages/AllJewelry/AllJewelry";
import AddJewelry from "../pages/AddJewelry/AddJewelry";
import PrimaryLayout from "../layouts/PrimaryLayout";
import NotFound from "../pages/NotFound/NotFound";
import SignIn from "../pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "add-jewelry", element: <PrivateRoute><AddJewelry /></PrivateRoute> },
      { path: "all-jewelry", element: <AllJewelry /> },
      { path: "my-jewelry", element: <PrivateRoute><MyJewelry /></PrivateRoute> },
      { path: "dashboard", element: <PrivateRoute><Dashboard /></PrivateRoute> },
      { path: "blogs", element: <Blogs /> },
      { path: "signin", element: <SignIn /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />
  }
]);
