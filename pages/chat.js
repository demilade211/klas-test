import React from 'react'
import styles from '../styles/chat.module.css'
import Image from 'next/image'

const chat = () => {
  return (
    <div>
        <header className={styles.header}>
            <Image src="/images/Vector(1).svg" alt="Vercel Logo" width={20} height={20} />
            <span style={{margin:"0px 30px",fontSize:"1.4rem",color:"black",fontWeight:"bold"}}>In-call messages</span>
        </header>
        <section className={styles.tab}>
            <div>
                <Image src="/images/Group(1).svg" alt="Vercel Logo" width={35} height={35} />
                <span style={{margin:"0px 20px",fontSize:"1.4rem",position:"relative",bottom:"10px"}}>Chat</span>
            </div>
            <div>
                <Image src="/images/Vector(2).svg" alt="Vercel Logo" width={35} height={35} />
                <span style={{margin:"0px 20px",fontSize:"1.4rem",position:"relative",bottom:"10px"}}>Students</span>
            </div>
        </section>
        <footer className={styles['footer-container']}>
                <input className={styles.text} type="text" placeholder='Type to write a message'/>
                <input className={styles.button} type="button" value="Send"/>
        </footer>
    </div>
  )
}

export default chat