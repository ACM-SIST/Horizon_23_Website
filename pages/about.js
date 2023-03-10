import React from "react"
import Image from "next/image"
import Navbar from "../Components/Navbar"
import Abhi from "../public/img2p.jpg"
import Footer from "../Components/Footer"
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
<Footer />
</div>
  )
}

export default About