import Image from "next/image";
import headerStyles from "../../styles/ui_elements/header.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";

const Header = () => {
  const { user, isLoading } = useUser();

  useEffect(() => {
    console.log(user);
  }, [isLoading]);

  if (!user) {
    return <div>Loading</div>;
  }
  return (
    <div className={headerStyles.container}>
      <Image src="/images/logo.svg" width={75} height={50} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Image
          loader={() => user.picture}
          src={user.picture}
          width={45}
          height={45}
          style={{ borderRadius: "50%" }}
        />
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
