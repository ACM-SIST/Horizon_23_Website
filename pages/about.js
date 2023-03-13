import React from 'react'
import Aboutus from "../public/img4.jpg"
import Coreteam from "../public/img1.jpg"
import Events from "../public/img5.jpg"
import Image from 'next/image'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import styles from "../styles/about.module.css"

function about() {
  return (
    <>
    <Navbar/>
   <div className={styles.abouttotal}>
   <div className={styles.about_container}>
    <section id="Header" className="d-flex align-items-center">
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-5">
          <div className="row">
            <div className="col-md pb-2 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" data-aos="fade-right">
              <h1  className={styles.heading}>
              About us
              </h1>
              <h5 style={{ inlineHeight: "0.5",color:"#fff" }}>
              ACM Student Chapter is the International Association for Computing Machinerys student society which is the worlds largest educational and scientific computing society. ACM is dedicated to advancing the field of computing and information technology. It provides opportunities for students for networking and sharing their knowledge. Its focus is on building and developing members passion for computer science. 

              </h5>
            </div>
            <div id='img-abt' className="col-lg-6 order1 order-lg-2 header-img pt-4 py-5">
              <Image src={Aboutus} alt="" className="img-fluid animated"  id={styles.Abt_img} data-aos="fade-left" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </section>
    </div>
    <br></br>
    <br></br>
    

    <div className={styles.midabout}>
    <br></br>
    <br></br>
    <section id="Header" className="d-flex align-items-center">
      <br></br>
      <br></br>
      <br></br>
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-5">
          <div className="row">
            <div className="col-md pb-2 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" data-aos="fade-left">
              <h1 className={styles.mid_heading}>
              CORE TEAM
              </h1>
              <h5 style={{ inlineHeight: "0.5",color:"#fff" }}>
              ACM-W Student Chapter is a community of individuals and organizations working to improve the representation of women in computing fields worldwide. The mission of ACM-W is to support, celebrate, and advocate for women in computing. It aims to create a welcoming and inclusive computing culture that encourages womens full participation in computing fields.
             
                 </h5>
            </div>
            <div id='img-abt' className="col-lg-6 order1 header-img pt-4 py-5" data-aos="fade-right" >
              <Image src={Coreteam} alt="" className="img-fluid animated"  id={styles.Abt_img} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br></br>
  <br></br>
  </div>
  <div>
    <br></br>
    <br></br>
  <section id="Header" className="d-flex align-items-center">
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-5">
          <div className="row">
            <div className="col-md pb-2 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" data-aos="fade-right">
              <h1 className={styles.heading}>
              EVENTS
              </h1>
              <h5 style={{ inlineHeight: "0.5",color:"#fff" }}>
              ACM SIST Student Chapter is a student-led organization affiliated with ACM. The chapter aims to promote the advancement of computing and technology among students, faculty, and researchers in the institution and the surrounding communities.
We provide a platform for students to engage in various activities such as technical sessions, hackathons, coding contests, seminars, social events, etc. 
The mission of the ACM SIST Student Chapter is to foster the growth of computing and technology in the area by developing a vibrant community of students and researchers who are passionate about these fields.
              </h5>
            </div>
            <div id='img-abt' className="col-lg-6 order1 order-lg-2 header-img pt-4 py-5">
              <Image src={Events} alt="" className="img-fluid animated"  id={styles.Abt_img} data-aos="fade-left" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</div>
<Footer />
   </>
  )
}

export default about