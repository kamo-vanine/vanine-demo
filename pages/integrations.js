import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

const IntegrationsPage = () => {
  return <div>Integrations</div>;
};

export default withPageAuthRequired(IntegrationsPage);
