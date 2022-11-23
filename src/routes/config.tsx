import React from "react";
import { RouteObject } from "react-router-dom";

import Home from "../pages/Home";

export const ROUTES_CONFIG: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  /*
    {
    path: "/example",
    element: <Examples />,
    children: [
      { path: ":id", element: <Example /> },
      { path: "/test", element: <Test /> },
    ],
  },
    */
];
