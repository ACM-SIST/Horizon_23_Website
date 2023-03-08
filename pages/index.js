import Image from 'next/image'
import Navbar from '../Components/Navbar'
import horizon from "../public/horizon_logo.png"
import desc_img from "../public/desc_img.jpg"
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

function Index() {
  let tech=[{
    "tech-event1" : {
        "heading": "Codefest",
        "description": "It is an individual event which involves the participants in trying to code/program according to the given specifications. The participant must be able to solve the problems in a given set of time.This competition will test a participant’s coding and debugging skills and their knowledge in programming languages.",
        "type":"Individual",
        "date":"24/03/2023",
        "time":"10:00 AM - 11:30 AM",
        "venue":"dummylocation",
        "image":"xyz"
    },

    "tech-event2" : {
        "heading": "Brain Busters",
        "description": "An  another Technical event which is about Technical Quiz on Core Topics where you can test your Knowledge on core concepts.",
        "type":"Team",
        "date":"24/03/2023",
        "time":"12:00 PM - 1:30 PM",
        "venue":"dummylocation",
        "image":"xyz"
    },

    "tech-event3" : {
        "heading": "Blind Presentation",
        "description": "An opportunity to showcase your skill of Presentation.  Present your presentation in the most creative way you can ! This competition will test a participant’s mindset and presentation skills and their knowledge in given areas.",
        "type":"Team",
        "date":"24/03/2023",
        "time":"1:30 PM - 3:00 PM",
        "venue":"dummylocation",
        "image":"xyz"
    },

    "tech-event4" : {
        "heading": "Innovat-O-thon",
        "description": "Product Innovation meets a hackathon. Participants should develop innovative products (Software, Hardware, Both) which can be used to generate revenue and serve any business in any sector.",
        "type":"Team",
        "date":"25/03/2023",
        "time":"10:00 AM - 11:30 AM",
        "venue":"dummylocation",
        "image":"xyz"
    },

    "tech-event5" : {
        "heading": "CSS Battle",
        "description": "Given an image , individuals have to recreate the image using custom HTML/CSS rules.",
        "type":"Individual",
        "date":"25/03/2023",
        "time":"12:00 PM - 1:30 PM",
        "venue":"dummylocation",
        "image":"xyz"
    },

    "tech-event6" : {
        "heading": "U-eye the design",
        "description": "A design challenge where students need to design the UI for a given problem statement.",
        "type":"Team",
        "date":"25/03/2023",
        "time":"1:30 PM - 3:00 PM",
        "venue":"dummylocation",
        "image":"xyz"
    }
}
]
let nontech=[{

  "nt-event1" : {
      "heading": "Just a Minute - JAM",
      "description": "It’s an Individual event where the participant can showcase their talent within a minute. ",
      "type":"Individual",
      "date":"24/03/2023",
      "time":"10:00 AM - 11:30 AM",
      "venue":"dummylocation",
      "image":"xyz"
  },

  "nt-event2" : {
      "heading": "Keep It Reel",
      "description": "Participants are requested to create a reel centered on the Theme 'College'. Only the SIST campus must be used to film the video. Keep it relevant, appropriate, and unique. It will be judged based on creativity, usage of location and relevance to the topic.",
      "type":"Team",
      "date":"24/03/2023",
      "time":"12:00 PM - 1:30 PM",
      "venue":"dummylocation",
      "image":"xyz"
  },

  "nt-event3" : {
      "heading": "Sight on Site",
      "description": "Here  sight on site weighs on the saying When it comes to recall, it’s very much a case of ‘use it, don’t lose it’.sight on site in a memory quiz game, it’s played in teams , there would be slides in each round which consist of photos and videos, after each round questions would be asked and the result depends on the number of questions u answered correct. In the end of the game winners would be getting some exiting goodies. Play your way as you unravel the secrets in the slides.",
      "type":"Team",
      "date":"24/03/2023",
      "time":"1:30 PM - 3:00 PM",
      "venue":"dummylocation",
      "image":"xyz"
  },

  "nt-event4" : {
      "heading": "Murder Mystery",
      "description": "It’s a game event where the clues will be given and the teams have to solve the clues and keep moving to the next level. The first team to solve all the clue’s will be the final winner",
      "type":"Team",
      "date":"25/03/2023",
      "time":"10:00 AM - 11:30 AM",
      "venue":"dummylocation",
      "image":"xyz"
  },

  "nt-event5" : {
      "heading": "Adzap",
      "description": "It’s a Competition where students had to prepare different creative advertisements for their given topics on Spot.The teams were given their topic 30 minutes in advance .",
      "type":"Individual",
      "date":"25/03/2023",
      "time":"12:00 PM - 1:30 PM",
      "venue":"dummylocation",
      "image":"xyz"
  },

  "nt-event6" : {
      "heading": "Laugh Out",
      "description": "In this event we have to make everyone laugh with the sarcasm inside ourselves. It’s all about the laugh we make on everyone's face and make them happy.Our jokes should be the stress killer for everyone sitting down there.The way they will make audience happy will decide the winner.",
      "type":"Team",
      "date":"25/03/2023",
      "time":"1:30 PM - 3:00 PM",
      "venue":"dummylocation",
      "image":"xyz"
  },

}
]
  const [toggle,setToggle] = useState(1);
  const [list,setlist]=useState(tech)
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
            onClick={()=>{
              toggledate(1)
            }}
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
            <div className={styles.event_card}>
              <div className={styles.event_info}>
                <p>Codefest</p>
                <p>Individual</p>
              </div>
              <div className={styles.event_info}>
                <p>10:00 - 11:30</p>
                <p>Venue</p>
              </div>
              <button className={styles.event_btn}>REGISTER</button>
            </div>
            <div className={styles.event_card}>
              <div className={styles.event_info}>
                <p>Brain Busters</p>
                <p>Team</p>
              </div>
              <div className={styles.event_info}>
                <p>12:00 - 1:30</p>
                <p>Venue</p>
              </div>
              <button className={styles.event_btn}>REGISTER</button>
            </div>
            <div className={styles.event_card}>
              <div className={styles.event_info}>
                <p>Blind Presentation</p>
                <p>Team</p>
              </div>
              <div className={styles.event_info}>
                <p>1:30 - 3:00</p>
                <p>Venue</p>
              </div>
              <button className={styles.event_btn}>REGISTER</button>
            </div>
            <div className={styles.event_card}>
              <div className={styles.event_info}>
                <p>Innovat-O-thon</p>
                <p>Team</p>
              </div>
              <div className={styles.event_info}>
                <p>10:00 - 11:30</p>
                <p>Venue</p>
              </div>
              <button className={styles.event_btn}>REGISTER</button>
            </div>
            <div className={styles.event_card}>
              <div className={styles.event_info}>
                <p>CSS Battle</p>
                <p>Individual</p>
              </div>
              <div className={styles.event_info}>
                <p>12:00 - 1:30</p>
                <p>Venue</p>
              </div>
              <button className={styles.event_btn}>REGISTER</button>
            </div>
            <div className={styles.event_card}>
              <div className={styles.event_info}>
                <p>U-eye the design</p>
                <p>Team</p>
              </div>
              <div className={styles.event_info}>
                <p>1:30 - 3:00</p>
                <p>Venue</p>
              </div>
              <button className={styles.event_btn}>REGISTER</button>
            </div>
          </div>
          <div className={toggle === 2 ? styles.active : styles.passive}>
          <div className={styles.event_card}>
              <div className={styles.event_info}>
                <p>Just a Minute - JAM</p>
                <p>Individual</p>
              </div>
              <div className={styles.event_info}>
                <p>10:00 - 11:30</p>
                <p>Venue</p>
              </div>
              <button className={styles.event_btn}>REGISTER</button>
            </div>
            <div className={styles.event_card}>
              <div className={styles.event_info}>
                <p>Keep It Reel</p>
                <p>Team</p>
              </div>
              <div className={styles.event_info}>
                <p>12:00- 1:30</p>
                <p>Venue</p>
              </div>
              <button className={styles.event_btn}>REGISTER</button>
            </div>
            <div className={styles.event_card}>
              <div className={styles.event_info}>
                <p>Sight on Site</p>
                <p>Team</p>
              </div>
              <div className={styles.event_info}>
                <p>1:30 - 3:00</p>
                <p>Venue</p>
              </div>
              <button className={styles.event_btn}>REGISTER</button>
            </div>
            <div className={styles.event_card}>
              <div className={styles.event_info}>
                <p>Murder Mystery</p>
                <p>Team</p>
              </div>
              <div className={styles.event_info}>
                <p>10:00 - 11:30</p>
                <p>Venue</p>
              </div>
              <button className={styles.event_btn}>REGISTER</button>
            </div>
            <div className={styles.event_card}>
              <div className={styles.event_info}>
                <p>Adzap</p>
                <p>Individual</p>
              </div>
              <div className={styles.event_info}>
                <p>12:00 - 1:30</p>
                <p>Venue</p>
              </div>
              <button className={styles.event_btn}>REGISTER</button>
            </div>
            <div className={styles.event_card}>
              <div className={styles.event_info}>
                <p>Laugh Out</p>
                <p>Team</p>
              </div>
              <div className={styles.event_info}>
                <p>1:30 - 3:00</p>
                <p>Venue</p>
              </div>
              <button className={styles.event_btn}>REGISTER</button>
            </div>
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
    </>
  )
}

export default Index
