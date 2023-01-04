import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import styles from "./style.module.scss";

import { useJarData } from "../../store/hooks";

interface IJarCardProps {
  address: string;
}

const JarCard: FC<IJarCardProps> = ({ address }) => {
  //const provider = new ethers.providers.Web3Provider(window.ethereum);
  //const jarContract: Web3Jar = useContract(address, ContractNames.WEB3_JAR);
  const jar = useJarData(address);

  /*const [jarName, setJarName] = useState<string>();
          const [targetAmount, setTargetAmount] = useState<number>();
          const [raisedAmount, setRaisedAmount] = useState<number>();
          const [description, setDescription] = useState<string>();*/

  /*useEffect(() => {
            (async () => {
              try {
                const jarNamePromise = jarContract.jarName();
                const targetAmountPromise = jarContract.target();
                const raisedAmountPromise = provider.getBalance(address);
                const descriptionPromise = jarContract.description();
        
                const [jarName, targetAmount, raisedAmount, description] =
                  await Promise.all([
                    jarNamePromise,
                    targetAmountPromise,
                    raisedAmountPromise,
                    descriptionPromise,
                  ]);
        
                setJarName(jarName);
                setTargetAmount(Number(ethers.utils.formatEther(targetAmount)));
                setRaisedAmount(Number(ethers.utils.formatEther(raisedAmount)));
                setDescription(description);
              } catch (e) {
                console.log(e);
              }
            })();
          }, [address]);*/

  return (
    <div className={styles.jarCard}>
      <NavLink className={styles.navLink} to={`/jar/${address}`}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.name}>🫙 {jar?.jarName}</h2>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>{jar?.description}</p>
          </div>

          <h3 className={styles.raisedAmount}>
            💵 Raised amount: {jar?.balance}/{jar?.target} ETH
          </h3>
        </div>
      </NavLink>
    </div>
  );
};

export default JarCard;
