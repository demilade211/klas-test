import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Mic = () => {
  return (
    <div className={styles['mic-container']}>
        <Image src="/images/Group.svg" alt="Vercel Logo" width={20} height={20} />
    </div>
  )
}

export default Mic