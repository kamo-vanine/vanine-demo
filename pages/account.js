import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

const AccountPage = () => {
  return <div>call-explorer</div>;
};

export default withPageAuthRequired(AccountPage);
