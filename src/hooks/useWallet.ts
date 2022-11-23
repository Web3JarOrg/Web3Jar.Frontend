import { useWeb3React } from "@web3-react/core";

import { injected } from "../helpers/connectors";

const useWallet = (connector = injected) => {
  const { activate, deactivate, account } = useWeb3React();

  const connectWallet = async () => {
    try {
      await activate(connector);
      localStorage.setItem("disconnect", "false");
    } catch (e) {
      console.log(e);
    }
  };

  const disconnectWallet = () => {
    try {
      deactivate();
      localStorage.setItem("disconnect", "true");
    } catch (e) {
      console.log(e);
    }
  };

  return { connectWallet, disconnectWallet, account };
};

export default useWallet;
