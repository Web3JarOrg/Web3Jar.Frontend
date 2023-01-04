import { ethers } from "ethers";

import { ContractNames } from "../helpers/contractNames";
import * as factories from '../typechain/factories'

const useContract = (contractAddress: string, contractName: ContractNames) => {
    try {
        const contractFactory = Object.keys(factories).find(key => key === `${contractName}__factory`);
        if (!contractFactory) throw 'Error: Invalid contract name';

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        return (factories as any)[contractFactory].connect(contractAddress, signer || provider);
    } catch (e) {
        console.log(e);
    }
};

export default useContract;