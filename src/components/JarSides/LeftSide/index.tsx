import React, { FC } from "react";

import styles from "./style.module.scss";

import CollectedIcon from "../../../images/collected.svg";
import JarImg from "../../../images/jar.png";
import TargetIcon from "../../../images/target.svg";
import { shortenAddr } from "../../../utils/shortenAddress";

type LeftSideProps = {
  owner: string;
  jarName: string;
  target: number;
  description: string;
  balance: number;
};

const LeftSide: FC<LeftSideProps> = ({
  owner,
  jarName,
  target,
  description,
  balance,
}) => {
  const shortenedAddress = shortenAddr(owner);
  return (
    <div className={styles.leftSide}>
      <h3 className={styles.title}>web3jar</h3>
      <img src={JarImg} alt="" />
      <div className={styles.fundraisingInfo}>
        <p className={styles.owner}>{shortenedAddress} збирає</p>
        <h3 className={styles.jarName}>{jarName}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.statsSide}>
          <img src={CollectedIcon} alt={""} />
          <div className={styles.data}>
            <p className={styles.label}>Накопичено</p>
            <p className={styles.value}>{balance} ETH</p>
          </div>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.statsSide}>
          <img src={TargetIcon} />
          <div className={styles.data}>
            <p className={styles.label}>Ціль</p>
            <p className={styles.value}>{target} ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
