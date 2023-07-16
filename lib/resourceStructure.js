import clientPromise from "../lib/mongodb";
import url from "url";
import querystring from "querystring";

export default async function handleRequest(req, res, database, coll) {
  try {
    const client = await clientPromise;
    const db = client.db(database);
    const parsedUrl = url.parse(req.url);
    const queryParams = querystring.parse(parsedUrl.query);

    switch (req.method) {
      case "POST":
        await db.collection(coll).insertOne(req.body);
        res.status(200).json({ message: "Data inserted successfully" });
        break;

      case "GET":
        if (queryParams.action == "all") {
          const managers = await db.collection(coll).find({}).toArray();
          res.status(200).json(managers);
        } else if (queryParams.action == "one") {
          const manager = await db
            .collection(coll)
            .find({ _id: queryParams.id })
            .toArray()[0];
          res.status(200).json(manager);
        } else {
          res.status(404).json({ error: "Not found" });
        }
        break;

      case "DELETE":
        await db.collection(coll).deleteOne({ _id: queryParams.id });
        res.status(200);
        break;

      default:
        res.status(404).json({ error: "Not found" });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
}
