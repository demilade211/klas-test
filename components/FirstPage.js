import React from 'react'
import Mic from '../components/Mic'
import Name from '../components/Name'
import StudentCard from '../components/StudentCard'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const FirstPage = ({setShowChat}) => {
  return (
    <>
        <header className={styles.header}>
          <div className={styles['logo-container']}>
            <Image src="/images/Vector.svg" alt="Vercel Logo" width={30} height={30} />
            <span style={{marginLeft:"10px",position:"relative",bottom:"13px",fontWeight:"bold" }}>Klas</span>
            <h3 style={{textAlign:"center",fontSize:"1.4rem"}}>JavaScript masterclass</h3>
          </div>   
        </header>

        <main >
            <section className={styles['main-container']}>
                <Name name="Alfred Martin"/>
                <Mic/>
            </section>
            <section className={styles['students-container']}>
            <StudentCard name="David Tommy" url="/images/man1.png"/>
            <StudentCard name="Johnny Okta" url="/images/man2.png"/>
            <StudentCard name="Mary Stephanie" url="/images/man3.png"/>
            <StudentCard name="Juliet Kirill" url="/images/man4.png"/>
            <StudentCard name="Ospan Ali" url="/images/man5.png"/>
            <StudentCard name="Nathan Stark" url="/images/man6.png"/>
            </section>
            <section className={styles['pagination-container']}>
            
            
                <Image src="/images/Vector(6).svg" alt="Vercel Logo" width={20} height={20} />
                <span style={{fontSize:"0.9rem",margin:"0px 50px",color:"#707070"}}>1/4</span>
                <Image src="/images/Vector(5).svg" alt="Vercel Logo" width={20} height={20} />
            
            
            </section>
        </main>
        <footer className={styles['footer-container']}>
            <div className={styles['button-container']}>
                <Image src="/images/Group(3).svg" alt="Vercel Logo" width={20} height={20} />
            </div>
            <div className={styles['button-container']}>
                <Image src="/images/Vector(4).svg" alt="Vercel Logo" width={30} height={30} />
            </div>
            <div className={styles['button-container']}>
                <Image src="/images/Group(2).svg" alt="Vercel Logo" width={30} height={30} onClick={()=>setShowChat(true)}/>
            </div>
            <div style={{background: "#FF3D00"}} className={styles['button-container']}>
                <Image src="/images/Vector(3).svg" alt="Vercel Logo" width={20} height={20} />
            </div>
        </footer>
    </>
  )
}

export default FirstPage