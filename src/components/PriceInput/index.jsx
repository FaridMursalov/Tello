import React from 'react'
import styles from './priceInput.module.scss'
import aznSymbol from '../../assets/icons/azn symbol wiki.svg'
const PriceInput = ({placeholder}) => {
  return (
    <div className={styles.price}><input type='number' placeholder={placeholder}/> <img src={aznSymbol} alt="" /> </div>
  )
}

export default PriceInput