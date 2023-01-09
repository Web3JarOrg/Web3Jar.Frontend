import { createAsyncThunk } from "@reduxjs/toolkit";
import { ethers } from "ethers";

import { WEB3_JAR_FACTORY_ADDRESS } from "../../helpers/constants";
import {
    Web3Jar,
    Web3Jar__factory,
    Web3JarFactory__factory,
} from "../../typechain";

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
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const web3JarFactoryContract = Web3JarFactory__factory.connect(
            WEB3_JAR_FACTORY_ADDRESS,
            provider
        );
        const allJarsAddresses = await web3JarFactoryContract.getAllJars();
        return allJarsAddresses.map((a) => Web3Jar__factory.connect(a, provider));
    } catch (e) {
        console.log(e);
        return [];
    }
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
