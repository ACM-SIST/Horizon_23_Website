import styles from "../styles/footer.module.css"
import { useForm } from "@formspree/react"
import Image from "next/image"
import linkedin from "../public/linkedin.png"
import insta from "../public/insta.png"
import footer_sist from "../public/footer_sist.png"
import acm_logo from "../public/acm_logo.png"
import acmw_logo from "../public/acmw_logo.png"

function Footer() {
    const [state,handleSubmit] = useForm("mzbqvpjb")

    function Submit(){
        if(state.succeeded){
            window.alert("SUBMITTED")
            window.location.reload()
        }
    }
  return (
    <div>
        <div className={styles.footer}>
        <p className={styles.footer_heading}>HAVE QUESTION?</p>
        <h1 className={styles.footer_contact_heading}>CONTACT US</h1>
        <div className={styles.footer_container}>
          <div className={styles.footer_left}>
            <p className={styles.ques}>Links : </p>
            <div className={styles.icons_container}><a href='https://www.linkedin.com/company/acm-sist-student-chapter/'><Image src={linkedin} alt="linkedin" width={30} height={30}/></a>
            <a href='https://www.instagram.com/acmsist/?igshid=YmMyMTA2M2Y%3D'><Image src={insta} alt="insta" width={30} height={30}/></a>
            </div>
            <p className={styles.ques}>Phone :</p>
            <h3>8790122286</h3>
            <h3>7200366102</h3>
            <h3>9176638894</h3>
            <p className={styles.ques}>Email :</p>
            <h3>acm.sathyabama@gmail.com</h3>
          </div>
          <div className={styles.footer_right}>
            <form autoComplete='off' onSubmit={handleSubmit} className={styles.footer_grid_container}>
              <input type="text
              " name="first name" id='first_name' placeholder='First Name'/>
              <input type="text" id="last_name" name="last name" placeholder='Last Name'/>
              <input type="text" 
        name="email" id='email' placeholder='Email'/>
              <input type="text" id='phone' name='phone no' placeholder='Phone Number'/>
              <textarea id='msg' placeholder='YOUR MESSAGE' name='message' className={styles.footer_text}></textarea>
              <button onClick={Submit} type="submit" className={styles.submit}>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.copyright_container}>
        <div className={styles.footer_img_container}>
          <Image className={styles.footer_img} width={100} height={80} src={footer_sist} alt="sist_logo"/>
          <Image className={styles.footer_img} src={acm_logo} alt="acm logo"/>
          <Image className={styles.footer_img} src={acmw_logo} alt="acmw logo"/>
        </div>
        <div className={styles.sep}></div>
        <p>Copyright ©2023 Association for Computing Machinery (ACM) SIST All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer