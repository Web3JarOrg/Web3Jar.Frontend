import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import MetamaskProvider from "./components/MetamaskProvider";
import RenderRoutes from "./routes/RenderRoutes";

const App: FC = () => {
  const getLibrary = (
    provider:
      | ethers.providers.ExternalProvider
      | ethers.providers.JsonRpcFetchFunc
  ) => {
    return new ethers.providers.Web3Provider(provider);
  };

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetamaskProvider>
        <BrowserRouter>
          <RenderRoutes />
        </BrowserRouter>
      </MetamaskProvider>
    </Web3ReactProvider>
  );
};

export default App;
