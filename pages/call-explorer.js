import { useState } from "react";
import Call from "../components/app_elements/Call";
import callExplorerStyles from "../styles/pages/callExplorer.module.css";
import utilityStyles from "../styles/utils/utils.module.css";
import { useEffect } from "react";
import Image from "next/image";

const CallExplorerPage = () => {
  const [currentTab, setCurrentTab] = useState(1);

  useEffect(() => {
    console.log(currentTab);
  }, [currentTab]);
  return (
    <div className={callExplorerStyles.container}>
      <div className={callExplorerStyles.section}>
        <div className={callExplorerStyles.sectionHeader}>
          {/* <span></span> */}
          <span>ID</span>
          <span>Date</span>
          <span>Root Cause</span>
          <span>Length</span>
          <span>Agent</span>
          <span>Outcome</span>
        </div>
        <Call
          id="221b-05"
          date="Today"
          rootCause="Payment Arrangements"
          length="5min 35s"
          agent="Tsepo"
          outcome="positive"
        />
        <Call
          id="222c-65"
          date="Today"
          rootCause="Payment Arrangements"
          length="12min 15s"
          agent="Roger"
          outcome="positive"
        />
        <Call
          id="223a-88"
          date="Today"
          rootCause="Account Inquiry"
          length="17min 46s"
          agent="Morris"
          outcome="negative"
        />

        <Call
          id="227e-10"
          date="Today"
          rootCause="Collection Notice"
          length="11min 56s"
          agent="Lilitha"
          outcome="positive"
        />
        <Call
          id="268b-01"
          date="Today"
          rootCause="Debt Settlement"
          length="15min 9s"
          agent="Francious"
          outcome="neutral"
        />
        <Call
          id="269c-02"
          date="Today"
          rootCause="Skip Tracing"
          length="5min 13s"
          agent="Kevin"
          outcome="positive"
        />
        <Call
          id="266d-03"
          date="Today"
          rootCause="Bankruptcy"
          length="7min 46s"
          agent="Jackson"
          outcome="negative"
        />
      </div>
      <div className={callExplorerStyles.section}>
        <div className={callExplorerStyles.detailsHeader}>
          <div
            onClick={() => setCurrentTab(1)}
            className={currentTab == 1 ? callExplorerStyles.selected : null}
          >
            Quick View
          </div>
          <div
            onClick={() => setCurrentTab(2)}
            className={currentTab == 2 ? callExplorerStyles.selected : null}
          >
            Call Analytics
          </div>
          <div
            onClick={() => setCurrentTab(3)}
            className={currentTab == 3 ? callExplorerStyles.selected : null}
          >
            Agent Scorecard
          </div>
          <div
            onClick={() => setCurrentTab(4)}
            className={currentTab == 4 ? callExplorerStyles.selected : null}
          >
            Call Journey
          </div>
          <div
            onClick={() => setCurrentTab(5)}
            className={currentTab == 5 ? callExplorerStyles.selected : null}
          >
            Customer Insight
          </div>
        </div>
        <div className={callExplorerStyles.detailsContent}>
          <div className={callExplorerStyles.headerContent}>
            <div>
              <span className={utilityStyles.heading1}>Call Summary</span>
              <span
                className={utilityStyles.smallText}
                style={{ marginTop: "1rem", marginRight: "1rem" }}
              >
                Mr. Van Rooyen is behind on his mortgage payment. ABC Bank
                proposes a repayment plan where he pays 65% of the total amount
                owed, which comes to R19,500. The first payment of R3,250 is due
                by July 15th. The next installments of the same amount are due
                on the 15th of each month until the balance is cleared. He will
                keep a record of his payments.
              </span>
            </div>
            <div>
              <span className={utilityStyles.heading1}>Keywords</span>
              <ul className={callExplorerStyles.keywordList}>
                <li>repayment</li>
                <li>payments</li>
                <li>mortgage</li>
                <li>payment</li>
                <li>owed</li>
                <li>installments</li>
                <li>delayed</li>
                <li>bank</li>
                <li>financial</li>
                <li>pay</li>
                <li>calling</li>
                <li>propose</li>
                <li>resolving</li>
                <li>balance</li>
              </ul>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <span className={utilityStyles.heading1}>Audio</span>
              <Image src="/images/audio.png" width={348} height={31} />
            </div>
          </div>
          <div className={callExplorerStyles.mainContent}>
            <span>Call outcome</span>
            <span>Promised to Pay</span>
            <span>Agent ID</span>
            <span>221b/Tsepo</span>
            <span>Customer Sentiment</span>
            <span>Neutral</span>
            <span>Reason(s) for call</span>
            <span>Payment Arrangements</span>
            <span>Anchored Sentiment Keywords</span>
            <span>Campaign(s)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallExplorerPage;
