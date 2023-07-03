import clientPromise from "../lib/mongodb";
import Header from "../components/ui_elements/Header";
import Navigation from "../components/ui_elements/Navigation";

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
    <div>
      <Navigation />
    </div>
  );
}
