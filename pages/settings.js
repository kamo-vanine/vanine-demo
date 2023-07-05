import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

const SettingsPage = () => {
  return <div>Settings</div>;
};

export default withPageAuthRequired(SettingsPage);
