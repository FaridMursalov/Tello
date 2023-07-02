import React from 'react'
import styles from './colorBox.module.scss'
const ColorBox = ({BgColor,setDetailIndex, index,detailIndex}) => {
  return (
    <div onClick={()=>setDetailIndex(index)}  className={styles.ColorBox} style={{backgroundColor : BgColor  }}> <div className={index === detailIndex? styles.activeColor: ""}></div> </div>
  )
}

export default ColorBox