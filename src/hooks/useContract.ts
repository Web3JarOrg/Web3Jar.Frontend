import { ethers } from "ethers";

import useWallet from "./useWallet";

import { ContractNames } from "../helpers/contractNames";
import * as factories from "../typechain/factories";

// Usage example:
// const contract = useContract<ContractType>(CONTRACT_ADDRESS, ContractNames.ContractName);
function useContract<T>(
  contractAddress: string,
  contractName: ContractNames
): T | undefined {
  const { account } = useWallet();
  const [contract] = Object.entries(factories).map(([key, value]) => {
    if (key === `${contractName}__factory`) return value;
  });

  if (!contract) return;

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  return contract.connect(contractAddress, account ? signer : provider) as T;
}

export default useContract;
