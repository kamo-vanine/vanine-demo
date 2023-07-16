import NavLayout from "../components/layout/navLayout";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { UserProvider } from "@auth0/nextjs-auth0/client";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname.split("/")[1] == "") {
    return (
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    );
  }

  if (router.pathname.split("/")[1] == "demo") {
    return <Component {...pageProps} />;
  }

  return (
    <UserProvider>
      <NavLayout>
        <Component {...pageProps} />
      </NavLayout>
    </UserProvider>
  );
}

export default MyApp;
