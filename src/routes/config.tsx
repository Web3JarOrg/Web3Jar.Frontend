import React from "react";
import { RouteObject } from "react-router-dom";

import ActiveJars from "../pages/ActiveJars";
import CreateJar from "../pages/CreateJar";
import Jar from "../pages/Jar";
import MyJars from "../pages/MyJars";

export const ROUTES_CONFIG: RouteObject[] = [
  {
    path: "/",
    element: <ActiveJars />,
  },
  {
    path: "/my-jars",
    element: <MyJars />,
  },
  {
    path: "/jar/:address",
    element: <Jar />,
  },
  {
    path: "/create-jar",
    element: <CreateJar />,
  },
];
