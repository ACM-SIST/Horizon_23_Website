import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import styles from "../styles/events.module.css"
import codefest from "../public/codefest.jpg"
import brain_busters from "../public/brain_busters.webp"
import innovathon from "../public/innovathon.jpg"
import css_battle from "../public/css_battle.png"
import blind from "../public/blind.jpg"
import design from "../public/ueye_design.png"
import jam from "../public/jam.jpeg"
import reels from "../public/reels.jpg"
import site from "../public/site.jpg"
import mystery from "../public/mystery.jpg"
import adzap from "../public/adzap.jpg"
import laughf from "../public/laugh.png"
import Image from "next/image"
import { useState } from "react";

function Events() {
  const [toggle,setToggle] = useState(1);
  const [tech1,settech1]=useState(false);
  const [tech2,settech2]=useState(false);
  const [tech3,settech3]=useState(false);
  const [tech4,settech4]=useState(false);
  const [tech5,settech5]=useState(false);
  const [tech6,settech6]=useState(false);
  const [nontech1,setnontech1]=useState(false)
  const [nontech2,setnontech2]=useState(false)
  const [nontech3,setnontech3]=useState(false)
  const [nontech4,setnontech4]=useState(false)
  const [nontech5,setnontech5]=useState(false)
  const [nontech6,setnontech6]=useState(false)
  const toggledate = (id) => {
    setToggle(id);
  }
  return (
    <>
        <Navbar />
          <div className={styles.events_heading_container}>
            <h1 className={styles.events_heading}>EVENTS</h1>
          </div>
          <div className={styles.events_container}>
            <div className={styles.events_filter_container}>
              <h6 className={toggle === 1 ? styles.selected : ""} onClick={()=>{
                setToggle(1)
              }}>
                Technical
              </h6>
              <h6 className={toggle === 2 ? styles.selected : ""} onClick={()=>{
                setToggle(2)
              }}>Non Technical</h6>
            </div>
            <div className={styles.events_display_container}>
              <div className={toggle===1 ? styles.active : styles.passive}>
                <div className={styles.event_card}>
                  <div className={styles.event_card_left}>
                    <Image className={styles.event_img} src={codefest} alt="card"/>
                  </div>
                  <div className={styles.event_card_right}>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Title : </p>
                      <p>Codefest</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Date : </p>
                      <p>23rd Mar</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Time : </p>
                      <p>11:00 - 13:00</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Venue : </p>
                      <p>Sathyabama</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Type : </p>
                      <p>Individual</p>
                    </div>
                    <div className={styles.card_btn_container}>
                      <a className={styles.register_btn} onClick={()=>{
                        settech1(!tech1)
                      }}>{tech1 ? "Read Less" : "Read More"}</a>
                    </div>
                    <div className={tech1 ? styles.rules_display : styles.rules_none}>
                      <div className={styles.desc_container}>
                        <p className={styles.ques}>Desc :</p>
                        <p>
                        It involves the participants trying to code/program according to the given specifications. The participant must be able to solve the problems in a given set of time.This competition will test a participants coding and debugging skills and their knowledge in programming languages.
                        </p>
                      </div>
                      <p className={styles.ques}> Rules :</p>
                      <ul>
                        <li className={styles.list_item}><p>Round 1: Guess the output
Each question will have a timer and it should be answered within the time span
</p></li>
                        <li className={styles.list_item}><p>Round 2: Competitive Coding
Will be conducted in Hackerrank.
Participants are required to find the solution to the given coding problem.
</p></li>
                        <li className={styles.list_item}><p>Participants are NOT allowed to browse the internet. If found, the participant will be DISQUALIFIED.</p></li>
                      </ul>
                      <p className={styles.ques}>Requirements :</p>
                      <p>
                         Laptop is Mandatory<br/>
                         Participants MUST have a Hackerrank account for competing. We will inform you earlier about any further details / changes about the event.
                      </p>
                      <div className={styles.register_btn_container}><a href='http://bit.ly/acmhorizon2023' className={styles.register_btn}>Register</a></div>
                    </div>
                  </div>
                </div>
                <div className={styles.event_card}>
                  <div className={styles.event_card_left}>
                    <Image className={styles.event_img} src={brain_busters} alt="card"/>
                  </div>
                  <div className={styles.event_card_right}>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Title : </p>
                      <p>Brain Busters</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Date : </p>
                      <p>23rd Mar</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Time : </p>
                      <p>12:00 - 14:00</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Venue : </p>
                      <p>Sathyabama</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Type : </p>
                      <p>Team</p>
                    </div>
                    <div className={styles.card_btn_container}>
                      <a className={styles.register_btn} onClick={()=>{
                        settech2(!tech2)
                      }}>{tech2 ? "Read Less" : "Read More"}</a>
                    </div>
                    <div className={tech2 ? styles.rules_display : styles.rules_none}>
                      <div className={styles.desc_container}>
                        <p className={styles.ques}>Desc :</p>
                        <p>
                        An  another Technical event which is about Technical Quiz on Core Topics where you can test your Knowledge on core concepts.
                        </p>
                      </div>
                      <p className={styles.ques}> Rules :</p>
                      <ul>
                        <li className={styles.list_item}><p>Level 1 : Tech Teaser
In this  Round we will  be asking the basic Questions from the Core Topics
</p></li>
                        <li className={styles.list_item}><p>Level 2 : Technophilia 
In this Round the difficulty level of the questions will be little high compare to level 1.
</p></li>
                        <li className={styles.list_item}><p>Maximum 2 members in a team</p></li>
                      </ul>
                      <p className={styles.ques}>Requirements :</p>
                      <p>
                      Laptop is Mandatory
                      </p>
                      <div className={styles.register_btn_container}><a href='http://bit.ly/acmhorizon2023' className={styles.register_btn}>Register</a></div>
                    </div>
                  </div>
                </div>
                <div className={styles.event_card}>
                  <div className={styles.event_card_left}>
                    <Image className={styles.event_img} src={blind} alt="card"/>
                  </div>
                  <div className={styles.event_card_right}>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Title : </p>
                      <p>Blind Presentation</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Date : </p>
                      <p>23rd Mar</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Time : </p>
                      <p>13:00 - 15:00</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Venue : </p>
                      <p>Sathyabama</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Type : </p>
                      <p>Team</p>
                    </div>
                    <div className={styles.card_btn_container}>
                      
                      <a className={styles.register_btn} onClick={()=>{
                        settech3(!tech3)
                      }}>{tech3 ? "Read Less" : "Read More"}</a>
                    </div>
                    <div className={tech3 ? styles.rules_display : styles.rules_none}>
                      <div className={styles.desc_container}>
                        <p className={styles.ques}>Desc :</p>
                        <p>
                        An opportunity to showcase your skill of Presentation.  Present your presentation in the most creative way you can ! This competition will test a participants mindset and presentation skills and their knowledge in given areas.
                        </p>
                      </div>
                      <p className={styles.ques}> Rules :</p>
                      <ul>
                        <li className={styles.list_item}><p>Maximum 2 members in a team.</p></li>
                        <li className={styles.list_item}><p>Maximum number of Slides should be 30.</p></li>
                        <li className={styles.list_item}><p>Ppt should be innovative and formal.Teams should include new features in their presentation.
</p></li>
                      </ul>
                      <div className={styles.desc_container}>
                        <p className={styles.ques}>Requirements :</p>
                        <p>
                        Laptop is Mandatory
                        </p>
                        <div className={styles.register_btn_container}><a href='http://bit.ly/acmhorizon2023' className={styles.register_btn}>Register</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.event_card}>
                  <div className={styles.event_card_left}>
                    <Image className={styles.event_img} src={innovathon} alt="card"/>
                  </div>
                  <div className={styles.event_card_right}>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Title : </p>
                      <p>Innovat-O-thon</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Date : </p>
                      <p>24th Mar</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Time : </p>
                      <p>09:30 - 11:30</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Venue : </p>
                      <p>Sathyabama</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Type : </p>
                      <p>Team</p>
                    </div>
                    <div className={styles.card_btn_container}>
                      <a className={styles.register_btn} onClick={()=>{
                        settech4(!tech4)
                      }}>{tech4 ? "Read Less" : "Read More"}</a>
                    </div>
                    <div className={tech4 ? styles.rules_display : styles.rules_none}>
                      <div className={styles.desc_container}>
                        <p className={styles.ques}>Desc :</p>
                        <p>
                        Product Innovation meets a hackathon. Participants should develop innovative products (Software, Hardware, Both) which can be used to generate revenue and serve any business in any sector.
                        </p>
                      </div>
                      <p className={styles.ques}> Rules :</p>
                      <ul>
                        <li className={styles.list_item}><p>Product should be working in realtime during the walkthrough.Source Code should be made publicly available in a repository.
</p></li>
                        <li className={styles.list_item}><p>PPT about that product should be presented.Judging will be based on innovation and how well the product serves a business.
</p></li>
                        <li className={styles.list_item}><p>Each team can have a size of 2 members.</p></li>
                      </ul>
                      <div className={styles.desc_container}>
                        <p className={styles.ques}>Requirements :</p>
                        <p>
                        Laptop is Mandatory<br/>
                        Any hardware prototype (OPTIONAL)
                        </p>
                        <div className={styles.register_btn_container}><a href='http://bit.ly/acmhorizon2023' className={styles.register_btn}>Register</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.event_card}>
                  <div className={styles.event_card_left}>
                    <Image className={styles.event_img} src={css_battle} alt="card"/>
                  </div>
                  <div className={styles.event_card_right}>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Title : </p>
                      <p>CSS Battle</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Date : </p>
                      <p>24th Mar</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Time : </p>
                      <p>10:30 - 12:30</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Venue : </p>
                      <p>Sathyabama</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Type : </p>
                      <p>Individual</p>
                    </div>
                    <div className={styles.card_btn_container}>
                      <a className={styles.register_btn} onClick={()=>{
                        settech5(!tech5)
                      }}>{tech5 ? "Read Less" : "Read More"}</a>
                    </div>
                    <div className={tech5 ? styles.rules_display : styles.rules_none}>
                      <div className={styles.desc_container}>
                        <p className={styles.ques}>Desc :</p>
                        <p>
                        Given an image , individuals have to recreate the image using custom HTML/CSS rules.
                        </p>
                      </div>
                      <p className={styles.ques}> Rules :</p>
                      <ul>
                        <li className={styles.list_item}><p>Should use only CSS. No software products.</p></li>
                        <li className={styles.list_item}><p>internet is not provided</p></li>
                      </ul>
                      <div className={styles.desc_container}>
                        <p className={styles.ques}>Requirements :</p>
                        <p>
                          Laptop is Mandatory
                        </p>
                      </div>
                      <div className={styles.register_btn_container}><a href='http://bit.ly/acmhorizon2023' className={styles.register_btn}>Register</a></div>
                    </div>
                  </div>
                </div>
                <div className={styles.event_card}>
                  <div className={styles.event_card_left}>
                    <Image className={styles.event_img} src={design} alt="card"/>
                  </div>
                  <div className={styles.event_card_right}>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Title : </p>
                      <p>U-eye the design</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Date : </p>
                      <p>24th Mar</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Time : </p>
                      <p>11:30 - 13:30</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Venue : </p>
                      <p>Sathyabama</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Type : </p>
                      <p>Team</p>
                    </div>
                    <div className={styles.card_btn_container}>
                      
                      <a className={styles.register_btn} onClick={()=>{
                        settech6(!tech6)
                      }}>{tech6 ? "Read Less" : "Read More"}</a>
                    </div>
                    <div className={tech6 ? styles.rules_display : styles.rules_none}>
                      <div className={styles.desc_container}>
                        <p className={styles.ques}>Desc :</p>
                        <p>
                        A design challenge where students need to design the UI for a given problem statement.
                        </p>
                      </div>
                      <p className={styles.ques}> Rules :</p>
                      <ul>
                        <li className={styles.list_item}><p>Team size of 2 participants only</p></li>
                        <li className={styles.list_item}><p>Time limit: 45 mins</p></li>
                        <li className={styles.list_item}><p>Any designing tool can be used .Judging will be based on how user-interactive and appealing the designs are.
