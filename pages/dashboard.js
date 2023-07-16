import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";
import dashboardStyles from "../styles/pages/dashboard.module.css";
import { useState } from "react";
import CustomSelect from "../components/ui_elements/CustomSelect";
import Image from "next/image";
const DashboardPage = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [period, setPeriod] = useState("Today");

  return (
    <div className={dashboardStyles.container}>
      <div className={dashboardStyles.dashboardHeader}>
        <div className={dashboardStyles.headerOptions}>
          {/* <div
            className={currentTab == 0 ? dashboardStyles.selectedHeader : ""}
            onClick={() => setCurrentTab(0)}
          >
            Main Analytics
          </div> */}
          {/* <div
            className={currentTab == 1 ? dashboardStyles.selectedHeader : ""}
            onClick={() => setCurrentTab(1)}
          >
            Vanine Analytics
          </div> */}
        </div>
        <CustomSelect
          id="periodFilter"
          title="Select"
          value={period}
          options={["Today", "Past 7 days", "Past 30 days"]}
          showSelectedOptionAsTitle
          handleChange={() => {}}
        />
      </div>
      <div className={dashboardStyles.content}>
        {currentTab == 0 ? (
          <MainAnalytics />
        ) : currentTab == 1 ? (
          <VanineAnalytics />
        ) : null}
      </div>
    </div>
  );
};

const MainAnalytics = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", overflowX: "hidden" }}
    >
      <Image
        src="/images/bottom.png"
        width={1268}
        height={268}
        style={{ width: "100%", height: "auto", marginRight: "1rem" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "1rem",
          maxWidth: "100%",
        }}
      >
        <Image
          src="/images/avg_call_duration.png"
          width={404}
          height={352}
          style={{ marginRight: "1rem", width: "30%", height: "auto" }}
        />
        <Image
          src="/images/call_volume.png"
          width={808}
          height={352}
          style={{ width: "70%", height: "auto" }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Image
          src="/images/service_level.png"
          width={404}
          height={277}
          style={{ width: "33%", height: "auto" }}
        />
        <Image
          src="/images/tt_ratio.png"
          width={420}
          height={277}
          style={{ margin: "0 1rem", width: "33%", height: "auto" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "33%",
          }}
        >
          <Image
            src="/images/minutes_transcribed.png"
            width={359}
            height={124}
            style={{ width: "1005", height: "auto" }}
          />
          <Image
            src="/images/num_calls.png"
            width={359}
            height={124}
            style={{ width: "1005", height: "auto", marginTop: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

const VanineAnalytics = () => {
  return <div>Vanine Analytics</div>;
};

export default withPageAuthRequired(DashboardPage);
