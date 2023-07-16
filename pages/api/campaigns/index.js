import handleRequest from "../../../lib/resourceStructure";

export default async function handle(req, res) {
  handleRequest(req, res, "sample_vanine", "campaigns");
}
