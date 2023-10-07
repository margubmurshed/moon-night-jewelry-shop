import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import MyJewelry from "../pages/MyJewelry/MyJewelry";
import AllJewelry from "../pages/AllJewelry/AllJewelry";
import AddJewelry from "../pages/AddJewelry/AddJewelry";
import PrimaryLayout from "../layouts/PrimaryLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "add-jewelry", element: <AddJewelry /> },
      { path: "all-jewelry", element: <AllJewelry /> },
      { path: "my-jewelry", element: <MyJewelry /> },
      { path: "blogs", element: <Blogs /> },
    ],
  },
]);
