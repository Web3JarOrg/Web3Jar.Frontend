import React, { FC, PropsWithChildren } from "react";

import styles from "./style.module.scss";

const JarCardContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default JarCardContainer;
