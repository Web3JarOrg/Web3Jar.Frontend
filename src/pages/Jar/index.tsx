import React, { FC } from "react";
import { useParams } from "react-router-dom";

const Jar: FC = () => {
  const { address } = useParams();
  //const jar = useJar(address || "");
  //@todo find data using .filter
  return <div>Jar</div>;
};

export default Jar;
