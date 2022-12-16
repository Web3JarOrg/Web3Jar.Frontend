/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FC, useState } from "react";

import styles from "./style.module.scss";

import Form from "../../components/Form";
import Input from "../../components/Input";
import useWallet from "../../hooks/useWallet";

const CreateJar: FC = () => {
    const { account } = useWallet();

    const [errorText, setErrorText] = useState<string>();
    const [targetAmount, setTargetAmount] = useState<number>();
    const [description, setDescription] = useState<string>();
    const [jarName, setJarName] = useState<string>();
    const [name, setName] = useState<string>();

    const handleChangeTargetAmount = () => {

    };

    const handleChangeDescription = () => {

    };
    const handleChangeJarName = () => {

    };

    const handleChangeName = () => {
    };

    const handleSubmit = () => {
    };

    return <div className={styles.createJar}>
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
                    <Input
                        type="text"
                        placeholder="Enter your name (optional)..."
                        value={name}
                        onChange={handleChangeName}
                    />
                </Form>
            ) : (
                <div className={styles.alertWrapper}>
                    <h1 className={styles.alert}>Connect wallet first</h1>
                </div>
            )}
    </div>;
};

export default CreateJar;
