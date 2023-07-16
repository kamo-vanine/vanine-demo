import clientPromise from "../../lib/mongodb";
import LandingHeader from "../../components/ui_elements/LandingHeader";
import demoLandingStyles from "../../styles/pages/demoLanding.module.css";

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
      <div>
        <span>Try our services</span>
      </div>
    </div>
  );
}
