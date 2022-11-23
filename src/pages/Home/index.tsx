import React, { FC, useEffect } from "react";

import useWallet from "../../hooks/useWallet";

const Home: FC = () => {
  const { connectWallet, disconnectWallet, account } = useWallet();

  useEffect(() => {
    console.log("User's account: ", account);
  }, [account]);

  return (
    <div>
      <h1>{account}</h1>
      <button onClick={() => connectWallet()}>connect wallet</button>
      <button onClick={() => disconnectWallet()}>disconnect wallet</button>
    </div>
  );
};

export default Home;
