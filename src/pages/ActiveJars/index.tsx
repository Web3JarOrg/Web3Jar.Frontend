import React, { FC, useEffect, useState } from "react";

import styles from "./style.module.scss";

import Alert from "../../components/Alert";
import JarCard from "../../components/JarCard";
import JarCardContainer from "../../components/JarCardContainer";
import SearchBar from "../../components/SearchBar";
import { JarType } from "../../store/actions/jars.actions";
import { useJars } from "../../store/hooks";

const ActiveJars: FC = () => {
  const jars = useJars();
  const [searchableValue, setSearchableValue] = useState<string>("");
  const [filteredJars, setFilteredJars] = useState<JarType[]>();

  useEffect(() => {
    const activeJars = jars.filter((j) => j.isActive);
    const res = activeJars.filter((a) => {
      if (!searchableValue) return true;
      return (
        a.jarName.toLowerCase().includes(searchableValue.toLowerCase()) ||
        a.address.toLowerCase().includes(searchableValue.toLowerCase())
      );
    });

    setFilteredJars(res);
  }, [searchableValue, jars]);

  return (
    <div className={styles.activeJars}>
      <SearchBar
        setSearchableValue={setSearchableValue}
        searchableValue={searchableValue}
      />
      {filteredJars?.length ? (
        <JarCardContainer>
          {filteredJars.map((jar) => (
            <JarCard address={jar.address} key={jar.address} />
          ))}
        </JarCardContainer>
      ) : (
        <Alert text={"No active jars found"} />
      )}
    </div>
  );
};

export default ActiveJars;
