// Importing the Image component from Next.js to render images with optimized performance.

import Image from "next/image";

// Importing the necessary CSS module for styling the component.
import headerStyles from "../../styles/ui_elements/header.module.css";

// Importing hooks and components for user authentication and icon rendering.
import { useUser } from "@auth0/nextjs-auth0/client";
import { FaUserCircle } from "react-icons/fa";

/**
 * Header Component
 * @returns {JSX.Element} - Returns a React component representing the header section of the application.
 */

const Header = () => {
  const { user } = useUser();

  if (!user) {
    return <div>Loading</div>;
  }
  return (
    <div className={headerStyles.container}>
      <Image src="/images/logo.svg" width={75} height={50} />

      {/* Container for user information with profile picture (if available) and user name. */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        {/* Rendering the user's profile picture (or a default icon if no picture available). */}
        {user.picture ? (
          <Image
            loader={() => user.picture}
            src={user.picture}
            width={45}
            height={45}
            style={{ borderRadius: "50%" }}
          />
        ) : (
          <FaUserCircle size="45px" />
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "1rem",
          }}
        >
          <span style={{ fontWeight: "400" }}>{user.name}</span>
          <span style={{ color: "var(--font-grey)" }}>Manager</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
