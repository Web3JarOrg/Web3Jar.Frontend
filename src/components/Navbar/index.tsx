import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import styles from "./style.module.scss";

import useWallet from "../../hooks/useWallet";
import Account from "../Account";

const Navbar: FC = () => {
    const { connectWallet, account } = useWallet();

    return (
        <nav className={styles.nav}>
            <NavLink to={"/"} end>
                <h4>web3jar 💵🫙</h4>
            </NavLink>
            <div className={styles.navLinks}>
                <NavLink
                    to={"/"}
                    end
                    className={({ isActive }) => (isActive ? styles.activePage : "")}
                >
                    <p>Active Jars</p>
                </NavLink>
                <NavLink
                    to={"/my-jars"}
                    className={({ isActive }) => (isActive ? styles.activePage : "")}
                >
                    <p>My Jars</p>
                </NavLink>
                <NavLink
                    to={"/create-jar"}
                    className={({ isActive }) => (isActive ? styles.activePage : "")}
                >
                    <p>Create Jar</p>
                </NavLink>
            </div>
            {!account ? (
                <button className="walletButton" onClick={connectWallet}>
                    Connect wallet
                </button>
            ) : (
                <Account account={account}/>
            )}
        </nav>
    );
};

export default Navbar;
