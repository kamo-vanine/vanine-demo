// Importing the withPageAuthRequired function from "@auth0/nextjs-auth0/client"
// to protect the CampaignPage with authentication.
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

// Importing styles required for the CampaignPage.
import campaignStyles from "../styles/pages/campaign.module.css";
import utilityStyles from "../styles/utils/utils.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

const CampaignPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [campaignsToDisplay, setCampaignsToDisplay] = useState([]);
  const router = useRouter();

  // Function to create random campaigns.
  // NOTE: This is done with dummy data at the moment, but will be implemented using information from the database
  const createCampaigns = (iter) => {
    let newCampaigns = [];

    for (let i = 0; i < iter; i++) {
      newCampaigns.push({
        name: `Campaign ${i}`,
        description: "Lorem ipsum sum sit dolot amet",
        calls: Math.round(Math.random() * (60 - 1) + 1),
        topicTemplate: `Template${i}`,
        createdBy: `Kamogelo Khumalo`,
        createdAt: "today",
      });
    }

    setCampaigns(newCampaigns);
    setCampaignsToDisplay(newCampaigns);
  };

  const filterCampaigns = (e) => {
    const value = e.target.value;

    if (!value) {
      setCampaignsToDisplay(campaigns);
    }
    let newCampaigns = campaigns.filter((element) =>
      element.name.includes(value)
    );

    setCampaignsToDisplay(newCampaigns);
  };

  useEffect(() => {
    createCampaigns(10);
  }, []);

  return (
    <div className={campaignStyles.container}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <input type="text" placeholder="Search" onChange={filterCampaigns} />
        <span
          className={utilityStyles.button}
          onClick={() => router.push("/create-campaign")}
        >
          Create
        </span>
      </div>
      {campaignsToDisplay.length ? (
        <div className={campaignStyles.campaignTable}>
          <div className={campaignStyles.campaignTableHeader}>
            <span>Name</span>
            <span>Description</span>
            <span>Calls</span>
            <span>Topic Template</span>
            <span>Created By</span>
            <span>Created At</span>
          </div>
          {campaignsToDisplay.map((element, idx) => {
            return (
              <div
                key={`campaign${idx}`}
                className={campaignStyles.campaignTableItem}
              >
                <span>{element.name}</span>
                <span>{element.description}</span>
                <span>{element.calls}</span>
                <span>{element.topicTemplate}</span>
                <span>{element.createdBy}</span>
                <span>{element.createdAt}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{ marginTop: "5rem", textAlign: "center" }}>
          No campaigns to display
        </div>
      )}
    </div>
  );
};

export default withPageAuthRequired(CampaignPage);
