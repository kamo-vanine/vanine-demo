import clientPromise from "../../lib/mongodb";
import LandingHeader from "../../components/ui_elements/LandingHeader";
import demoLandingStyles from "../../styles/pages/demoLanding.module.css";
import utilityStyles from "../../styles/utils/utils.module.css";

export const getServerSideProps = async () => {
  try {
    await clientPromise;

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

export default function Home({ isConnected }) {
  return (
    <div className={demoLandingStyles.container}>
      <LandingHeader />
      <div style={{ marginTop: "5rem" }}>
        <span className={demoLandingStyles.heading}>
          Try Vanine's services in seconds
        </span>
      </div>
      <button
        className={utilityStyles.largeButton}
        style={{ backgroundColor: "var(--blue)", color: "#fff", marginTop: "3rem" }}
      >
        Upload audio
      </button>
    </div>
  );
}
