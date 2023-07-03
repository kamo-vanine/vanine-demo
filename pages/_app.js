import NavLayout from "../components/layout/navLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <NavLayout>
      <Component {...pageProps} />
    </NavLayout>
  );
}

export default MyApp;
