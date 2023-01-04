/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FC, useState } from "react";

import styles from "./style.module.scss";

import Alert from "../../components/Alert";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Loader from "../../components/Loader";
import { WEB3_JAR_FACTORY_ADDRESS } from "../../helpers/constants";
import { ContractNames } from "../../helpers/contractNames";
import useContract from "../../hooks/useContract";
import useWallet from "../../hooks/useWallet";
import { Web3JarFactory } from "../../typechain";

const CreateJar: FC = () => {
    const web3JarFactoryContract: Web3JarFactory = useContract(WEB3_JAR_FACTORY_ADDRESS, ContractNames.WEB3_JAR_FACTORY);
    const { account } = useWallet();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorText, setErrorText] = useState<string>();
    const [targetAmount, setTargetAmount] = useState<number>();
    const [description, setDescription] = useState<string>();
    const [jarName, setJarName] = useState<string>();

    const handleChangeTargetAmount = (e: React.ChangeEvent<HTMLInputElement>) => setTargetAmount(Number(e.target.value));

    const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value);
    const handleChangeJarName = (e: React.ChangeEvent<HTMLInputElement>) => setJarName(e.target.value);
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!targetAmount || !account || !jarName || !description) {
            setErrorText('Error: Fill all fields first');
            return;
        }
        setIsLoading(true);
        web3JarFactoryContract.createJar(targetAmount, account, jarName, description)
            .then((tx) => tx.wait())
            .then(() => setIsLoading(false))
            .catch(e => {
                console.log(e);
                setIsLoading(false);
            });
    };

    return (
        <Loader isLoading={isLoading}>
            <div className={styles.createJar}>
                {account ?
                    (
                        <Form handleSubmit={handleSubmit} errorText={errorText} buttonText={'Create jar'}>
                            <Input
                                type="text"
                                placeholder="Enter jar name..."
                                value={jarName}
                                onChange={handleChangeJarName}
                            />
                            <Input
                                type="text"
                                placeholder="Enter description..."
                                value={description}
                                onChange={handleChangeDescription}
                            />
                            <Input
                                type="number"
                                placeholder="Enter fundraising target amount..."
                                value={targetAmount}
                                onChange={handleChangeTargetAmount}
                            />
                        </Form>
                    ) : (
                        <Alert text={'Connect wallet first'}/>
                    )}
            </div>
        </Loader>
    )
};

export default CreateJar;

// @todo error text to input component not to form later bro
// @todo validation: jarname <= 19; desc <= 120 symbols