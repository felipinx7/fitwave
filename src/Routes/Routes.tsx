import React, { useState } from "react";
import App from "../App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { LoginInfo } from "../pages/LoginInfo";

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/loginInfo",
      element: <LoginInfo/>
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
