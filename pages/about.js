import React from "react"
import Image from "next/image"
import Navbar from "../Components/Navbar"
import Abhi from "../public/img2p.jpg"
import styles from "../styles/about.module.css"
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function About() {
  useEffect(()=>{
    Aos.init({duration: 1800});
  })
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
                <div className="col-md-6 pb-2 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" data-aos="fade-right">
                <h1>
                    OUR VISON 
                </h1>
                <h5 style={{ inlineHeight: "0.5",color:"#fff" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                </h5>
                </div>
                <div id='img-abt' className="col-lg-6 order1 order-lg-2 header-img pt-4 py-5">
                <Image src={Abhi} alt="" className="img-fluid animated"  style={{borderRadius:24}} data-aos="fade-left" />
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
                <div className="col-md-6 pb-2 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" data-aos="fade-left">
                <h1>
                    OUR AIM
                </h1>
                <h5 style={{ inlineHeight: "0.5",color:"#fff" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                </h5>
                </div>
                <div id='img-abt' className="col-lg-6 order1 header-img pt-4 py-5" data-aos="fade-right" >
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
                <div className="col-md-6 pb-2 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" data-aos="fade-right">
                <h1>
                    OUR GOAL 
                </h1>
                <h5 style={{ inlineHeight: "0.5",color:"#fff" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                </h5>
                </div>
                <div id='img-abt' className="col-lg-6 order1 order-lg-2 header-img pt-4 py-5">
                <Image src={Abhi} alt="" className="img-fluid animated"  style={{borderRadius:24}} data-aos="fade-left" />
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
            <p>Address:</p>
            <h3>184 Main Collins Street</h3>
            <p>Phone:</p>
            <h3>(226) 446 9371</h3>
            <p>Email:</p>
            <h3>confer@gmail.com</h3>
            <p>Website:</p>
            <h3>www.confer.com</h3>
          </div>
          <div className={styles.footer_right}>
            <div className={styles.footer_grid_container}>
              <div>
                <input placeholder='First Name'/>
              </div>
              <div>
              <input placeholder='Last Name'/>
              </div>
              <div>
              <input placeholder='Email'/>
              </div>
              <div>
              <input placeholder='Phone Number'/>
              </div>
              <div>
              <textarea placeholder='YOUR MESSAGE' className={styles.footer_text}></textarea>
              </div>
            </div>
            <button className={styles.submit}>SUBMIT</button>
          </div>
        </div>
      </div>
      <div className={styles.copyright_container}>
        <div className={styles.sep}></div>
        <p>Copyright ©2023 All rights reserved</p>
      </div>
    </div>
  )
}

export default About