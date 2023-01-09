import React, { FC, useEffect } from "react";
import { useRoutes } from "react-router-dom";

import { ROUTES_CONFIG } from "./config";

import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import useWallet from "../hooks/useWallet";
import { getAllJars, getAllJarsData } from "../store/actions/jars.actions";
import { useAppDispatch, useLoader } from "../store/hooks";
import { setIsLoading } from "../store/reducers/loader.reducer";

const RenderRoutes: FC = () => {
  const { account } = useWallet();
  const dispatch = useAppDispatch();
  const loader = useLoader();
  const routes = useRoutes(ROUTES_CONFIG);

  useEffect(() => {
    (async () => {
      try {
        dispatch(setIsLoading(true));
        await Promise.all([dispatch(getAllJarsData()), dispatch(getAllJars())]);
      } catch (e) {
        console.log(e);
      } finally {
        dispatch(setIsLoading(false));
      }
    })();
  }, [account]);

  return (
    <Loader isLoading={loader.isLoading}>
      <>
        <Navbar />
        {routes}
      </>
    </Loader>
  );
};
export default RenderRoutes;
