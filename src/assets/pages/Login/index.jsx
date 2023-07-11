import React from "react";
import styles from "./Login.module.scss";
import facebook from "../../icons/loginFacebook.svg";
import google from "../../icons/LoginGoogle.svg";
import SignInput from "../../../components/SignInput";
import eye from "../../icons/eye.svg";
import { useState } from "react";
import SignButton from "../../../components/SignButton";
import { useParams, useLocation } from "react-router-dom";
import LoginImg1 from "../../icons/undraw_mobile_devices_k1ok 1.svg";
import LoginImg2 from "../../icons/Dot Grid.png";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
const Login = () => {
  const { pathname } = useLocation();
  const Location = pathname.split("/")[1];
  const [login, setLogin] = useState(false);
  const [LookPassword, setLookPassword] = useState(false);
  const { id } = useParams();
  // console.log(id);
  // if(id=== in){

  // }
const customer_id = localStorage.getItem("CustomerId")



  const getLookPassword = () => {
    setLookPassword(!LookPassword);
  };
  return (
    
    <div className={styles.loginContainer}>
      <div className={styles.container}>
        <div className={styles.Login}>
          <h2>{Location === "Login" ? "Daxil ol" : "Qeydiyyat"}</h2>
          <div className={styles.LoginSocial}>
            <span className={styles.socialSign}>
              <span className={styles.SignFb}>
                <img src={facebook} alt="" />
              </span>
              Facebook ilə
            </span>
            <span className={styles.socialSign}>
              <span className={styles.SignGoogle}>
                <img src={google} alt="" />
              </span>
              Google ilə
            </span>
          </div>
          <p className={styles.and}>və ya</p>
        </div>
        {Location == "Login" ? (
          <SignIn
            LookPassword={LookPassword}
            setLookPassword={setLookPassword}
            getLookPassword={getLookPassword}
            Location={Location}
          />
        ) : (
          <SignUp
            id={id}
            setLogin={setLogin}
            LookPassword={LookPassword}
            getLookPassword={getLookPassword}
            Location={Location}
          />
        )}
      </div>
      <div className={styles.loginSideImg}>
        <div>
          <div className={styles.img1}>
            <img src={LoginImg1} alt="" />
          </div>
          <img className={styles.img2} src={LoginImg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
