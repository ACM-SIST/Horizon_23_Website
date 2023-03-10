import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
// import "swiper/components/effect-coverflow/effect-coverflow.min.css";
// import "swiper/components/pagination/pagination.min.css";
// import "swiper/components/navigation/navigation.min.css";

import styles from "../styles/event.module.css"
import Image from "next/image";
import codefest from "../public/codefest.jpg"


import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation
  } from "swiper/core";
  import React, { useRef, useState } from "react";
  import { BsCalendar2Date } from "react-icons/bs";
  import {
    MdLocationPin,
    MdOutlinePersonOutline,
    MdGroup,
    MdGroups2
  } from "react-icons/md";
  import DisplayRules from "./DisplayRules";
import { StyleRegistry } from "styled-jsx";
  
  SwiperCore.use([EffectCoverflow, Pagination, Navigation]);
  


export default function App(props){





    const [Rules, setRules] = useState("false");
    const [CodefestRules, setCodefestRules] = useState("false");
    const [HackthonRules, setHackathonRules] = useState("false");
    const [CSSbattleRules, setCSSbattleRules] = useState("false");
    const [UIdesignRules, setUIdesignRules] = useState("false");
    const [BlindrepRules, setBlindrepRules] = useState("false");
    const [BrainbustersRules, setBrainbustersRules] = useState("false");


    const [murdermysteryRules, setmurdermysteryRules] = useState("false");
    const [jamRules, setjamRules] = useState("false");
    const [laughoutRules, setlaughoutRules] = useState("false");
    const [sightonRules, setsightonRules] = useState("false");
    const [reelsRules, setreelsRules] = useState("false");
    const [adzapRules, setadzapRules] = useState("false");
   



  
    const [HideRules, setHideRules] = useState("Know More");
    const [CodefestHideRules, setCodefestHideRules] = useState("Know More");
    const [HackthonHideRules, setHackthonHideRules] = useState("Know More");
    const [CSSbattleHideRules, setCSSbattleHideRules] = useState("Know More");
    const [UIdesignHideRules, setUIdesignHideRules] = useState("Know More");
    const [BlindrepHideRules, setBlindrepHideRules] = useState("Know More");
    const [BrainbustersHideRules, setBrainbustersHideRules] = useState(
      "Know More"
    );


    const [murdermysteryHideRules, setmurdermysteryHideRules] = useState("Know More");
    const [jamHideRules, setjamHideRules] = useState("Know More");
    const [laughoutHideRules, setlaughoutHideRules] = useState("Know More");
    const [sightonHideRules, setsightonHideRules] = useState("Know More");
    const [reelsHideRules, setreelsHideRules] = useState("Know More");
    const [adzapHideRules, setadzapHideRules] = useState("Know More");

    


  
    const [chanestyle, setchangestyle] = useState("CardContent");



    if (props.EventType === "Tech") {
  return (
    <div className={styles.swipcontainer}>
      {/* <div className="title_wrapper">
        <div className="reactLogo">
          <Image alt="image" src="images/react.png" />
        </div>
        <div className="title_">
          <span>React</span>Swiper Slider
        </div>
      </div> */}
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        // slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        breakpoints={{
            350: {
            slidesPerView: 1.5,
            spaceBetween: 0,
        },  
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 40,
        }
       }}
        
        loop={false}
        coverflowEffect={{
          rotate: 50,
          stretch: 50,
          depth: 100,
          modifier: 1,
          scale: 1,
          slideShadows: true
        }}
        pagination={{
          clickable: true
        }}
        // className="mySwiper"
      >
        <SwiperSlide>
        <div class={styles.CardContainer}>
              <div class={styles.CardImage}>
                <Image src={codefest} alt="codefest" />
              </div>
              <div className={styles.CardContent}>
                <div className={styles.CardHead}>
                  <h1>CodeFest</h1>
                </div>
                <div className={styles.CardEventDetails}>
                  <p>
                    <BsCalendar2Date />
                    &nbsp;&nbsp; 11:00 AM, 23th March, 2023
                  </p>
                  <p>
                    <MdLocationPin />
                    &nbsp;&nbsp; Sathyabama University
                  </p>
                  <p>
                    <MdOutlinePersonOutline />
                    &nbsp;&nbsp; Individual Participation
                  </p>
                </div>
                <div className={styles.CardDescription}>
                  <h3> About</h3>
                  <p>
                  Here comes an another Technical Event , It is an individual event which involves the participants in trying to code/program according to the given specifications. The participant must be able to solve the problems in a given set of time. This competition will test a participant’s coding and debugging skills and their knowledge in programming languages.
                  </p>
                </div>
                <div className={styles.CardButton}>
                  <button
                    onClick={() => {
                      if (CodefestRules === "false") {
                        // setchangestyle("CardAfterShow");

                        setCodefestRules("true");
                        setCodefestHideRules("Show Less");
                        return;
                      } else {
                        // setchangestyle("CardContent");

                        setCodefestRules("false");
                        setCodefestHideRules("Know More");
                        return;
                      }
                    }}
                  >
                    {CodefestHideRules}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <DisplayRules show={CodefestRules} event="codefest" />
            </div>        
        </SwiperSlide>
        <SwiperSlide>
        <div class={styles.CardContainer}>
              <div class={styles.CardImage}>
                <img alt="image" src="https://blarrow.tech/wp-content/uploads/2019/10/104906175-GettyImages-843466180.jpg" />
              </div>
              <div className={styles.CardContent}>
                <div className={styles.CardHead}>
                  <h1>Innovat-O-thon</h1>
                </div>
                <div className={styles.CardEventDetails}>
                  <p>
                    <BsCalendar2Date />
                    &nbsp;&nbsp;10:00 AM, 24th March, 2023
                  </p>
                  <p>
                    <MdLocationPin />
                    &nbsp;&nbsp; Sathyabama University
                  </p>
                  <p>
                    <MdGroups2 />
                    &nbsp;&nbsp; Group Participation
                  </p>
                </div>
                <div className={styles.CardDescription}>
                  <h3> About</h3>
                  <p>
                    This is an individual event which involves the participants
                    in trying to code/program according to the given
                    specifications.
                  </p>
                </div>
                <div className={styles.CardButton}>
                  <button
                    onClick={() => {
                      if (HackthonRules === "false") {
                        setHackathonRules("true");
                        setHackthonHideRules("Show Less");
                        return;
                      } else {
                        setHackathonRules("false");
                        setHackthonHideRules("Know More");
                        return;
                      }
                    }}
                  >
                    {HackthonHideRules}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <DisplayRules show={HackthonRules} event="innovat-o-thon" />
            </div>        
        </SwiperSlide>
        <SwiperSlide>
        <div class={styles.CardContainer}>
              <div class={styles.CardImage}>
                <img alt="image" src="data:image/jpeg;base64,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" />
              </div>
              <div className={styles.CardContent}>
                <div className={styles.CardHead}>
                  <h1>CSS Battle</h1>
                </div>
                <div className={styles.CardEventDetails}>
                  <p>
                    <BsCalendar2Date />
                    &nbsp;&nbsp;10:00 AM, 24th March, 2023
                  </p>
                  <p>
                    <MdLocationPin />
                    &nbsp;&nbsp; Sathyabama University
                  </p>
                  <p>
                    <MdOutlinePersonOutline />
                    &nbsp;&nbsp; Individual Participation
                  </p>
                </div>
                <div className={Symbol.CardDescription}>
                  <h3> About</h3>
                  <p>
                    This is an individual event which involves the participants
                    in trying to code/program according to the given
                    specifications.
                  </p>
                </div>
                <div className={styles.CardButton}>
                  <button
                    onClick={() => {
                      if (CSSbattleRules === "false") {
                        setCSSbattleRules("true");
                        setCSSbattleHideRules("Show Less");
                        return;
                      } else {
                        setCSSbattleRules("false");
                        setCSSbattleHideRules("Know More");
                        return;
                      }
                    }}
                  >
                    {CSSbattleHideRules}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <DisplayRules show={CSSbattleRules} event="cssbattle" />
            </div>        
        </SwiperSlide>
        <SwiperSlide>
        <div class={styles.CardContainer}>
              <div class={styles.CardImage}>
                <img alt="image" src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1131112/retina_300x120_cover-most-common-ui-design-mistakes-83b6e6de7d66fbca5b9b12a8b7161936.png" />
              </div>
              <div className={styles.CardContent}>
                <div className={styles.CardHead}>
                  <h1>U-Eye The Design</h1>
                </div>
                <div className={styles.CardEventDetails}>
                  <p>
                    <BsCalendar2Date />
                    &nbsp;&nbsp;10:00 AM, 24th March, 2023
                  </p>
                  <p>
                    <MdLocationPin />
                    &nbsp;&nbsp; Sathyabama University
                  </p>
                  <p>
                    <MdGroup />
                    &nbsp;&nbsp; Duo Participation
                  </p>
                </div>
                <div className={styles.CardDescription}>
                  <h3> About</h3>
                  <p>
                    This is an individual event which involves the participants
                    in trying to code/program according to the given
                    specifications.
                  </p>
                </div>
                <div className={styles.CardButton}>
                  <button
                    onClick={() => {
                      if (UIdesignRules === "false") {
                        setUIdesignRules("true");
                        setUIdesignHideRules("Show Less");
                        return;
                      } else {
                        setUIdesignRules("false");
                        setUIdesignHideRules("Know More");
                        return;
                      }
                    }}
                  >
                    {UIdesignHideRules}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <DisplayRules show={UIdesignRules} event="uidesign" />
            </div>        
        </SwiperSlide>
        <SwiperSlide>
        <div class={styles.CardContainer}>
              <div class={styles.CardImage}>
                <img alt="image" src="https://learn.g2crowd.com/hubfs/iStock-987365514.jpg" />
              </div>
              <div className={styles.CardContent}>
                <div className={styles.CardHead}>
                  <h1>Blind Presentation</h1>
                </div>
                <div className={styles.CardEventDetails}>
                  <p>
                    <BsCalendar2Date />
                    &nbsp;&nbsp;10:00 AM, 24th March, 2023
                  </p>
                  <p>
                    <MdLocationPin />
                    &nbsp;&nbsp; Sathyabama University
                  </p>
                  <p>
                    <MdGroup />
                    &nbsp;&nbsp; Duo Participation
                  </p>
                </div>
                <div className={styles.CardDescription}>
                  <h3> About</h3>
                  <p>
                    This is an individual event which involves the participants
                    in trying to code/program according to the given
                    specifications.
                  </p>
                </div>
                <div className={styles.CardButton}>
                  <button
                    onClick={() => {
                      if (BlindrepRules === "false") {
                        setBlindrepRules("true");
                        setBlindrepHideRules("Show Less");
                        return;
                      } else {
                        setBlindrepRules("false");
                        setBlindrepHideRules("Know More");
                        return;
                      }
                    }}
                  >
                    {BlindrepHideRules}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <DisplayRules show={BlindrepRules} event="blindrepresentation" />
            </div>        
        </SwiperSlide>
        <SwiperSlide>
        <div class={styles.CardContainer}>
              <div class={styles.CardImage}>
                <img alt="image" src="https://s3.envato.com/files/242335747/Tech%20Brain.png" />
              </div>
              <div className={styles.CardContent}>
                <div className={styles.CardHead}>
                  <h1>Brain Busters</h1>
                </div>
                <div className={styles.CardEventDetails}>
                  <p>
                    <BsCalendar2Date />
                    &nbsp;&nbsp;10:00 AM, 24th March, 2023
                  </p>
                  <p>
                    <MdLocationPin />
                    &nbsp;&nbsp; Sathyabama University
                  </p>
                  <p>
                    <MdGroup />
                    &nbsp;&nbsp; Duo Participation
                  </p>
                </div>
                <div className={styles.CardDescription}>
                  <h3> About</h3>
                  <p>
                    This is an individual event which involves the participants
                    in trying to code/program according to the given
                    specifications.
                  </p>
                </div>
                <div className={styles.CardButton}>
                  <button
                    onClick={() => {
                      if (BrainbustersRules === "false") {
                        setBrainbustersRules("true");
                        setBrainbustersHideRules("Show Less");
                        return;
                      } else {
                        setBrainbustersRules("false");
                        setBrainbustersHideRules("Know More");
                        return;
                      }
                    }}
                  >
                    {BrainbustersHideRules}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <DisplayRules show={BrainbustersRules} event="brainbusters" />
            </div>        
        </SwiperSlide>
      </Swiper>
    </div>
  );
      }else if (props.EventType === "NTech") {
        return (
          <div className={styles.swipcontainer}>
            {/* <div className="title_wrapper">
              <div className="reactLogo">
                <Image alt="image" src="images/react.png" />
              </div>
              <div className="title_">
                <span>React</span>Swiper Slider
              </div>
            </div> */}
            <Swiper
              navigation={true}
              effect={"coverflow"}
              centeredSlides={true}
              slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
              loop={false}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
              }}
              pagination={{
                clickable: true
              }}
              className="mySwiper"
            >
              <SwiperSlide>
              <div class={styles.CardContainer}>
              <div class={styles.CardImage}>
                <img alt="image" src="https://www.wiseworkplace.com.au/wp-content/uploads/2020/11/Blog_Image6.jpg" />
              </div>
              <div className={styles.CardContent}>
                <div className={styles.CardHead}>
                  <h1>Murder Mystery</h1>
                </div>
                <div className={styles.CardEventDetails}>
                  <p>
                    <BsCalendar2Date />
                    &nbsp;&nbsp; 10:00 AM, 24th March, 2023
                  </p>
                  <p>
                    <MdLocationPin />
                    &nbsp;&nbsp; Sathyabama University
                  </p>
                  <p>
                    <MdOutlinePersonOutline />
                    &nbsp;&nbsp; Individual Participation
                  </p>
                </div>
                <div className={styles.CardDescription}>
                  <h3> About</h3>
                  <p>
                    This is an individual event which involves the participants
                    in trying to code/program according to the given
                    specifications.
                  </p>
                </div>
                <div className={styles.CardButton}>
                  <button
                    onClick={() => {
                      if (murdermysteryRules === "false") {
                        setmurdermysteryRules("true");
                        setmurdermysteryHideRules("Show Less");
                        return;
                      } else {
                        setmurdermysteryRules("false");
                        setmurdermysteryHideRules("Know More");
                        return;
                      }
                    }}
                  >
                    {murdermysteryHideRules}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <DisplayRules show={murdermysteryRules} event="murdermystery" />
            </div>       
              </SwiperSlide>
              <SwiperSlide>
              <div class={styles.CardContainer}>
              <div class={styles.CardImage}>
                <img alt="image" src="https://www.myfirstboss.com/uploads/blog_post_image/18395.jpg" />
              </div>
              <div className={styles.CardContent}>
                <div className={styles.CardHead}>
                  <h1>Just A Minute</h1>
                </div>
                <div className={styles.CardEventDetails}>
                  <p>
                    <BsCalendar2Date />
                    &nbsp;&nbsp; 10:00 AM, 24th March, 2023
                  </p>
                  <p>
                    <MdLocationPin />
                    &nbsp;&nbsp; Sathyabama University
                  </p>
                  <p>
                    <MdOutlinePersonOutline />
                    &nbsp;&nbsp; Individual Participation
                  </p>
                </div>
                <div className={styles.CardDescription}>
                  <h3> About</h3>
                  <p>
                    This is an individual event which involves the participants
                    in trying to code/program according to the given
                    specifications.
                  </p>
                </div>
                <div className={styles.CardButton}>
                  <button
                    onClick={() => {
                      if (jamRules === "false") {
                        setjamRules("true");
                        setjamHideRules("Show Less");
                        return;
                      } else {
                        setjamRules("false");
                        setjamHideRules("Know More");
                        return;
                      }
                    }}
                  >
                    {jamHideRules}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <DisplayRules show={jamRules} event="jam" />
            </div>       
              </SwiperSlide>
              <SwiperSlide>
              <div class={styles.CardContainer}>
              <div class={styles.CardImage}>
                <img alt="image" src="https://static01.nyt.com/images/2022/03/12/arts/08comedy-tomlinson1/merlin_202723149_3e43b194-c8b2-4315-b9da-5788db9edb58-mobileMasterAt3x.jpg" />
              </div>
              <div className={styles.CardContent}>
                <div className={styles.CardHead}>
                  <h1>Laugh Out</h1>
                </div>
                <div className={styles.CardEventDetails}>
                  <p>
                    <BsCalendar2Date />
                    &nbsp;&nbsp; 10:00 AM, 24th March, 2023
                  </p>
                  <p>
                    <MdLocationPin />
                    &nbsp;&nbsp; Sathyabama University
                  </p>
                  <p>
                    <MdOutlinePersonOutline />
                    &nbsp;&nbsp; Individual Participation
                  </p>
                </div>
                <div className={styles.CardDescription}>
                  <h3> About</h3>
                  <p>
                    This is an individual event which involves the participants
                    in trying to code/program according to the given
                    specifications.
                  </p>
                </div>
                <div className={styles.CardButton}>
                  <button
                    onClick={() => {
                      if (laughoutRules === "false") {
                        setlaughoutRules("true");
                        setlaughoutHideRules("Show Less");
                        return;
                      } else {
                        setlaughoutRules("false");
                        setlaughoutHideRules("Know More");
                        return;
                      }
                    }}
                  >
                    {laughoutHideRules}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <DisplayRules show={laughoutRules} event="laughout" />
            </div>       
              </SwiperSlide>
              <SwiperSlide>
              <div class={styles.CardContainer}>
              <div class={styles.CardImage}>
                <img alt="image" src="https://uploads-ssl.webflow.com/5c0e7d1236137ddbfede8ba0/5e4ce3c8a53ace57ffb7a1e1_photographic%20memory%20%E2%80%94%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%20(2).jpg" />
              </div>
              <div className={styles.CardContent}>
                <div className={styles.CardHead}>
                  <h1>Sight On Sight</h1>
                </div>
                <div className={styles.CardEventDetails}>
                  <p>
                    <BsCalendar2Date />
                    &nbsp;&nbsp; 10:00 AM, 24th March, 2023
                  </p>
                  <p>
                    <MdLocationPin />
                    &nbsp;&nbsp; Sathyabama University
                  </p>
                  <p>
                    <MdOutlinePersonOutline />
                    &nbsp;&nbsp; Individual Participation
                  </p>
                </div>
                <div className={styles.CardDescription}>
                  <h3> About</h3>
                  <p>
                    This is an individual event which involves the participants
                    in trying to code/program according to the given
                    specifications.
                  </p>
                </div>
                <div className={styles.CardButton}>
                  <button
                    onClick={() => {
                      if (sightonRules === "false") {
                        setsightonRules("true");
                        setsightonHideRules("Show Less");
                        return;
                      } else {
                        setsightonRules("false");
                        setsightonHideRules("Know More");
                        return;
                      }
                    }}
                  >
                    {sightonHideRules}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <DisplayRules show={sightonRules} event="sighton" />
            </div>        
              </SwiperSlide>
              <SwiperSlide>
              <div class={styles.CardContainer}>
              <div class={styles.CardImage}>
                <img alt="image" src="https://webamp.dk/wp-content/themes/yootheme/cache/39/reels-banner-3918050e.webp" />
              </div>
              <div className={styles.CardContent}>
                <div className={styles.CardHead}>
                  <h1>Keep It Reel</h1>
                </div>
                <div className={styles.CardEventDetails}>
                  <p>
                    <BsCalendar2Date />
                    &nbsp;&nbsp; 10:00 AM, 24th March, 2023
                  </p>
                  <p>
                    <MdLocationPin />
                    &nbsp;&nbsp; Sathyabama University
                  </p>
                  <p>
                    <MdOutlinePersonOutline />
                    &nbsp;&nbsp; Individual Participation
                  </p>
                </div>
                <div className={styles.CardDescription}>
                  <h3> About</h3>
                  <p>
                    This is an individual event which involves the participants
                    in trying to code/program according to the given
                    specifications.
                  </p>
                </div>
                <div className={styles.CardButton}>
                  <button
                    onClick={() => {
                      if (reelsRules === "false") {
                        setreelsRules("true");
                        setreelsHideRules("Show Less");
                        return;
                      } else {
                        setreelsRules("false");
                        setreelsHideRules("Know More");
                        return;
                      }
                    }}
                  >
                    {reelsHideRules}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <DisplayRules show={reelsRules} event="reels" />
            </div>     
              </SwiperSlide>
              <SwiperSlide>
              <div class={styles.CardContainer}>
              <div class={styles.CardImage}>
                <img src="https://media.istockphoto.com/id/872549924/vector/team-work-in-office.jpg?s=612x612&w=0&k=20&c=StHWDOln7-csFxyycYUwPVD7nYTWDXz-p4mXIhoOR-o=" alt="image"/>
              </div>
              <div className={styles.CardContent}>
                <div className={styles.CardHead}>
                  <h1>Adzap</h1>
                </div>
                <div className={styles.CardEventDetails}>
                  <p>
                    <BsCalendar2Date />
                    &nbsp;&nbsp; 10:00 AM, 24th March, 2023
                  </p>
                  <p>
                    <MdLocationPin />
                    &nbsp;&nbsp; Sathyabama University
                  </p>
                  <p>
                    <MdOutlinePersonOutline />
                    &nbsp;&nbsp; Individual Participation
                  </p>
                </div>
                <div className={styles.CardDescription}>
                  <h3> About</h3>
                  <p>
                    This is an individual event which involves the participants
                    in trying to code/program according to the given
                    specifications.
                  </p>
                </div>
                <div className={styles.CardButton}>
                  <button
                    onClick={() => {
                      if (adzapRules === "false") {
                        setadzapRules("true");
                        setadzapHideRules("Show Less");
                        return;
                      } else {
                        setadzapRules("false");
                        setadzapHideRules("Know More");
                        return;
                      }
                    }}
                  >
                    {adzapHideRules}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <DisplayRules show={adzapRules} event="adzap" />
            </div>       
              </SwiperSlide>
            </Swiper>
          </div>
        );
            }

}