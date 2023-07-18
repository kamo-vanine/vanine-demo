// Importing the MongoDB client promise to establish a connection to the database.
import clientPromise from "../../../lib/mongodb";

// Importing the 'url' and 'querystring' modules to parse request URL and query parameters.
import url from "url";
import querystring from "querystring";

/**
 * Request Handler Function
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @returns {Promise<void>} - A Promise resolving to handle the HTTP request.
 */
export default async function handler(req, res) {
  try {
    // Await the MongoDB client promise to get access to the database.
    const client = await clientPromise;
    const db = client.db("sample_vanine");

    // Parsing the request URL and extracting query parameters.
    const parsedUrl = url.parse(req.url);
    const queryParams = querystring.parse(parsedUrl.query);

    switch (req.method) {
      // TODO: add case to check for whether agent exists
      case "GET":
        // Retrieving a manager document based on the provided 'email' query parameter.
        if (queryParams.db == "managers") {
          const manager = await db
            .collection("managers")
            .find({ email: queryParams.email })
            .toArray();
          res.status(200).json(manager);
        }
        break;
      default:
        // Handling all other HTTP methods as 'Not found' errors.
        res.status(404).json({ error: "Not found" });
    }
  } catch (e) {
    // Catching any errors that might occur during the request handling process.
    console.error(e);
    res.status(500).send({ message: "Error" });
  }
}
