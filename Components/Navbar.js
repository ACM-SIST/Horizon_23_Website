import Image from 'next/image'
import Link from 'next/link'
import { useState,useEffect, use } from 'react'
import acmw_logo from "../public/acmw_logo.png"
import acm_logo from "../public/acm_logo.jpeg"
import sist_logo from "../public/sist_logo.jpeg"
import hamburger from "../public/hamburger.png"
import styles from '../styles/navbar.module.css'

export default function Navbar(){

    const [toggleMenu,setToggleMenu]=useState(false)

    const togglenav = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.ham_container}>
                <button onClick={togglenav}><Image src={hamburger} alt="hamburger"/></button>
            </div>
            <div className={styles.nav_left}>
               <Image className={styles.sist_logo} src={sist_logo} width='50' height='50' alt='SIST LOGO'/>
               {(toggleMenu) ? (<div className={styles.links_container}>
                    <Link className={styles.nav_links} href="/" alt="home">HOME</Link>
                    <Link className={styles.nav_links} href="/" alt="home">EVENTS</Link>
                    <Link className={styles.nav_links} href="/" alt="home">ABOUT US</Link>
                </div>)
                :
                (<div className={styles.links_container_passive}>
                    <Link className={styles.nav_links} href="/" alt="home">HOME</Link>
                    <Link className={styles.nav_links} href="/" alt="home">EVENTS</Link>
                    <Link className={styles.nav_links} href="/" alt="home">ABOUT US</Link>
                </div>)
                }
            </div>
            <div className={styles.nav_right}>
                <Image className={styles.acm_logo} src={acm_logo} width='50' height='50' alt='ACM SIST LOGO'/>
                <div className={styles.sep}></div>
                <Image className={styles.acm_logo} src={acmw_logo} width='50' height='50' alt='ACM SIST LOGO'/>
            </div>
        </div>
    )
}