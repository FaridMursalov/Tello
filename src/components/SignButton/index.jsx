import React from "react";
import styles from "./sign.module.scss";
import ClipLoader from "react-spinners/ClipLoader"; 


const SignButton = ({ title,background,color,border,icon, onClickFunction, width, margin, loading }) => {
  return (
    <button
      className={styles.button}
      onClick={onClickFunction}
      
      style={{ background: background, color: color, border: border, width: width, margin: margin }}
    >
    
       { !loading&& icon?(<img src={icon} alt="" />):""} {loading? (<ClipLoader color="white" cssOverride={{width:"20px",height: "20px"}} />):title}
    </button>
  );
};

export default SignButton;