</p></li>
                      </ul>
                      <div className={styles.desc_container}>
                        <p className={styles.ques}>Requirements :</p>
                        <p>
                        Laptop is Mandatory
                        </p>
                        <div className={styles.register_btn_container}><a href='http://bit.ly/acmhorizon2023' className={styles.register_btn}>Register</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={toggle===2 ? styles.active : styles.passive}>
              <div className={styles.event_card}>
                  <div className={styles.event_card_left}>
                    <Image className={styles.event_img} src={jam} alt="card"/>
                  </div>
                  <div className={styles.event_card_right}>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Title : </p>
                      <p>Just A Minute</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Date : </p>
                      <p>23rd Mar</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Time : </p>
                      <p>11:00 - 13:00</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Venue : </p>
                      <p>Sathyabama</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Type : </p>
                      <p>Individual</p>
                    </div>
                    <div className={styles.card_btn_container}>
                      <a className={styles.register_btn} onClick={()=>{
                        setnontech1(!nontech1)
                      }}>{nontech1 ? "Read Less" : "Read More"}</a>
                    </div>
                    <div className={nontech1 ? styles.rules_display : styles.rules_none}>
                      <div className={styles.desc_container}>
                        <p className={styles.ques}>Desc :</p>
                        <p>
                        It’s an Individual event where the participant can showcase their talent within a minute.
                        </p>
                      </div>
                      <p className={styles.ques}> Rules :</p>
                      <ul>
                        <li className={styles.list_item}><p>You should showcase your skill within the time limit. If the skill requires any material then it has to be taken care of by the individual itself. 
