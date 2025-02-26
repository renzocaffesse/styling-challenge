import React from "react";
import styles from "./FirmFacts.module.scss";
import FirmFactCard from "../FirmFactCard";

const FirmFacts = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Firm Facts</h2>
      <hr className={styles.separator} />
      <div className={styles.container}>
        <FirmFactCard variant="default" isTall />
        <div className={styles.grid}>
          <FirmFactCard variant="default" />
          <FirmFactCard variant="default" />
          <FirmFactCard variant="default" />
          <FirmFactCard variant="border" />
          <FirmFactCard variant="border" />
          <FirmFactCard variant="border" />
        </div>
      </div>
    </div>
  );
};

export default FirmFacts;
