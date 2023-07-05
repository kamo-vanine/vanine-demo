import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";

const DashboardPage = () => {
  return <div>dashboard</div>;
};

export default withPageAuthRequired(DashboardPage);