</p></li>
                        <li className={styles.list_item}><p>Any type of vulgar events are  
        not encouraged. 
</p></li>
                        <li className={styles.list_item}><p>Time duration 2min max</p></li>
                      </ul>
                      <div className={styles.register_btn_container}><a href='http://bit.ly/acmhorizon2023' className={styles.register_btn}>Register</a></div>
                    </div>
                  </div>
                </div>
                <div className={styles.event_card}>
                  <div className={styles.event_card_left}>
                    <Image className={styles.event_img} src={reels} alt="card"/>
                  </div>
                  <div className={styles.event_card_right}>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Title : </p>
                      <p>Keep It Reel</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Date : </p>
                      <p>23rd Mar</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Time : </p>
                      <p>12:00 - 14:00</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Venue : </p>
                      <p>Sathyabama</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Type : </p>
                      <p>Team</p>
                    </div>
                    <div className={styles.card_btn_container}>
                      
                      <a className={styles.register_btn} onClick={()=>{
                        setnontech2(!nontech2)
                      }}>{nontech2 ? "Read Less" : "Read More"}</a>
                    </div>
                    <div className={nontech2 ? styles.rules_display : styles.rules_none}>
                      <div className={styles.desc_container}>
                        <p className={styles.ques}>Desc :</p>
                        <p>
                        Participants are requested to create a reel centered on the College Theme. Only the SIST campus must be used to film the video. Keep it relevant, appropriate, and unique. It will be judged based on creativity, usage of location and relevance to the topic.
                        </p>
                      </div>
                      <p className={styles.ques}> Rules :</p>
                      <ul>
                        <li className={styles.list_item}><p>The reel must be original and must be their own creativity. Each team is limited to one video.
