import React from "react";
import styles from "./FirmFacts.module.scss";
import FirmFactCard from "../FirmFactCard";

const FirmFacts = () => {
  return (
    <div className={styles.container}>
      <FirmFactCard variant="default" />
      <FirmFactCard variant="border" />
    </div>
  );
};

export default FirmFacts;
