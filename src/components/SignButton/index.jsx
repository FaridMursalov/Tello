import React from "react";
import styles from "./sign.module.scss";
const SignButton = ({ title,background,color,border }) => {
  return (
    <button
      className={styles.button}
      style={{ background: background, color: color, border: border }}
    >
    
      {title}
    </button>
  );
};

export default SignButton;