</p></li>
                        <li className={styles.list_item}><p>The maximum time limit is 30 seconds and minimum is 15 seconds. Participants will be disqualified if they exceed the time limit.</p></li>
                        <li className={styles.list_item}><p>Decisions of the organizing committee shall be the final.No offensive, derogatory remarks should be used. 
</p></li>
                        <li className={styles.list_item}><p>The shooting must not interfere with classes, faculty, or students in any way.
Each team can have a size of 2 members
</p></li>
                      </ul>
                      <div className={styles.desc_container}>
                        <p className={styles.ques}>Requirements :</p>
                        <p>
                          Phone or Camera for Recording
                        </p>
                        <div className={styles.register_btn_container}><a href='http://bit.ly/acmhorizon2023' className={styles.register_btn}>Register</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.event_card}>
                  <div className={styles.event_card_left}>
                    <Image className={styles.event_img} src={site} alt="card"/>
                  </div>
                  <div className={styles.event_card_right}>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Title : </p>
                      <p>Sight on Site</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Date : </p>
                      <p>23rd Mar</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Time : </p>
                      <p>13:00 - 15:00</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Venue : </p>
                      <p>Sathyabama</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Type : </p>
                      <p>Team</p>
                    </div>
                    <div className={styles.card_btn_container}>
                      
                      <a className={styles.register_btn} onClick={()=>{
                        setnontech3(!nontech3)
                      }}>{nontech3 ? "Read Less" : "Read More"}</a>
                    </div>
                    <div className={nontech3 ? styles.rules_display : styles.rules_none}>
                      <div className={styles.desc_container}>
                        <p className={styles.ques}>Desc :</p>
                        <p>
                        Here  sight on site weighs on the saying When it comes to recall, it’s very much a case of ‘use it, don’t lose it’.
