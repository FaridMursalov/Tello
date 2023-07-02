import React from 'react'
import styles from './basket.module.scss'
import basketIcon from '../../icons/shopping-cart.svg'
import SignButton from '../../../components/SignButton'

const Basket = () => {
  return (
    <div className={styles.basketContainer}>
      <h3>Səbət (0 məhsul)</h3>
<div className={styles.basketContent}> <img src={basketIcon} alt="" />

<span> Səbətiniz halhazırda boşdur  </span> 
 <SignButton title={"Alış-verişə davam et"} background={'#2DD06E'}
  color={"white"} border={"#2DD06E"} width={"300px"} />
</div>


    </div>
  )
}

export default Basket