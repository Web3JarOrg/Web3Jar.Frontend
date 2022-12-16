import React, { FC } from "react";

import styles from "./style.module.scss";

interface IFormProps {
    handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
    errorText?: string;
    buttonText: string;
    children: JSX.Element | JSX.Element[];
}

const Form: FC<IFormProps> = ({ handleSubmit, children, errorText, buttonText }) => {
        return (
            <>
                <form onSubmit={handleSubmit} className={styles.form}
                      style={Array.isArray(children) ? { flexDirection: 'column', alignItems: 'center' } : {}}>
                    {children}
                    <button className="walletButton" type="submit">
                        {buttonText}
                    </button>
                </form>
                {errorText && <p className={styles.error}>{errorText}</p>}
            </>
        )
    }
;

export default Form;