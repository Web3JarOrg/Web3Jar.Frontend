import React, { FC, useEffect, useState } from "react";

import styles from "./style.module.scss";

import Alert from "../../components/Alert";
import JarCard from "../../components/JarCard";
import JarCardContainer from "../../components/JarCardContainer";
import useWallet from "../../hooks/useWallet";
import { getAllJarsData, JarType } from "../../store/actions/jars.actions";
import { useAppDispatch } from "../../store/hooks";

const MyJars: FC = () => {
  const { account } = useWallet();
  const [myJars, setMyJars] = useState<JarType[]>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!account) return;

    dispatch(getAllJarsData())
      .unwrap()
      .then((jars) => {
        const myJars = jars.filter((j) => j.owner === account);
        setMyJars(myJars);
      })
      .catch((e) => console.log(e));
  }, [account]);

  return (
    <div className={styles.myJars}>
      {myJars && myJars.length ? (
        <JarCardContainer>
          {myJars.map((jar) => (
            <JarCard address={jar.address} key={jar.address} />
          ))}
        </JarCardContainer>
      ) : (
        <Alert text={"No jars found"} />
      )}
    </div>
  );
};

export default MyJars;
