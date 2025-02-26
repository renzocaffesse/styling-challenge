import React from "react";
import styles from "./FirmFactCard.module.scss";

const FirmFactCard = ({ variant, isTall = false, children }) => {
  return (
    <div
      className={`
        ${styles.card}
        ${variant === "border" ? styles.border : ""}
        ${variant === "default" ? styles.default : ""}
        ${isTall ? styles.tall : ""}
      `.trim()}
    >
      {children}
    </div>
  );
};

export default FirmFactCard;
