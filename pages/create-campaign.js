import createCampaignStyles from "../styles/pages/createCampaign.module.css";
import utilityStyles from "../styles/utils/utils.module.css";
import Image from "next/image";

const CreateCampaignPage = () => {
  return (
    <div className={createCampaignStyles.container}>
      <div className={createCampaignStyles.cardContainer}>
        <Card
          title="New Topic Template"
          description="Create a set of possible topics/reasons for calls"
          bgColour="var(--font-shadow)"
        />
        <Card
          title="New Topic Template"
          description="Create a set of possible topics/reasons for calls"
          bgColour="var(--blue)"
        />
        <Card
          title="New Topic Template"
          description="Create a set of possible topics/reasons for calls"
          bgColour="var(--nav-bg)"
        />
      </div>
    </div>
  );
};

const Card = ({ title, description, bgColour }) => {
  return (
    <div
      className={createCampaignStyles.card}
      style={{ backgroundColor: bgColour }}
    >
      <Image src="/icons/add_circle.svg" width={60} height={60} />
      <span style={{ marginTop: "1rem", fontWeight: 400 }}>{title}</span>
      <span className={utilityStyles.smallText} style={{ marginTop: "1rem" }}>
        {description}
      </span>
    </div>
  );
};

export default CreateCampaignPage;
