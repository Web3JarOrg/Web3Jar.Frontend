import React, {FC} from "react";

import styles from "./style.module.scss";

import SearchBar from "../../components/SearchBar";

const ActiveJars: FC = () => {
  return (
    <div className={styles.activeJars}>
      <SearchBar />
    </div>
  );
};

export default ActiveJars;