sight on site in a memory quiz game, it’s played in teams , there would be slides in each round which consist of photos and videos, after each round questions would be asked and the result depends on the number of questions u answered correct. In the end of the game winners would be getting some exiting goodies. Play your way as you unravel the secrets in the slides.
                        </p>
                      </div>
                      <p className={styles.ques}> Rules :</p>
                      <ul>
                        <li className={styles.list_item}><p>The size of the team is 2.</p></li>
                        <li className={styles.list_item}><p>Mobile phones or any other electronic devices are not allowed.</p></li>
                        <li className={styles.list_item}><p>while the slides are screening writing down is prohibited.
Participant’s shouldn’t have any words with other teammates while the slides are screening
</p></li>
                      </ul>
                      <div className={styles.desc_container}>
                        <p className={styles.ques}>Requirements :</p>
                        <p>
                          Stationary
                        </p>
                        <div className={styles.register_btn_container}><a href='http://bit.ly/acmhorizon2023' className={styles.register_btn}>Register</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.event_card}>
                  <div className={styles.event_card_left}>
                    <Image className={styles.event_img} src={laughf} alt="card"/>
                  </div>
                  <div className={styles.event_card_right}>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Title : </p>
                      <p>Laugh Out</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Date : </p>
                      <p>24th Mar</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Time : </p>
                      <p>09:30 - 11:30</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Venue : </p>
                      <p>Sathyabama</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Type : </p>
                      <p>individual</p>
                    </div>
                    <div className={styles.card_btn_container}>
                      <a className={styles.register_btn} onClick={()=>{
                        setnontech4(!nontech4)
                      }}>{nontech4 ? "Read Less" : "Read More"}</a>
                    </div>
                    <div className={nontech4 ? styles.rules_display : styles.rules_none}>
                      <div className={styles.desc_container}>
                        <p className={styles.ques}>Desc :</p>
                        <p>
                        In this event we have to make everyone laugh with the sarcasm inside ourselves. It’s all about the laugh we make on everyones face and make them happy.
Our jokes should be the stress killer for everyone sitting down there.
The way they will make audience happy will decide the winner.

                        </p>
                      </div>
                      <p className={styles.ques}> Rules :</p>
                      <ul>
                        <li className={styles.list_item}><p>Time limit is 4 to 5 min . If the content is good the time will be extend . 
</p></li>
                        <li className={styles.list_item}><p>No participants should use controversial statements / no comments on religion . 
</p></li>
                        <li className={styles.list_item}><p>No hate speech against any community/racial slurs.
