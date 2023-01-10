import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import styles from "./style.module.scss";

import { useJarData } from "../../store/hooks";

interface IJarCardProps {
  address: string;
}

const JarCard: FC<IJarCardProps> = ({ address }) => {
  const jar = useJarData(address);

  return (
    <div className={styles.jarCard}>
      <NavLink
        className={styles.navLink}
        to={`/Web3Jar.Frontend/jar/${address}`}
      >
        <div className={styles.contentWrapper}>
          <h2 className={styles.name}>🫙 {jar?.jarName}</h2>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>{jar?.description}</p>
          </div>

          <h3 className={styles.raisedAmount}>
            💵 Raised amount: {jar?.balance}/{jar?.target} ETH
          </h3>
        </div>
      </NavLink>
    </div>
  );
};

export default JarCard;
