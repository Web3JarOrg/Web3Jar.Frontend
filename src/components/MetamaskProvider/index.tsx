import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import React, { FC, useEffect, useState } from "react";

import { injected } from "../../helpers/connectors";
import { CHAIN_ID_MAIN } from "../../helpers/constants";
import useWallet from "../../hooks/useWallet";

interface IMetamaskProviderProps {
    children: JSX.Element;
};

const MetamaskProvider: FC<IMetamaskProviderProps> = ({ children }) => {
    const {
        active: isNetworkActive,
        error: networkError,
        error,
    } = useWeb3React();

    const { connectWallet } = useWallet();

    const [isLoaded, setIsLoaded] = useState(false);
    const isWrongNetwork = error && error instanceof UnsupportedChainIdError;

    useEffect(() => {
        if (isWrongNetwork) {
            window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: `0x${CHAIN_ID_MAIN}` }],
            });
        }

        const connectWalletOnPageLoad = async () => {
            try {
                const isAuthorized = await injected.isAuthorized();
                setIsLoaded(true);
                const isDisconnected = localStorage.getItem("disconnect");
                if (
                    isAuthorized &&
                    !isNetworkActive &&
                    !networkError &&
                    isDisconnected !== "true"
                ) {
                    connectWallet();
                }
            } catch (e) {
                console.log(e);
            } finally {
                setIsLoaded(true);
            }
        };
        connectWalletOnPageLoad();
    }, [isNetworkActive, networkError]);

    return isLoaded ? children : <></>;
};

export default MetamaskProvider;
