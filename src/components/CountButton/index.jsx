import styles from './CountButton.module.scss'
import React from 'react'

const CountButton = ({content,clickFunction}) => {
  return (
    <button onClick={clickFunction} className=  {styles.CountButton}>{content}</button>
  )
}

export default CountButton