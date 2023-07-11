import React from 'react'
import EmailMessagee from '../../assets/icons/undraw_Mail_sent_re_0ofv (1) 1.svg'
import styles from './email.module.scss'
const EmailMessage = () => {
  return (
    <div className={styles.message}> <img src={EmailMessagee} alt="" /> <p>E - poçt ünvanınızı yoxlayın. Göndərilmiş linkə keçid edib şifrənizi yeniləyin!</p> </div>
  )
}

export default EmailMessage