import React, { FC } from "react";
import "./style.scss";
import ClipLoader from "react-spinners/ClipLoader";

interface ILoaderProps {
    children: JSX.Element;
    isLoading: boolean;
};

const Loader: FC<ILoaderProps> = ({ children, isLoading }) => {
    return (
        <>
            <div className={isLoading ? "loader-wrapper" : ""}>
                <ClipLoader size={55} color="#ffffff" loading={isLoading}/>
            </div>
            {children}
        </>
    );
};

export default Loader;
