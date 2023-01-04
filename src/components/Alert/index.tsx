import React, { FC } from 'react';

import styles from './style.module.scss';

interface IAlertProps {
    text: string;
}

const Alert: FC<IAlertProps> = ({ text }) => {
    return (
        <div className={styles.alertWrapper}>
            <h1 className={styles.alert}>{text}</h1>
        </div>
    );
};

export default Alert;