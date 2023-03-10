import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import CardsDisplay from '../Components/CardsDisplay'
import styles from "../styles/event.module.css"
import Image from 'next/image'
import { useState } from 'react'

function Event() {
    const [techbold, settechbold] = useState("bold");
    const [ntechbold, setntechbold] = useState("normal");
    const [techborder, settechborder] = useState("solid blue");
    const [ntechborder, setntechborder] = useState("none");
  
    const [title, settitle] = useState("Tech");
    const openNTech = (e) => {
      e.preventDefault();
      settitle("NTech");
      settechbold("normal");
      setntechbold("bold");
      settechborder("none");
      setntechborder("solid blueviolet");
    };
    const openTech = (e) => {
      e.preventDefault();
      settitle("Tech");
      setntechbold("normal");
      settechbold("bold");
      setntechborder("none");
      settechborder("solid blueviolet");
    };
  return (
        <>
            <Navbar />
            <div className={styles.mainHead}>
                <h1>Events</h1>
            </div>
            <div>
            <div className={styles.headcontainer}>
        <div className={styles.EventsHead}>
          <p
            style={{
              fontWeight: techbold,
              borderBottom: techborder,
              borderColor: "blueviolet"
            }}
            className={styles.EventType}
            onClick={openTech}
          >
            Technical
          </p>
          <p
            style={{
              fontWeight: ntechbold,
              borderBottom: ntechborder,
              borderColor: "blueviolet"
            }}
            className={styles.EventType}
            onClick={openNTech}
          >
            Non-Technical
          </p>
        </div>
      </div>
            </div>
            <div className="SwipeContainer">
        <CardsDisplay EventType={title} />
        {/* <Appx /> */}
      </div>
      <Footer />
        </>

  )
}

export default Event;