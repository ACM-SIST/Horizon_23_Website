import React from "react"
import Image from "next/image"
import Navbar from "../Components/Navbar"
import Abhi from "../public/img2p.jpg"
import linkedin from "../public/linkedin.png"
import insta from "../public/insta.png"
import footer_sist from "../public/footer_sist.png"
import acm_logo from "../public/acm_logo.png"
import acmw_logo from "../public/acmw_logo.png"
import styles from "../styles/about.module.css"
import Aos from "aos";
import { useForm } from "@formspree/react"
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function About() {
  useEffect(()=>{
    Aos.init({duration: 1800});
  })
  const [state, handleSubmit] = useForm("mzbqvpjb");
  function Submit(){
    if(state.succeeded){
      window.location.reload()
    }
  }
  return (
    <div className={styles.container}>
     <Navbar />
    <div className={styles.abouttotal}>
    <div >
        <section id="Header" className="d-flex align-items-center">
        <div className="container-fluid">
        <div className="row">
            <div className="col-10 mx-5">
            <div className="row">
                <div className="col-md-6 pb-2 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                    OUR VISON 
                </h1>
                <h5 style={{ inlineHeight: "0.5",color:"#fff" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                </h5>
                </div>
                <div id='img-abt' className="col-lg-6 order1 order-lg-2 header-img pt-4 py-5">
                <Image src={Abhi} alt="" className="img-fluid animated"  style={{borderRadius:24}}  />
                </div>
            </div>
            </div>
        </div>
        </div>
        
        </section>
        </div>
        <div className={styles.midabout}>
        <section id="Header" className="d-flex align-items-center">
        <div className="container-fluid">
        <div className="row">
            <div className="col-10 mx-5">
            <div className="row">
                <div className="col-md-6 pb-2 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
                <h1>
                    OUR AIM
                </h1>
                <h5 style={{ inlineHeight: "0.5",color:"#fff" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                </h5>
                </div>
                <div id='img-abt' className="col-lg-6 order1 header-img pt-4 py-5" >
                <Image src={Abhi} alt="" className="img-fluid animated"  style={{borderRadius:24}} />
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    </div>
    <div>
    <section id="Header" className="d-flex align-items-center">
        <div className="container-fluid">
        <div className="row">
            <div className="col-10 mx-5">
            <div className="row">
                <div className="col-md-6 pb-2 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
                <h1>
                    OUR GOAL 
                </h1>
                <h5 style={{ inlineHeight: "0.5",color:"#fff" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                </h5>
                </div>
                <div id='img-abt' className="col-lg-6 order1 order-lg-2 header-img pt-4 py-5">
                <Image src={Abhi} alt="" className="img-fluid animated"  style={{borderRadius:24}} />
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    </div>
</div>
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
            <h3>(226) 446 9371</h3>
            <p className={styles.ques}>Email :</p>
            <h3>confer@gmail.com</h3>
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

export default About