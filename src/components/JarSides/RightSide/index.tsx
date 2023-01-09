import { ethers } from "ethers";
import React, { FC, useState } from "react";

import styles from "./style.module.scss";

import { ContractNames } from "../../../helpers/contractNames";
import useContract from "../../../hooks/useContract";
import useWallet from "../../../hooks/useWallet";
import EthIcon from "../../../images/eth.svg";
import { useAppDispatch } from "../../../store/hooks";
import { setIsLoading } from "../../../store/reducers/loader.reducer";
import { Web3Jar } from "../../../typechain";

type RightSideProps = {
  address: string;
};

const RightSide: FC<RightSideProps> = ({ address }) => {
  const { account } = useWallet();
  const web3Jar = useContract<Web3Jar>(address, ContractNames.WEB3_JAR);
  const dispatch = useAppDispatch();

  const [amountToDonate, setAmountToDonate] = useState<number>(0);
  const handleChangeAmountToDonate = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAmountToDonate(Number(e.target.value));
  };

  const handleClickIncreaseAmountToDonate = (amount: number) => {
    setAmountToDonate((prevState) => prevState + amount);
  };

  const donate = async () => {
    if (!web3Jar) return;

    try {
      dispatch(setIsLoading(true));
      const donateTx = await web3Jar.donate({
        value: ethers.utils.parseEther(amountToDonate.toString()),
      });
      await donateTx.wait();
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return (
    <div className={styles.rightSide}>
      <div className={styles.inputAmountContainer}>
        <div className={styles.row}>
          <h4>Сума поповнення </h4>
          <img className={styles.ethIcon} src={EthIcon} alt={""} />{" "}
        </div>
        <input
          value={amountToDonate}
          placeholder={amountToDonate + " ETH"}
          type="number"
          onChange={handleChangeAmountToDonate}
        />
        <div className={styles.buttonsContainer}>
          <button onClick={() => handleClickIncreaseAmountToDonate(1)}>
            +1
          </button>
          <button onClick={() => handleClickIncreaseAmountToDonate(5)}>
            +5
          </button>
          <button onClick={() => handleClickIncreaseAmountToDonate(10)}>
            +10
          </button>
        </div>
      </div>
      <div className={styles.inputsContainer}>
        <input placeholder="Ваше ім'я (необв'язково)" type="text"></input>
        <input placeholder="Коментар (необв'язково)" type="text"></input>
        <button disabled={!account} onClick={donate}>
          {!account ? "Connect wallet" : "Donate With Metamask 🦊"}
        </button>
      </div>
    </div>
  );
};

export default RightSide;
