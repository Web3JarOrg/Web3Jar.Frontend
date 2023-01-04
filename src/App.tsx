import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import MetamaskProvider from "./components/MetamaskProvider";
import ReduxProvider from "./providers/ReduxProvider";
import RenderRoutes from "./routes/RenderRoutes";

import "./styles/main.scss";

const App: FC = () => {
  const getLibrary = (
    provider:
      | ethers.providers.ExternalProvider
      | ethers.providers.JsonRpcFetchFunc
  ) => {
    return new ethers.providers.Web3Provider(provider);
  };

  return (
    <ReduxProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <MetamaskProvider>
          <BrowserRouter>
            <RenderRoutes />
          </BrowserRouter>
        </MetamaskProvider>
      </Web3ReactProvider>
    </ReduxProvider>
  );
};

export default App;
