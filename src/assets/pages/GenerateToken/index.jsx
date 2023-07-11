import React, { useEffect, useState } from "react";
import styles from './userPRofiler.module.scss'
import { json, useParams, useNavigate } from "react-router-dom";
import { request, userInfo } from "../../../api/auth";
import HashLoader from "react-spinners/HashLoader";


const GenerateToken = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { token } = useParams();
  const navigate = useNavigate()
  localStorage.setItem("Login", JSON.stringify(token));
  const userToken = JSON.parse(localStorage.getItem("Login"));
  const logIn= true;
//   const [userInfo, setUserInfo] = useState({});
  
  console.log(userToken);


  useEffect(() => {
    const Requestt = async () => {
      const data = {
        token: token,
      };
      const res = await request(data);
      console.log(res.data, "salam");
      localStorage.setItem("CustomerId", JSON.stringify(res.data.customer_id));
    };
    // const UserInfoo = async () => {
    //   const body = {};
    //   const customer = JSON.parse(localStorage.getItem("CustomerId"));
    //   const res = await userInfo(customer, body);
    //   console.log(res.data, "Infoo");
    //   setFirstNsme(res.data.firstname)
    // };
    Requestt();
    // UserInfoo();
    navigate("/")
  }, []);
  
if(logIn) {
return (<div className={styles.HashLoader} > <HashLoader color="#2DD06E" /></div>)

}
  return (
    <div>
      {" "}
      
    </div>
  );
};

export default GenerateToken;
