import React from 'react'
import styles from './inputSign.module.scss'
import eye from '../../assets/icons/eye.svg'
const SignInput = ({label,placeholder,type,icon,LookPassword,ClickFunction,pattern,value,onChange,loading}) => {
  return (
    <div  className={styles.SignInputContainer}>
        <label className={value === ""? styles.vali :styles.label}>{label}</label>
      <div className={value===""? styles.valid : styles.SignInput}>
        <input value={value} onChange={(e)=>onChange(e.target.value) }   className={  styles.input} type={type} placeholder={placeholder} pattern={pattern} />
       {icon?  <span onClick={ClickFunction} className={styles.inputIcon}>  {LookPassword? <span className={`${styles.iconss} material-symbols-outlined`}>
visibility_off
</span>:  <img className={styles.inputImg} src={icon} alt="" />}</span>: ""}
      </div>
    </div>
  )
}

export default SignInput