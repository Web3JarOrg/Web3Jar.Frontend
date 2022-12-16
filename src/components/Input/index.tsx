import React, { FC, DetailedHTMLProps, InputHTMLAttributes } from "react";

import styles from "./style.module.scss";

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: FC<InputProps> = (props) => {
    return (
        <>
            <input
                className={styles.input}
                style={props.style}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </>
    )
};

export default Input;