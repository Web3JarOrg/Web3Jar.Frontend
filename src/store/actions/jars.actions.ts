import { createAsyncThunk } from "@reduxjs/toolkit";
import { ethers } from "ethers";

import { WEB3_JAR_FACTORY_ADDRESS } from "../../helpers/constants";
import { ContractNames } from "../../helpers/contractNames";
import useContract from "../../hooks/useContract";
import { Web3Jar, Web3JarFactory } from "../../typechain";

export type JarType = {
  address: string;
  owner: string;
  jarName: string;
  target: number;
  description: string;
  isActive: boolean;
  balance: number;
};

const getJars = async (): Promise<Web3Jar[]> => {
  const web3JarFactoryContract: Web3JarFactory = useContract(
    WEB3_JAR_FACTORY_ADDRESS,
    "Web3JarFactory"
  );
  const allJarsAddresses = await web3JarFactoryContract.getAllJars();
  return allJarsAddresses.map(
    (a) => useContract(a, ContractNames.WEB3_JAR) as Web3Jar
  );
};

export const getAllJars = createAsyncThunk<Web3Jar[]>(
  "getAllJars",
  async () => {
    return await getJars();
  }
);
export const getAllJarsData = createAsyncThunk<JarType[]>(
  "getAllJarsData",
  async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const allJars = await getJars();

    const jarsData = allJars.map(async (j) => {
      const address = j.address;
      const ownerPromise = j.owner();
      const jarNamePromise = j.jarName();
      const targetPromise = j.target();
      const descriptionPromise = j.description();
      const isActivePromise = j.isActive();
      const balancePromise = provider.getBalance(address);

      const [owner, jarName, target, description, isActive, balance] =
        await Promise.all([
          ownerPromise,
          jarNamePromise,
          targetPromise,
          descriptionPromise,
          isActivePromise,
          balancePromise,
        ]);
      return {
        address,
        owner,
        jarName,
        target: Number(ethers.utils.formatEther(target)),
        description,
        isActive,
        balance: Number(ethers.utils.formatEther(balance)),
      };
    });
    return await Promise.all(jarsData);
  }
);
