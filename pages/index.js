import { useState } from 'react'
import Navbar from '../Components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [toggle,setToggle] = useState(1);

  const toggledate = (id) => {
    setToggle(id);
  }
  return (
    <div>
      <div className={styles.hero}>
        <Navbar />
        <div className={styles.hero_center}>
          <h1 className={styles.heading}>HORIZON 2023</h1>
          <h1 className={styles.second_heading}>MARCH 24</h1>
        </div>
        <div></div>
      </div>
      <div className={styles.about}>
        <div className={styles.about_left}>
          <h1>ABOUT</h1>
          <h1>HORIZON</h1>
        </div>
        <div className={styles.about_right}>
          <div className={styles.desc_cont}>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices venenatis feugiat. Ut posuere nunc sit amet porta volutpat. Donec accumsan libero in elementum condimentum. Donec placerat nibh ipsum.</h3>
          </div>
          <div className={styles.more_desc_cont}>
            <div>
              <h2>2</h2>
              <h3>DAYS</h3>
            </div>
            <div>
              <h2>10+</h2>
              <h3>EVENTS</h3>
            </div>
            <div>
              <h2>EXCITING</h2>
              <h3>REWARDS</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.register}><button className={styles.register_btn}>REGISTER NOW</button></div>
      <div className={styles.schedule_container}>
        <h1 className={styles.schedule_heading}>SCHEDULE</h1>
        <div className={styles.schedule_table}>
          <div className={styles.schedule_filter_container}>
            <p
            className={toggle === 1 ? styles.selected : ''}
            onClick={()=>toggledate(1)}
            >
              24th Mar
            </p>
            <p
            className={toggle === 2 ? styles.selected : ''}
            onClick={()=>toggledate(2)}
            >
              25th Mar
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
    </div>
  )
}
