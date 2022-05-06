import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Name = ({name}) => {
  return (
    <div className={styles['name-container']}>{name}</div>
  )
}

export default Name