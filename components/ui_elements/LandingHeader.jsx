// Importing the necessary CSS modules for styling the component.
import landingHeaderStyles from "../../styles/ui_elements/landingHeader.module.css";
import utilityStyles from "../../styles/utils/utils.module.css";

/**
 * LandingHeader Component
 * @returns {JSX.Element} - Returns a React component representing the header section of the landing page.
 */
const LandingHeader = () => {
  return (
    // Container for the landing header section, applying specific CSS styles.
    <div className={landingHeaderStyles.container}>
      <img src="/images/logo.svg" width={107.1} height={70} className />
      {/* Link to contact us via email, with custom styling from the utilityStyles. */}
      <a
        href={`mailto:hi@vanine.co.za?subject=Request to Sign up for Vanine`}
        className={utilityStyles.largeButton}
        style={{ backgroundColor: "#000", color: "#fff", margin: "1rem" }}
      >
        Contact us
      </a>
    </div>
  );
};

export default LandingHeader;
