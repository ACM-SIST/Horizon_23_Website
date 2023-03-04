import Image from 'next/image'
import acmw_logo from "../public/acmw_logo.png"
import acm_logo from "../public/acm_logo.jpeg"
import sist_logo from "../public/sist_logo.jpeg"
import styles from '../styles/navbar.module.css'

export default function Navbar(){
    return (
        <div className={styles.navbar}>
            <div className={styles.nav_left}>
                <Image className={styles.sist_logo} src={sist_logo} width='50' height='50' alt='SIST LOGO'/>
                <h3 className={styles.sist_text}>SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY</h3>
            </div>
            <div className={styles.nav_right}>
                <Image className={styles.acm_logo} src={acm_logo} width='50' height='50' alt='ACM SIST LOGO'/>
                <div className={styles.sep}></div>
                <Image className={styles.acm_logo} src={acmw_logo} width='50' height='50' alt='ACM SIST LOGO'/>
            </div>
        </div>
    )
}