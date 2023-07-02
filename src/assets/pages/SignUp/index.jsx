import React, { useState } from 'react'
import styles from './signUp.module.scss'
import facebook from "../../icons/loginFacebook.svg";
import google from "../../icons/LoginGoogle.svg";
import SignInput from "../../../components/SignInput";
import eye from "../../icons/eye.svg";

import SignButton from "../../../components/SignButton";
import { Link } from "react-router-dom";


const SignUp = ({LookPassword,setLookPassword, getLookPassword, Location}) => {
   
  return (
    <form className={styles.form}>
    <div><div className={styles.inputContainer}>
        <SignInput
          type={"text"}
          label={"Ad, Soyad"}
          placeholder={"Ad və soyadinizi daxil edin"}
        />
      </div><div className={styles.inputContainer}>
        <SignInput
          type={"Email"}
          label={"E-mail"}
          placeholder={"nümunə@gmail.com"}
        />
      </div>
      <div className={styles.inputContainer}>
        <SignInput
          type={"tel"}
          pattern={"[0-9]{3}-[0-9]{2}-[0-9]{2}"}
          label={"Mobil nömrə"}
          placeholder={"000-00-00"}
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
      </div>
      <div className={styles.checkbox}>
        <input className={styles.inputCheckbox} type="checkbox" /> <span>
           <Link> Istifadəçi şərtləri </Link>ilə razıyam
        </span>
       </div>
    </div>
    <div className={styles.signButton}>
      <SignButton
        background={"#2DD06E"}
        title={" Qeydiyyat"}
        color={"white"}
        width={"330px"}
        margin={"auto"}
      />
      <div className={styles.CreateAccount}>
        {" "}
        Artıq hesabınız var?{" "}
        <Link to={Location == "Sign-up" && "/Login"} className={styles.CreateLink}>Daxil olun</Link>{" "}
      </div>
    </div>
  </form>
  )
}

export default SignUp