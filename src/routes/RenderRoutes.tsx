import React, { FC } from "react";
import { useRoutes } from "react-router-dom";

import { ROUTES_CONFIG } from "./config";

import Navbar from "../components/Navbar";

const RenderRoutes: FC = () => {
  const routes = useRoutes(ROUTES_CONFIG);
  return (
    <>
      <Navbar />
      {routes}
    </>
  );
};

export default RenderRoutes;
