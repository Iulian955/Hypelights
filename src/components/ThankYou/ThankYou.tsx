import React from "react";
import styles from "./ThankYou.module.scss";

const ThankYou = () => {
  return (
    <div className={styles.thankYouContainer}>
      <div className={styles.headTitle}>
        <p className={styles.green}> Multumim ca ne-ati contactat! </p>
        <p> Revenim catre dvs. in cel mai scurt timp !! </p>
      </div>
    </div>
  );
};

export default ThankYou;
