import Image from 'next/image'
import Link from 'next/link'
import { useState,useEffect, use } from 'react'
import acmw_logo from "../public/acmw_logo.png"
import acm_logo from "../public/acm_logo.png"
import sist_logo from "../public/sist_logo.jpeg"
import hamburger from "../public/ham_test.png"
import ham_cross from "../public/ham_cross.png"
import styles from '../styles/navbar.module.css'

export default function Navbar(){

    const [toggleMenu,setToggleMenu]=useState(false)

    const togglenav = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <div className={styles.navbar}>
            {(toggleMenu) ? (<div className={styles.ham_container}>
                <button onClick={togglenav}><Image src={ham_cross} alt="hamburger"/></button>
            </div>)
                :
            (<div className={styles.ham_container}>
                <button onClick={togglenav}><Image src={hamburger} alt="hamburger"/></button>
            </div>)
            }
            <div className={styles.nav_left}>
               <Image className={styles.sist_logo} src={sist_logo} width='50' height='50' alt='SIST LOGO'/>
               {(toggleMenu) ? (<div className={styles.links_container}>
                    <Link className={styles.nav_links} href="/" alt="home"><p>HOME</p></Link>
                    <Link className={styles.nav_links} href="/" alt="home"><p>EVENTS</p></Link>
                    <Link className={styles.nav_links} href="/about" alt="home"><p>ABOUT US</p></Link>
                </div>)
                :
                (<div className={styles.links_container_passive}>
                    <Link className={styles.nav_links} href="/" alt="home">HOME</Link>
                    <Link className={styles.nav_links} href="/" alt="home">EVENTS</Link>
                    <Link className={styles.nav_links} href="/about" alt="about">ABOUT US</Link>
                </div>)
                }
            </div>
            <div className={styles.nav_right}>
                <Image className={styles.acm_logo} src={acm_logo} width='80' height='70' alt='ACM SIST LOGO'/>
                <div className={styles.sep}></div>
                <Image className={styles.acm_logo} src={acmw_logo} width='100' height='70' alt='ACM SIST LOGO'/>
            </div>
        </div>
    )
}