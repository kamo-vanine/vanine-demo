// Importing the MongoDB client promise to establish a connection to the database.
import clientPromise from "../lib/mongodb";

// Importing the 'url' and 'querystring' modules to parse request URL and query parameters.
import url from "url";
import querystring from "querystring";

/**
 * Handle Request Function
 * NOTE: Encapsulates the structure of what a typical api request for a specific resource will look like
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {string} database - The name of the database to be used.
 * @param {string} coll - The name of the collection to interact with.
 * @returns {Promise<void>} - A Promise resolving to handle the HTTP request.
 */
export default async function handleRequest(req, res, database, coll) {
  try {
    // Await the MongoDB client promise to get access to the database.
    const client = await clientPromise;
    const db = client.db(database);

    // Parsing the request URL and extracting query parameters.
    const parsedUrl = url.parse(req.url);
    const queryParams = querystring.parse(parsedUrl.query);

    // Handling different HTTP methods
    //Need to add sections for handling PUT and PATCH
    switch (req.method) {
      case "POST":
        // Inserting data into the specified collection.
        await db.collection(coll).insertOne(req.body);
        res.status(200).json({ message: "Data inserted successfully" });
        break;

      case "GET":
        if (queryParams.action == "all") {
          // Retrieving all documents from the specified collection.
          const result = await db.collection(coll).find({}).toArray();
          res.status(200).json(result);
        } else if (queryParams.action == "one") {
          // Retrieving a single document based on the provided '_id' query parameter.
          const result = await db
            .collection(coll)
            .find({ _id: queryParams.id })
            .toArray()[0];
          res.status(200).json(result);
        } else {
          // If 'action' query parameter is missing or invalid, return a 'Not found' error.
          res.status(404).json({ error: "Not found" });
        }
        break;
      // Deleting a document from the specified collection based on the provided '_id' query parameter.
      case "DELETE":
        await db.collection(coll).deleteOne({ _id: queryParams.id });
        res.status(200);
        break;

      default:
        // Handling all other HTTP methods as 'Not found' errors.
        res.status(404).json({ error: "Not found" });
    }
  } catch (e) {
    // Catching any errors that might occur during the request handling process.
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
}
