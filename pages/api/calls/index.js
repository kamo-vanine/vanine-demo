import handleRequest from "../../../lib/resourceStructure";

export default async function handler(req, res) {
  handleRequest(req, res, "sample_vanine", "calls");
}
