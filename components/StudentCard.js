import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Name from './Name'
import Mic from './Mic'

const StudentCard = ({name,url}) => {
  return (
    <div style={{backgroundImage:`url(${url})`,backgroundSize:"100% 100%"}} className={styles['students-card']}>
        <Name name={name}/>
        <Mic/>
    </div>
  )
}

export default StudentCard