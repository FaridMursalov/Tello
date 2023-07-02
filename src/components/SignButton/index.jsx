import React from "react";
import styles from "./sign.module.scss";
const SignButton = ({ title,background,color,border,icon, onClickFunction, width, margin }) => {
  return (
    <button
      className={styles.button}
      onClick={onClickFunction}
      
      style={{ background: background, color: color, border: border, width: width, margin: margin }}
    >
    
       {icon?(<img src={icon} alt="" />):""} {title}
    </button>
  );
};

export default SignButton;
