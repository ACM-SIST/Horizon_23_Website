import styles from "../styles/event.module.css"
export default function DisplayRules(props) {
    if (props.show === "true" && props.event === "codefest")
      return (
        <>
          <div className={styles.Rules}>
            <p className={styles.extracontent}>
              <h2>Rules for the Event:</h2> <h3>Round 1: Guess the output</h3>{" "}
              <b>1.1</b> Each question will have a timer and it should be answered
              within the time span. <br /> <b>1.2</b> Will be conducted via
              Kahoot. <br /> <b>1.3</b> Top 10 - 20 will be selected for the next
              round Competitive.
              <h3>Round 2: Competitive Coding</h3> <b>2.1</b> Will be conducted in
              hackerrank
              <br /> <b>2.2</b> Participants are required to find the solution to
              the given coding problem
              <br />
              <br />{" "}
              <b>
                {" "}
                Participants are NOT allowed to browse the internet. If found, the
                participant will be DISQUALIFIED.
              </b>{" "}
              <br />
              <br />
              <h3>Requirements from Students:</h3> Laptop is mandatory
              Participants MUST have a Hackerrank account for competing. We will
              inform you earlier about any further details / changes about the
              event.
            </p>
            <div className={styles.RulesButton}>
              <button>REGISTER</button>
            </div>
          </div>
        </>
      );
    if (props.show === "true" && props.event === "innovat-o-thon")
      return (
        <>
          <div className={styles.Rules}>
            <p className={styles.extracontent}>
              <h2>Rules for the Event:</h2>
              <b>1.</b> Product should be working in realtime during the
              walkthrough.
              <br />
              <b>2.</b> Source Code should be made publicly available in a
              repository.
              <br />
              <b>3.</b> PPT about that product should be presented.
              <br />
              <b>4.</b> Judging will be based on innovation and how well the
              product serves a business.
              <br />
              <br />
              <h2>Requirements from Students:</h2>
              <b>1.</b> Laptop
              <br />
              <b>2.</b> Any hardware prototype (OPTIONAL)
            </p>
            <div className={styles.RulesButton}>
              <button className={styles.register_btn}>REGISTER</button>
            </div>
          </div>
        </>
      );
    if (props.show === "true" && props.event === "cssbattle")
      return (
        <>
          <div className={styles.Rules}>
            <p className={styles.extracontent}>
              <h2>Rules for the Event:</h2>
              <b>1.</b> Individual participation.
              <br />
              <b>2.</b> Should use only CSS. No software products.
              <br />
              <b>3.</b> Internet will not be provided.
              <br />
              <br />
              <h2>Requirements from Students:</h2>
              <b>1.</b> Laptop is mandatory.
            </p>
            <div className={styles.RulesButton}>
              <button className={styles.register_btn}>REGISTER</button>
            </div>
          </div>
        </>
      );
    if (props.show === "true" && props.event === "uidesign")
      return (
        <>
          <div className={styles.Rules}>
            <p className={styles.extracontent}>
              <h2>Rules for the Event:</h2>
              <b>1.</b> Team size: 2 participants only.
              <br />
              <b>2.</b> Time limit: 45 mins.
              <br />
              <b>3.</b> Any designing tool can be used.
              <br />
              <b>4.</b> Judging will be based on how user-interactive and
              appealing the designs are.
              <br />
              <br />
              <h2>Requirements from Students:</h2>
              <b>1.</b> Participants are requested to get their own laptops.
            </p>
            <div className={styles.RulesButton}>
              <button className={styles.register_btn}>REGISTER</button>
            </div>
          </div>
        </>
      );
    if (props.show === "true" && props.event === "blindrepresentation")
      return (
        <>
          <div className={styles.Rules}>
            <p className={styles.extracontent}>
              <h2>Rules for the Event:</h2>
              <b>1.</b> Maximum 2 members in a team.
              <br />
              <b>2.</b> Maximum number of Slides should be 30.
              <br />
              <b>3.</b> Ppt should be innovative and formal.
              <br />
              <b>4.</b> Teams should include new features in their presentation.
              <br />
              <br />
              <h2>Requirements from Students:</h2>
              <b>1.</b> Laptop is mandatory.
            </p>
            <div className={styles.RulesButton}>
              <button className={styles.register_btn}>REGISTER</button>
            </div>
          </div>
        </>
      );
    if (props.show === "true" && props.event === "brainbusters")
      return (
        <>
          <div className={styles.Rules}>
            <p className={styles.extracontent}>
              <h2>Rules for the Event:</h2>
              <b>1.</b> Maximum 2 members in a team.
              <br />
              <b>2.</b> Maximum number of Slides should be 30.
              <br />
              <b>3.</b> Ppt should be innovative and formal.
              <br />
              <b>4.</b> Teams should include new features in their presentation.
              <br />
              <br />
              <h2>Requirements from Students:</h2>
              <b>1.</b> Laptop is mandatory.
            </p>
            <div className={styles.RulesButton}>
              <button className={styles.register_btn}>REGISTER</button>
            </div>
          </div>
        </>
      );
    if (props.show === "true" && props.event === "adzap")
      return (
        <>
          <div className={styles.Rules}>
            <p className={styles.extracontent}>
              <h2>Rules for the Event:</h2>
              <b>1.</b> Participants will be given a product name and are required
              to sell the product to the judges
              <br />
              <b>2.</b> Product will be given on the spot by the judges.
              <br />
              <b>3.</b> Participants are required to come up with a jingle and a
              pitch for the product.
              <br />
              <b>4.</b> Participants must enact sequence of advertisements
for their given product.
              <br />
              <b>5.</b> Vulgarity of any form will lead to disqualification.
              <br />
              <br />
              {/* <h2>Requirements from Students:</h2> */}
              <b>BEST SALESMAN </b> will be awarded.
            </p>
            <div className={styles.RulesButton}>
              <button className={styles.register_btn}>REGISTER</button>
            </div>
          </div>
        </>
      );

      if (props.show === "true" && props.event === "reels")
      return (
        <>
          <div className={styles.Rules}>
            <p className={styles.extracontent}>
              <h2>Rules for the Event:</h2>
              <b>1.</b> The reel must be original and must be their own
creativity.
              <br />
              <b>2.</b> Each team is limited to one video.
              <br />
              <b>3.</b> The maximum time limit is 30 seconds and minimum is
15 seconds. Participants will be disqualified if they exceed
the time limit.
              <br />
              <b>4.</b> Decisions of the organizing committee shall be the final.

              <br />
              <b>5.</b> No offensive, derogatory remarks should be used.
              <br />
              <b>6.</b> The shooting must not interfere with classes, faculty, or
students in any way.
              <br />
              <br />
              <h2>Requirements from Students:</h2>
              <b>1. </b> A phone/camera for shooting.
            </p>
            <div className={styles.RulesButton}>
              <button className={styles.register_btn}>REGISTER</button>
            </div>
          </div>
        </>
      );


      if (props.show === "true" && props.event === "sighton")
      return (
        <>
          <div className={styles.Rules}>
            <p className={styles.extracontent}>
              <h2>Rules for the Event:</h2>
              <b>1.</b> The size of the team is 2.
              <br />
              <b>2.</b> Mobile phones or any other electronic devices are not
allowed.
              <br />
              <b>3.</b> while the slides are screening writing down is prohibited.
              <br />
              <b>4.</b> Participant’s shouldn’t have any words with other
teammates while the slides are screening.

              <br />
              {/* <b>5.</b> No offensive, derogatory remarks should be used.
              <br />
              <b>6.</b> The shooting must not interfere with classes, faculty, or
students in any way.
              <br /> */}
              <br />
              <h2>Requirements from Students:</h2>
              <b>1. </b> Stationary.
            </p>
            <div className={styles.RulesButton}>
              <button className={styles.register_btn}>REGISTER</button>
            </div>
          </div>
        </>
      );


      if (props.show === "true" && props.event === "laughout")
      return (
        <>
          <div className={styles.Rules}>
            <p className={styles.extracontent}>
              <h2>Rules for the Event:</h2>
              <b>1.</b> It is an individual event.
              <br />
              <b>2.</b> Time limit is 4 to 5 min . If the content is good the time
will be extend. 
              <br />
              <b>3.</b> No participants should use controversial statements /
no comments on religion. 
              <br />
              <b>4.</b> No hate speech against any community/racial slurs.

              <br />
              {/* <b>5.</b> No offensive, derogatory remarks should be used.
              <br />
              <b>6.</b> The shooting must not interfere with classes, faculty, or
students in any way.
              <br /> */}
              <br />
              <h2>Requirements from Students:</h2>
              <b>1. </b> Would say a dank sense of humor is a requirement.
            </p>
            <div className={styles.RulesButton}>
              <button className={styles.register_btn}>REGISTER</button>
            </div>
          </div>
        </>
      );


      if (props.show === "true" && props.event === "jam")
      return (
        <>
          <div className={styles.Rules}>
            <p className={styles.extracontent}>
              <h2>Rules for the Event:</h2>
              <b>1.</b> You should showcase your skill within the time limit.
              <br />
              <b>2.</b> If the skill requires any material then it has to be taken
care of by the individual itself.
 
              <br />
              <b>3.</b> Any type of vulgar events are
 not encouraged.
              <br />
              <b>4.</b> Showcase of unique talent
 expected.

              <br />
              <b>5.</b> Time duration 2min max.

              {/* <br />
              <b>6.</b> The shooting must not interfere with classes, faculty, or
students in any way. */}
              <br />
              <br />
              <h2>Requirements from Students:</h2>
              <b>1. </b> Based on the skill the participant is showcasing.
              <br/>
              <b>2. </b> Showcase of unique talent encouraged.

            </p>
            <div className={styles.RulesButton}>
              <button className={styles.register_btn}>REGISTER</button>
            </div>
          </div>
        </>
      );


      if (props.show === "true" && props.event === "murdermystery")
      return (
        <>
          <div className={styles.Rules}>
            <p className={styles.extracontent}>
              <h2>Rules for the Event:</h2>
              <b>1.</b> Each team can have a size of 2-3 members.
              <br />
              <b>2.</b> Totally 8 rounds will be there.
 
              <br />
              <b>3.</b> Solving each clue will get you to the next round.
              <br />
              <b>4.</b> The team which solves the riddle first with the given
clues will be moving to consecutive rounds.

              <br />
              <b>5.</b> The team that solves the riddles fast and finds the
murderer first will win exciting prizes.

              <br />
              <b>6.</b> The team who solves the clue last will be eliminated.
              <br />
              <br />
              {/* <h2>Requirements from Students:</h2>
              <b>1. </b> Based on the skill the participant is showcasing.
              <br/>
              <b>2. </b> Showcase of unique talent encouraged. */}

            </p>
            <div className={styles.RulesButton}>
              <button className={styles.register_btn}>REGISTER</button>
            </div>
          </div>
        </>
      );


    else if (props.show === "false") {
      return;
    }
  }