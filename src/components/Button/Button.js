import React from "react";
import styles from "./Button.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/icons/Shape.svg";

const Button = ({ variant = "default", disabled = false, children }) => {
  return (
    <button
      className={`${styles.button} ${variant === "icon" ? styles.icon : ""} ${
        disabled ? styles.disabled : ""
      }`}
      disabled={disabled}
    >
      {variant === "icon" && (
        <span className={styles.icon}>
          <SearchIcon className={styles.iconSvg} />
        </span>
      )}
      <span className={styles.text}>{children}</span>
    </button>
  );
};

export default Button;
