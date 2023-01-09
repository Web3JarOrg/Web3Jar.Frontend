import React, { FC, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import styles from "./style.module.scss";

import useWallet from "../../hooks/useWallet";
import { shortenAddr } from "../../utils/shortenAddress";

interface IAccountProps {
  account: string;
}

const Account: FC<IAccountProps> = ({ account }) => {
  const { disconnectWallet } = useWallet();
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleClick = () => setIsOpened((prevState) => !prevState);
  const shortenedAddress = shortenAddr(account);

  return (
    <div
      style={isOpened ? { borderBottom: 0, borderRadius: "8px 8px 0 0" } : {}}
      className={styles.account}
    >
      <div className={styles.wrapper}>
        <p>{shortenedAddress}</p>
        <MdOutlineKeyboardArrowDown
          className={styles.icon}
          size={"25px"}
          onClick={handleClick}
        />
      </div>
      {isOpened && (
        <div className={styles.dropdown}>
          <button className="walletButton" onClick={disconnectWallet}>
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
};

export default Account;
