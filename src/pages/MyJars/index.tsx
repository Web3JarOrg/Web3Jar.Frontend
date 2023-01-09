import React, { FC } from "react";

import styles from "./style.module.scss";

import Alert from "../../components/Alert";
import JarCard from "../../components/JarCard";
import JarCardContainer from "../../components/JarCardContainer";
import useWallet from "../../hooks/useWallet";
import { useJars } from "../../store/hooks";

const MyJars: FC = () => {
  const { account } = useWallet();
  const myJars = useJars().filter((j) => j.owner === account);

  return (
    <div className={styles.myJars}>
      {myJars.length ? (
        <JarCardContainer>
          {myJars.map((jar) => (
            <JarCard address={jar.address} key={jar.address} />
          ))}
        </JarCardContainer>
      ) : (
        <Alert text={!account ? "Connect wallet first" : "No jars found"} />
      )}
    </div>
  );
};

export default MyJars;
