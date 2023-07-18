import handleRequest from "../../../lib/resourceStructure";

/**
 * Request Handler Function
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @returns {Promise<void>} - A Promise resolving to handle the HTTP request.
 */
export default async function handler(req, res) {
  handleRequest(req, res, "sample_vanine", "calls");
}
