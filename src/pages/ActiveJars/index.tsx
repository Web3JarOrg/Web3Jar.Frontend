import React, { FC, useEffect, useState } from "react";

import styles from "./style.module.scss";

import Alert from "../../components/Alert";
import JarCard from "../../components/JarCard";
import JarCardContainer from "../../components/JarCardContainer";
import SearchBar from "../../components/SearchBar";
import useWallet from "../../hooks/useWallet";
import { getAllJarsData, JarType } from "../../store/actions/jars.actions";
import { useAppDispatch } from "../../store/hooks";

const ActiveJars: FC = () => {
  const dispatch = useAppDispatch();
  const { account } = useWallet();
  const [activeJars, setActiveJars] = useState<JarType[]>();

  useEffect(() => {
    dispatch(getAllJarsData())
      .unwrap()
      .then((jars) => {
        const activeJars = jars.filter((j) => j.isActive);
        setActiveJars(activeJars);
      })
      .catch((e) => console.log(e));
  }, [account, dispatch]);
  /*const mockJars = [
          { address: "123" },
          { address: "123" },
          { address: "123" },
          { address: "123" },
          { address: "123" },
          { address: "123" },
          { address: "123" },
          { address: "123" },
          { address: "123" },
          { address: "123" },
          { address: "123" },
          { address: "123" },
        ];*/
  return (
    <div className={styles.activeJars}>
      {activeJars && activeJars.length ? (
        <>
          <SearchBar />
          <JarCardContainer>
            {activeJars.map((jar) => (
              <JarCard address={jar.address} key={jar.address} />
            ))}
          </JarCardContainer>
        </>
      ) : (
        <Alert text={"No active jars found"} />
      )}
    </div>
  );
};

export default ActiveJars;

// @todo add loader here and on myjar page
