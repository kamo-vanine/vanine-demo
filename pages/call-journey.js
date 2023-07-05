import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import JourneyBubble from "../components/app_elements/JourneyBubble";
import callJourneyStyles from "../styles/pages/callJourney.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { HiX } from "react-icons/hi";
import utilityStyles from "../styles/utils/utils.module.css";

const CallJourneyPage = () => {
  const colours = ["red", "green", "amber", "blue", "font", "nav-bg"];
  const [journeyBubbles, setJourneyBubbles] = useState([]);
  const [isBubbleViewOn, setIsBubbleViewOn] = useState(false);
  const [selectedBubble, setSelectedBubble] = useState(null);

  const createJourneyBubbles = (iter) => {
    let newJourneyBubbles = [];
    for (let i = 0; i < iter; i++) {
      newJourneyBubbles.push({
        id: i,
        numOccurence: Math.round(Math.random() * (20 - 1) + 1),
        colour: colours[Math.round(Math.random() * (colours.length - 1))],
        topicName: "Outstanding Debt Resolution",
        avgCallDuration: "5min 8s",
        topAgents: ["Roger", "Thabo", "Jannet"],
        rootCauses: ["Payment Arrangements", "Late Payments", "Mortgage"],
        campaigns: ["Delayed Mortgage Payments"],
        keywords: [
          "financial",
          "calling",
          "repayment",
          "pay",
          "payment",
          "balance",
          "resolving",
          "propose",
          "bank",
          "installments",
          "delayed",
          "owed",
        ],
      });
    }
    setJourneyBubbles(newJourneyBubbles);
  };

  const openBubbleView = (bubble) => {
    setSelectedBubble(bubble);
    setIsBubbleViewOn(true);
  };

  useEffect(() => {
    createJourneyBubbles(15);
  }, []);

  // if (isBubbleViewOn) {
  //   return <BubbleView id={selectedBubbleId} />;
  // }

  return (
    <div
      className={
        !isBubbleViewOn
          ? callJourneyStyles.container
          : callJourneyStyles.containerBubbleView
      }
    >
      {!isBubbleViewOn ? (
        journeyBubbles.map((element, idx) => {
          return (
            <div
              key={`bubble${idx}`}
              style={{
                display: "flex",
                height: "fit-content",
              }}
              onClick={() => openBubbleView(element)}
            >
              <JourneyBubble
                colour={`var(--${element.colour})`}
                shadowColour={`var(--${element.colour}-shadow)`}
                numOccurence={element.numOccurence}
              />
            </div>
          );
        })
      ) : (
        <>
          <JourneyBubble
            colour={`var(--${selectedBubble.colour})`}
            shadowColour={`var(--${selectedBubble.colour}-shadow)`}
            numOccurence={selectedBubble.numOccurence}
            bubble={selectedBubble}
            isSelected
          />
          <BubbleView
            bubble={selectedBubble}
            setIsBubbleViewOn={setIsBubbleViewOn}
          />
        </>
      )}
    </div>
  );
};

const BubbleView = ({ bubble, setIsBubbleViewOn }) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className={callJourneyStyles.bubbleView}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <span className={utilityStyles.heading1}>{bubble.topicName}</span>
        <span
          style={{
            cursor: "pointer",
          }}
          onClick={() => setIsBubbleViewOn(false)}
        >
          <HiX size="2rem" />
        </span>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", marginBottom: "2rem" }}
      >
        <span
          className={utilityStyles.button}
          style={{ marginRight: "1rem" }}
          onClick={() => setCurrentTab(0)}
        >
          Call Insights
        </span>
        <span className={utilityStyles.button} onClick={() => setCurrentTab(1)}>
          Notes
        </span>
      </div>
      {currentTab == 0 ? (
        <CallInsightsView bubble={bubble} />
      ) : currentTab == 1 ? (
        <NotesView />
      ) : null}
    </div>
  );
};

const CallInsightsView = ({ bubble }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div className={callJourneyStyles.bubbleViewDetail}>
          <span>Topic Occurence </span>
          <span>{bubble.numOccurence}</span>
        </div>
        <div className={callJourneyStyles.bubbleViewDetail}>
          <span>Avg Call Duration</span>
          <span>{bubble.avgCallDuration}</span>
        </div>
        <div className={callJourneyStyles.bubbleViewDetail}>
          <span>Top Agent(s)</span>
          {bubble.topAgents.map((element, idx) => {
            return <span key={`agent${idx}`}>{element}</span>;
          })}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "2rem",
        }}
      >
        <div className={callJourneyStyles.bubbleViewDetail}>
          <span>Root Cause(s)</span>
          {bubble.rootCauses.map((element, idx) => {
            return <span key={`cause${idx}`}>{element}</span>;
          })}
        </div>
        <div className={callJourneyStyles.bubbleViewDetail}>
          <span>Campaign(s)</span>
          {bubble.campaigns.map((element, idx) => {
            return <span key={`campaign${idx}`}>{element}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

const NotesView = () => {
  return (
    <div className={callJourneyStyles.notesView}>
      <textarea />
    </div>
  );
};

export default withPageAuthRequired(CallJourneyPage);
