import React, { useState } from "react";
import styles from "./signUp.module.scss";
import facebook from "../../icons/loginFacebook.svg";
import google from "../../icons/LoginGoogle.svg";
import SignInput from "../../../components/SignInput";
import eye from "../../icons/eye.svg";
import {  useNavigate } from "react-router-dom";
import SignButton from "../../../components/SignButton";
import { Link } from "react-router-dom";
// import { esbuildVersion } from "vite";

const SignUp = ({
  LookPassword,
  setLookPassword,
  getLookPassword,
  Location,
}) => {
  const [IFirstName, setFirstName] = useState("");
  const [ILastName, setLastName] = useState("");
  const [IEmail, setEmail] = useState("");
const navigate = useNavigate()
  const createCustomer = async (e) => {
    e.preventDefault()
    const body = {
      email: IEmail,
      firstname: IFirstName,
      lastname: ILastName,
    };
    try {
      const result = await fetch("https://api.chec.io/v1/customers", {
        method: "POST",
        headers: {
          "X-Authorization": "sk_52265c4f13e2b111656a3849758d760e7f3128c19db0c",
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      const res = await result.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  ;
navigate("/Login")


}


  const HandleName = (e) => {
    setFirstName(e.target.value);
  };

  // const HandleSubmit = (e) => {
  //   e.preventDefault();
  //   const obj = {
  //     firstname: firstName,
  //     lastName: lastName,
  //     email: email,
  //   };

  //   console.log(obj);
  // };

  return (
    <form onSubmit={createCustomer} className={styles.form}>
      <div>
        <div className={styles.inputContainer}>
          <SignInput
            value={IFirstName}
            onChange={setFirstName}
            type={"text"}
            label={"Ad"}
            placeholder={"Adınızı daxil edin"}
          />
        </div>
        <div className={styles.inputContainer}>
          <SignInput
            value={ILastName}
            onChange={setLastName}
            type={"text"}
            label={" Soyad"}
            placeholder={"Soyadinizi daxil edin"}
          />
        </div>
        <div className={styles.inputContainer}>
          <SignInput
            value={IEmail}
            onChange={setEmail}
            type={"Email"}
            label={"E-mail"}
            placeholder={"nümunə@gmail.com"}
          />
        </div>
        {/* <div className={styles.inputContainer}>
          <SignInput
            type={"tel"}
            pattern={"[0-9]{3}-[0-9]{2}-[0-9]{2}"}
            label={"Mobil nömrə"}
            placeholder={"000-00-00"}
          />
        </div> */}
        {/* <div className={styles.inputContainer}>
          <SignInput
            ClickFunction={getLookPassword}
            LookPassword={LookPassword}
            type={LookPassword ? "text" : "password"}
            placeholder={"Şifrənizi daxil edin"}
            label={"Şifrə"}
            icon={eye}
          />
        </div> */}
        <div className={styles.checkbox}>
          <input className={styles.inputCheckbox} type="checkbox" />{" "}
          <span>
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
          <Link
            to={Location == "Sign-up" && "/Login"}
            className={styles.CreateLink}
          >
            Daxil olun
          </Link>{" "}
        </div>
      </div>
    </form>
  );
};

export default SignUp;
