import { InjectedConnector } from "@web3-react/injected-connector";

import { CHAIN_ID_GOERLI, CHAIN_ID_MAIN } from "./constants";

// Metamask
export const injected = new InjectedConnector({
  supportedChainIds: [CHAIN_ID_MAIN, CHAIN_ID_GOERLI],
});
