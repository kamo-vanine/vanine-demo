import landingHeaderStyles from "../../styles/ui_elements/landingHeader.module.css";
import utilityStyles from "../../styles/utils/utils.module.css";
const LandingHeader = () => {
  return (
    <div className={landingHeaderStyles.container}>
      <img src="/images/logo.svg" width={107.1} height={70} className />
      <a
        href={`mailto:kamo@vanine.co.za?subject=Request to Sign up for Vanine`}
        className={utilityStyles.largeButton}
        style={{ backgroundColor: "#000", color: "#fff", margin: "1rem" }}
      >
        Contact us
      </a>
    </div>
  );
};

export default LandingHeader;
