import React, { useState } from 'react'
import styles from './SignIn.module.scss'
import facebook from "../../icons/loginFacebook.svg";
import google from "../../icons/LoginGoogle.svg";
import SignInput from "../../../components/SignInput";
import eye from "../../icons/eye.svg";

import SignButton from "../../../components/SignButton";
import { Link } from "react-router-dom";


const SignIn = ({LookPassword,setLookPassword, getLookPassword, Location}) => {
 


   console.log(Location,"Login");
  return (
    <form  className={styles.form}>
    <div>
      <div className={styles.inputContainer}>
        <SignInput
          type={"Email"}
          label={"E-mail"}
          placeholder={"nümunə@gmail.com"}
        />
      </div>
      <div className={styles.inputContainer}>
        <SignInput
          ClickFunction={getLookPassword}
          LookPassword={LookPassword}
          type={LookPassword ? "text" : "password"}
          placeholder={"Şifrənizi daxil edin"}
          label={"Şifrə"}
          icon={eye}
        />
        <a className={styles.updatePassword}>Şifrəni unutmusunuz?</a>
      </div>
    </div>
    <div className={styles.signButton}>
      <SignButton
        background={"#2DD06E"}
        title={"Daxil ol"}
        color={"white"}
        width={"330px"}
        margin={"auto"}
      />
      <div className={styles.CreateAccount}>
        {" "}
        Hesabınız yoxdur?{" "}
        <Link to={Location ==="Login" && '/Sign-up'  } className={styles.CreateLink}>Qeydiyyatdan keçin</Link>{" "}
      </div>
    </div>
  </form>
  )
}

export default SignIn