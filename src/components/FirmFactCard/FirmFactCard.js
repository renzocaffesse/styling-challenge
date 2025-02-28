import React from "react";
import styles from "./FirmFactCard.module.scss";
import Button from "../Button";

const FirmFactCard = ({ variant, isTall = false, isButtonDisabled = false, buttonVariant = "icon" }) => {
  return (
    <div
      className={`${styles.card} ${variant === "border" ? styles.border : ""} ${
        variant === "default" ? styles.default : ""
      } ${isTall ? styles.tall : ""}`}
    >
      <Button
        variant={buttonVariant}
        disabled={isButtonDisabled}
      >
        {buttonVariant === "default" ? "This is a one line button" : "This is a two line button that terminates with..."}
      </Button>
    </div>
  );
};

export default FirmFactCard;