</p></li>
                      </ul>
                      <div className={styles.register_btn_container}><a href='http://bit.ly/acmhorizon2023' className={styles.register_btn}>Register</a></div>
                    </div>
                  </div>
                </div>
                <div className={styles.event_card}>
                  <div className={styles.event_card_left}>
                    <Image className={styles.event_img} src={adzap} alt="card"/>
                  </div>
                  <div className={styles.event_card_right}>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Title : </p>
                      <p>Adzap</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Date : </p>
                      <p>24th Mar</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Time : </p>
                      <p>10:30 - 12:30</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Venue : </p>
                      <p>Sathyabama</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Type : </p>
                      <p>Team</p>
                    </div>
                    <div className={styles.card_btn_container}>
                      
                      <a className={styles.register_btn} onClick={()=>{
                        setnontech5(!nontech5)
                      }}>{nontech5 ? "Read Less" : "Read More"}</a>
                    </div>
                    <div className={nontech5 ? styles.rules_display : styles.rules_none}>
                      <div className={styles.desc_container}>
                        <p className={styles.ques}>Desc :</p>
                        <p>
                        Teams are asked to prepare creative advertisements for the topics given to them. Participants can demonstrate their immense creativity and out-of-the-box thinking skills by coming up with different ideas.
                        </p>
                      </div>
                      <p className={styles.ques}> Rules :</p>
                      <ul>
                        <li className={styles.list_item}><p>Participants will be given a product name and are required to sell the product to the judges.</p></li>
                        <li className={styles.list_item}><p>Product will be given on the spot by the judges.Participants are required to come up with a jingle and a pitch for the product.
</p></li>
                        <li className={styles.list_item}><p>Participants must enact  sequence of advertisements for their given product.Vulgarity of any form will lead to disqualification.
</p></li>
<li className={styles.list_item}><p>Team size only 2  members
</p></li>
<li className={styles.list_item}><p>Best SALESMAN will be awarded
</p></li>
                      </ul>
                      <div className={styles.desc_container}>
                        <p className={styles.ques}>Requirements :</p>
                        <p>
                        None
                        </p>
                        <div className={styles.register_btn_container}><a href='http://bit.ly/acmhorizon2023' className={styles.register_btn}>Register</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.event_card}>
                  <div className={styles.event_card_left}>
                    <Image className={styles.event_img} src={mystery} alt="card"/>
                  </div>
                  <div className={styles.event_card_right}>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Title : </p>
                      <p>Murder Mystery</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Date : </p>
                      <p>24th Mar</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Time : </p>
                      <p>11:00 - 13:30</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Venue : </p>
                      <p>Sathyabama</p>
                    </div>
                    <div className={styles.event_info}>
                      <p className={styles.ques}>Type : </p>
                      <p>Team</p>
                    </div>
                    <div className={styles.card_btn_container}>
                      <a className={styles.register_btn} onClick={()=>{
                        setnontech4(!nontech4)
                      }}>{nontech4 ? "Read Less" : "Read More"}</a>
                    </div>
                    <div className={nontech4 ? styles.rules_display : styles.rules_none}>
                      <div className={styles.desc_container}>
                        <p className={styles.ques}>Desc :</p>
                        <p>
                        It’s a game event where the clues will be given and the teams have to solve the clues and keep moving to the next level. The first team to solve all the clue’s will be the final winner
                        </p>
                      </div>
                      <p className={styles.ques}> Rules :</p>
                      <ul>
                        <li className={styles.list_item}><p>Each team can have a size of 2 members
Totally 8 rounds will be there
</p></li>
                        <li className={styles.list_item}><p>Solving each clue will get you to the next round
The team which solves the riddle first with the given clues will be moving to consecutive rounds .
</p></li>
                        <li className={styles.list_item}><p>The team that solves the riddles fast and finds the murderer first will win exciting prizes.
The team who solves the clue last will be eliminated. 
</p></li>
                      </ul>
                      <div className={styles.register_btn_container}><a href='http://bit.ly/acmhorizon2023' className={styles.register_btn}>Register</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <Footer />
    </>
  )
}

export default Events