import React from "react";
import { RouteObject } from "react-router-dom";

import ActiveJars from "../pages/ActiveJars";
import CreateJar from "../pages/CreateJar";
import Jar from "../pages/Jar";
import MyJars from "../pages/MyJars";

export const ROUTES_CONFIG: RouteObject[] = [
  {
    path: "Web3Jar.Frontend",
    element: <ActiveJars />,
  },
  {
    path: "Web3Jar.Frontend/my-jars",
    element: <MyJars />,
  },
  {
    path: "Web3Jar.Frontend/jar/:address",
    element: <Jar />,
  },
  {
    path: "Web3Jar.Frontend/create-jar",
    element: <CreateJar />,
  },
];
