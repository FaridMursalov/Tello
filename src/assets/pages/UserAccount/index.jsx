import React, { useEffect, useState } from "react";
import styles from "./userAccount.module.scss"
import { userInfo } from "../../../api/auth";
import { Link, useNavigate } from "react-router-dom";
import SignInput from "../../../components/SignInput";
import SignButton from "../../../components/SignButton";
import Save from '../../icons/save.svg'
import Sebet  from  '../../icons/shopping-cartt.svg'
import People  from  '../../icons/person.svg'
import Logout  from  '../../icons/log-out.svg'

const UserAccount = () => {
  const CustomerId = localStorage.getItem("CustomerId");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0,0)
    if (CustomerId) {
      const UserInfoo = async () => {
        const res = await userInfo(JSON.parse(CustomerId));
        setFirstName(res.data.firstname);
        setLastName(res.data.lastname);
        setEmail(res.data.email)
      };
      UserInfoo();
    }
  }, [CustomerId]);


const HandleSubmit = (e) => {
    e.preventDefault()
const body ={
    firstname : FirstName,
    lastname : LastName,
    email : Email
}
const ChangeForm =  async ( ) =>{
    const res = await userInfo(JSON.parse(CustomerId),body);
        setFirstName(res.data.firstname);
        setLastName(res.data.lastname);
        setEmail(res.data.email)

}
ChangeForm()
// navigate("/")


}
useEffect(()=>{
  const ChangeForm =  async ( ) =>{
    const res = await userInfo(JSON.parse(CustomerId));
        setFirstName(res.data.firstname);
        setLastName(res.data.lastname);
        setEmail(res.data.email)

}
ChangeForm()



},[CustomerId])
const logOut = () =>{
localStorage.removeItem("CustomerId")
navigate('/')

}


  return (
    <div className={styles.userAccount}>
      {/* <h2>Profilim</h2>
      <h3>Şəxsi məlumatlar</h3> */}
      <div className={styles.userNav}> <h3>Profilim </h3> 
      <ul>

<Link to={"/basket"}><li className={styles.userLi}> <img src={Sebet} alt="" />  Sifarişlərim </li></Link>

<Link to={"/UserAccount"}><li className={styles.userLi}> <img src={People} alt="" />  Şəxsi Məlumatlar</li></Link>

<Link  to={"/"} onClick={logOut} > <li className={styles.userLi}> <img src={Logout} alt="" /> Çıxış</li> </Link>

      </ul>
      
      </div>

      <div className={styles.userFormContainer}>
        <form className={styles.UserForm} onSubmit={HandleSubmit}>
          <div className={styles.inputs} >
            <SignInput label={"Ad"} value={FirstName} onChange={setFirstName } />
            <SignInput label={"Soyad"}  value={LastName} onChange={setLastName} />
            <SignInput label={"Email"} type={"email"} value={Email} onChange={setEmail} />
          </div>
        <SignButton background={"#2DD06E"}
        title={"Yadda saxla"}
        color={"white"}
        width={"330px"}
        icon={Save}
        margin={"auto"}/>
        
        </form>
      </div>
    </div>
  );
};

export default UserAccount;
