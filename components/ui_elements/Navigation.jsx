import navigationStyles from "../../styles/ui_elements/navigation.module.css";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { BsShareFill } from "react-icons/bs";
import { IoIosCall, IoIosSettings } from "react-icons/io";
import { HiPuzzle } from "react-icons/hi";
import { MdLocationPin, MdAccountCircle } from "react-icons/md";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Navigation = ({ isDemo }) => {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState("");

  useEffect(() => {
    setCurrentRoute(router.pathname.split("/")[1]);
  }, [router.pathname]);

  return (
    <div className={navigationStyles.container}>
      <div className={navigationStyles.section}>
        <span
          onClick={() => router.push("/dashboard")}
          className={
            currentRoute == "dashboard" ? navigationStyles.selected : ""
          }
        >
          <AiFillHome />
          Dashboard
        </span>
        <span
          onClick={() => router.push("/call-explorer")}
          className={
            currentRoute == "call-explorer" ? navigationStyles.selected : ""
          }
        >
          <IoIosCall /> Call Explorer
        </span>
        <span
          onClick={() => router.push("/call-journey")}
          className={
            currentRoute == "call-journey" ? navigationStyles.selected : ""
          }
        >
          <MdLocationPin /> Call Journey
        </span>
        <span
          onClick={() => router.push("/campaign")}
          className={
            currentRoute == "campaign" ? navigationStyles.selected : ""
          }
        >
          <HiPuzzle />
          Campaign
        </span>
        {/* <span
          onClick={() => router.push("/integrations")}
          className={
            currentRoute == "integrations" ? navigationStyles.selected : ""
          }
        >
          <BsShareFill />
          Integrations
        </span> */}
      </div>
      <div className={navigationStyles.section}>
        <span
          onClick={() => router.push("/settings")}
          className={
            currentRoute == "settings" ? navigationStyles.selected : ""
          }
        >
          <IoIosSettings />
          Settings
        </span>
        <span
          onClick={() => router.push("/account")}
          className={currentRoute == "account" ? navigationStyles.selected : ""}
        >
          <MdAccountCircle />
          Account
        </span>
        <a
          href="/api/auth/logout"
          className={currentRoute == "logout" ? navigationStyles.selected : ""}
        >
          <BiLogOut />
          Log Out
        </a>
      </div>
    </div>
  );
};

export default Navigation;
