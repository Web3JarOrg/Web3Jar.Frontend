import React, { FC } from "react";
import "./style.scss";
import ClipLoader from "react-spinners/ClipLoader";

type LoaderProps = {
  children: JSX.Element;
  isLoading: boolean;
};

const Loader: FC<LoaderProps> = ({ children, isLoading }) => {
  return (
    <>
      <div className={isLoading ? "loader-wrapper" : ""}>
        <ClipLoader size={55} color="#ffffff" loading={isLoading} />
      </div>
      {children}
    </>
  );
};

export default Loader;
