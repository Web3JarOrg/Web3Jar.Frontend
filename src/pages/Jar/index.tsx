import React, { FC } from "react";
import { useParams } from "react-router-dom";

import styles from "./style.module.scss";

import LeftSide from "../../components/JarSides/LeftSide";
import RightSide from "../../components/JarSides/RightSide";
import { useJarData } from "../../store/hooks";

const Jar: FC = () => {
  const { address } = useParams();
  const jar = useJarData(address || "");

  return (
    <div className={styles.jarPage}>
      <div className={styles.wrapper}>
        <LeftSide
          owner={jar?.owner || ""}
          jarName={jar?.jarName || ""}
          target={jar?.target || 0}
          description={jar?.description || ""}
          balance={jar?.balance || 0}
        />
        <RightSide address={address || ""} />
      </div>
    </div>
  );
};

export default Jar;
