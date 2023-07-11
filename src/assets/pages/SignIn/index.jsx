import React, { useEffect, useState } from "react";
import styles from "./SignIn.module.scss";
import facebook from "../../icons/loginFacebook.svg";
import google from "../../icons/LoginGoogle.svg";
import SignInput from "../../../components/SignInput";
import eye from "../../icons/eye.svg";
import { useNavigate } from "react-router-dom";
import SignButton from "../../../components/SignButton";
import { Link } from "react-router-dom";

const SignIn = ({
  LookPassword,
  setLookPassword,
  getLookPassword,
  Location,
}) => {
  const [IEmail, setEmail] = useState("");
const navigate =useNavigate()
const [loading, setLoading] = useState(false)
  const CustomerID = localStorage.getItem("CustomerId");
  const createCustomer = async (e) => {
    e.preventDefault();
    const body = {
      email: IEmail,
      base_url: "http://127.0.0.1:5173/generate",
    };
    try {
      setLoading(true)
      const result = await fetch(
        "https://api.chec.io/v1/customers/email-token",
        {
          method: "POST",
          headers: {
            "X-Authorization":
              "sk_52265c4f13e2b111656a3849758d760e7f3128c19db0c",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const res = await result.json();
      console.log(res);
      navigate('/send')
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false)

    }
  };

  useEffect(() => {
    createCustomer();
  }, []);

  return (
    <form onSubmit={createCustomer} className={styles.form}>
      <div>
        <div className={styles.inputContainer}>
          <SignInput loading={loading}
            value={IEmail}
            onChange={setEmail}
            type={"Email"}
            label={"E-mail"}
            placeholder={"nümunə@gmail.com"}
          />
        </div>
        {/* <div className={styles.inputContainer}>
        <SignInput
          ClickFunction={getLookPassword}
          LookPassword={LookPassword}
          type={LookPassword ? "text" : "password"}
          placeholder={"Şifrənizi daxil edin"}
          label={"Şifrə"}
          icon={eye}
        />
        <a className={styles.updatePassword}>Şifrəni unutmusunuz?</a>
      </div> */}
      </div>
      <div className={styles.signButton}>
        <SignButton
        loading={loading}
          background={"#2DD06E"}
          title={"Daxil ol"}
          color={"white"}
          width={"330px"}
          margin={"auto"}
        />
        <div className={styles.CreateAccount}>
          {" "}
          Hesabınız yoxdur?{" "}
          <Link
            to={Location === "Login" && "/Sign-up"}
            className={styles.CreateLink}
          >
            Qeydiyyatdan keçin
          </Link>{" "}
        </div>
      </div>
    </form>
  );
};

export default SignIn;
