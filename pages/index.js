import Image from 'next/image'
import Navbar from '../Components/Navbar'
import horizon from "../public/horizon.png"
import desc_img from "../public/desc_img.avif"
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

function Index() {
  const [toggle,setToggle] = useState(1);
  const [timerdays,settimerdays] = useState(0);
  const [timerhours,settimerhours] = useState(0);
  const [timerminutes,settimerminutes] = useState(0);
  const [timerseconds,settimerseconds] = useState(0);

  const toggledate = (id) => {
    setToggle(id);
  }

  let interval;

  const start = () => {
    const countDownDate = new Date("March 23,2023").getTime();
    interval = setInterval(() => {
      const now=new Date().getTime();
      const diff=countDownDate-now;
      const days=Math.floor(diff/(24*60*60*1000))
      const hours=Math.floor(diff%(24*60*60*1000)/(1000*60*60))
      const minutes=Math.floor(diff%(60*60*1000)/(1000*60))
      const seconds=Math.floor(diff%(60*1000)/(1000))
      if(diff<0){
        clearInterval(interval.current)
      }
      else{
         settimerdays(days);
         settimerhours(hours);
         settimerminutes(minutes);
         settimerseconds(seconds);
      }
    })
  }
  useEffect(()=>{
    start()
  })
  return (
    <>
      <Navbar />
      <div className={styles.hero_container}>
        <div className={styles.hero_main}>
          <Image className={styles.hero_heading_img} src={horizon} alt="HORIZON"/>
          {/* <div className={styles.hero_heading_container}>
            <h3>MARCH 23 AND 24</h3>
          </div> */}
          <button className={styles.register_btn}>REGISTER NOW</button>
        </div>
      </div>
      <div className={styles.desc_container}>
        <div className={styles.desc_left}>
          <h4 className={styles.about}>ABOUT EVENT</h4>
          <h1 className={styles.heading}>HORIZON 2023</h1>
          <p className={styles.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
        <div className={styles.desc_right}>
          <Image className={styles.desc_img} src={desc_img} alt="horizon"/>
        </div>
      </div>
      <div className={styles.count_container}>
        <div className={styles.count_left}>
          <h1 className={styles.count_about}>Event Date</h1>
          <h3>MARK YOUR CALENDERS</h3>
          <p>COUNT EVERY SECOND UNTIL THE EVENT</p>
        </div>
        <div className={styles.count_right}>
          <div className={styles.count_box}>
            <h1>{timerdays}</h1>
            <h1>Day</h1>
          </div>
          <div className={styles.count_box}>
            <h1>{timerhours}</h1>
            <h1>Hrs</h1>
          </div>
          <div className={styles.count_box}>
            <h1>{timerminutes}</h1>
            <h1>Min</h1>
          </div>
          <div className={styles.count_box}>
            <h1>{timerseconds}</h1>
            <h1>Sec</h1>
          </div>
        </div>
      </div>
      <div className={styles.schedule_container}>
        <h1 className={styles.schedule_heading}>SCHEDULE</h1>
        <div className={styles.schedule_table}>
          <div className={styles.schedule_filter_container}>
            <p
            className={toggle === 1 ? styles.selected : ''}
            onClick={()=>toggledate(1)}
            >
              24th Mar 2023
            </p>
            <p
            className={toggle === 2 ? styles.selected : ''}
            onClick={()=>toggledate(2)}
            >
              25th Mar 2023
            </p>
          </div>
          <div
          className={toggle === 1 ? styles.active : styles.passive}
          >
            <h1>24TH EVENTS</h1>
          </div>
          <div className={toggle === 2 ? styles.active : styles.passive}>
            <h1>25TH EVENTS</h1>
          </div>
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
            <h3>CONTACT US</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
