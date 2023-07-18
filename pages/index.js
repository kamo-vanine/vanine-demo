import { useEffect } from "react";
import clientPromise from "../lib/mongodb";
import { useUser } from "@auth0/nextjs-auth0/client";
import { v1 as uuidv1 } from "uuid";
import { useRouter } from "next/router";
import signUpStyles from "../styles/pages/signUp.module.css";
import { CgTranscript } from "react-icons/cg";
import { MdAnalytics, MdRocketLaunch } from "react-icons/md";
import { BiLineChart } from "react-icons/bi";
import landingStyles from "../styles/pages/landing.module.css";
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
  const { user, isLoading } = useUser();
  const router = useRouter();

  const isManagerInDb = async () => {
    const manager = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}actions/checkUserExists?email=${user.email}&db=managers`,
      {
        method: "GET",
      }
    );

    const data = await manager.json();

    return data.length > 0;
  };

  const addManagerToDb = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}managers`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          _id: generateId(),
          name: user.name,
          company: "",
          companyId: "",
          position: "manager",
          campaigns: [],
          email: user.email,
          members: [],
          settings: {},
          usage: {},
          billingInfo: {},
          package: "",
        }),
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogin = async (isManual) => {
    if (!(await isManagerInDb())) {
      if (isManual) {
        window.alert("You do not have access to the Vanine");
        router.push("/api/auth/logout");
        return;
      } else {
        addManagerToDb();
      }
    }
    router.push("/dashboard");
  };

  const generateId = () => {
    const generatedString = uuidv1({ msecs: new Date().getTime() }).replaceAll(
      "-",
      ""
    );
    return user.email.split("@")[0] + generatedString;
  };

  useEffect(() => {
    if (!isLoading && user) {
      console.log(user);
      try {
        handleLogin(true);
      } catch (e) {
        console.error(e);
      }
    }
  }, [isLoading]);

  useEffect(() => {
    console.log(isConnected);
  }, []);

  return (
    <div className={landingStyles.container}>
      <div className={landingStyles.header}>
        <img src="/images/logo.svg" width={107.1} height={70} className />
        <a
          href={`mailto:hi@vanine.co.za?subject=Request to Sign up for Vanine`}
          className={landingStyles.button}
          style={{ backgroundColor: "#000", color: "#fff", margin: "1rem" }}
        >
          Contact us
        </a>
      </div>
      <div
        style={{
          backgroundColor: "var(--card-bg)",
          width: "fit-content",
          margin: "0 auto",
          padding: "1rem 2rem",
        }}
      >
        <div className={landingStyles.copyContainer}>
          <span className={signUpStyles.tagLine}>
            Take your customer experience
            <br /> and workforce optimisation to the next level.
          </span>
          <span
            style={{
              marginBottom: "2rem",
            }}
          >
            With our services in:
          </span>
          <div className={signUpStyles.featureContainer}>
            <div className={signUpStyles.feature}>
              <span className={signUpStyles.icon}>
                <CgTranscript color="inherit" size="2.5rem" />
              </span>
              <span>Transcription</span>
            </div>
            <div className={signUpStyles.feature}>
              <span className={signUpStyles.icon}>
                <MdAnalytics color="inherit" size="2.5rem" />
              </span>
              <span>Analytics</span>
            </div>
            <div className={signUpStyles.feature}>
              <span className={signUpStyles.icon}>
                <BiLineChart color="inherit" size="2.5rem" />
              </span>
              <span>Optimisation</span>
            </div>
            <div className={signUpStyles.feature}>
              <span className={signUpStyles.icon}>
                <MdRocketLaunch color="inherit" size="2.5rem" />
              </span>
              <span>And more!</span>
            </div>
          </div>
        </div>
        <div className={landingStyles.buttonContainer}>
          <h1 style={{ marginTop: "0", textAlign: "center" }}></h1>
          <a
            href="/demo"
            className={landingStyles.button}
            style={{ backgroundColor: "#000", color: "#fff", margin: "1rem" }}
          >
            View demo
          </a>
          <a
            href="/api/auth/login"
            className={landingStyles.button}
            style={{
              backgroundColor: "var(--blue)",
              color: "#fff",
              margin: "1rem",
            }}
          >
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}
