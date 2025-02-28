import React from "react";
import styles from "./FirmFacts.module.scss";
import FirmFactCard from "../FirmFactCard/FirmFactCard";
import { ReactComponent as CloseIcon } from "../../assets/icons/Close.svg";

const FirmFacts = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Firm Facts</h2>
      <hr className={styles.separator} />
      <div className={styles.closeIconContainer}>
        <CloseIcon className={styles.closeIcon} />
      </div>
      <div className={styles.container}>
        <FirmFactCard isTall variant="default" buttonVariant="icon" />
        <div className={styles.grid}>
          <FirmFactCard variant="default" buttonVariant="icon" />
          <FirmFactCard variant="default" buttonVariant="default" />
          <FirmFactCard variant="default" buttonVariant="icon" />
          <FirmFactCard variant="border" buttonVariant="icon" />
          <FirmFactCard variant="border" buttonVariant="icon" isButtonDisabled />
          <FirmFactCard variant="border" buttonVariant="icon" />
        </div>
      </div>
    </div>
  );
};

export default FirmFacts;
