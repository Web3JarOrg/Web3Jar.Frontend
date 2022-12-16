import { ethers } from "ethers";
import React, { FC, useState } from "react";

import styles from "./style.module.scss";

import Form from "../Form";
import Input from "../Input";

const SearchBar: FC = () => {
    const [jarAddress, setJarAddress] = useState<string>("");
    const [errorText, setErrorText] = useState<string>();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setJarAddress(e.target.value);

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!jarAddress) {
            setErrorText("Error: Enter jar address first");
            return;
        }
        const isValidAddress = ethers.utils.isAddress(jarAddress);
        !isValidAddress
            ? setErrorText("Error: Invaid contract address")
            : setErrorText("");

        setJarAddress("");
    };

    return (
        <>
            <Form handleSubmit={handleSubmit} errorText={errorText} buttonText={'Find jar'}>
                <Input
                    type="text"
                    placeholder="Enter jar address..."
                    value={jarAddress}
                    onChange={handleChange}
                />
            </Form>
            {/*<form onSubmit={handleSubmit} className={styles.inputContainer}>
                <input
                    type={"text"}
                    placeholder="Enter jar address..."
                    value={jarAddress}
                    onChange={handleChange}
                />
                <button className="walletButton" type="submit">
                    Find jar
                </button>
            </form>
            {errorText && <p className={styles.error}>{errorText}</p>}*/}
        </>
    );
};

export default SearchBar;
