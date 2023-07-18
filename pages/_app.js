// Importing the NavLayout component responsible for rendering the layout with navigation.
import NavLayout from "../components/layout/navLayout";

// Importing the global CSS file to apply styles throughout the application.
import "../styles/globals.css";

// Importing the useRouter hook from Next.js to access the router object.
import { useRouter } from "next/router";

// Importing the UserProvider from "@auth0/nextjs-auth0/client" to handle user authentication.
import { UserProvider } from "@auth0/nextjs-auth0/client";

/**
 * MyApp Function
 * @param {Object} Component - The component to be rendered.
 * @param {Object} pageProps - The page properties.
 * @returns {JSX.Element} - Returns the React application layout based on the router pathname.
 */
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Conditionally rendering different layouts based on the router pathname.
  if (router.pathname.split("/")[1] == "") {
    // When the pathname contains an empty string, render the component without NavLayout.
    // The UserProvider is used to handle user authentication for the component.
    return (
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    );
  }

  if (router.pathname.split("/")[1] == "demo") {
    // When the pathname contains "demo", render the component without NavLayout.
    return <Component {...pageProps} />;
  }

  // For other pathnames, render the component wrapped with NavLayout and UserProvider.
  return (
    <UserProvider>
      <NavLayout>
        <Component {...pageProps} />
      </NavLayout>
    </UserProvider>
  );
}

export default MyApp;
