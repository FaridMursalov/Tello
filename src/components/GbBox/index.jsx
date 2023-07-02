import React from 'react'
import styles from './gbBox.module.scss'

const MemoryBox = ({memo,bgColor,textColor,setPriceIndex,index,PriceIndex}) => {
  return (
    <span className={PriceIndex===index? styles.activeMemoryBox:styles.memoryBox} onClick={()=>setPriceIndex(index)}  style={{backgroundColor: bgColor, color: textColor}} > { memo }</span>
  )
}

export default MemoryBox