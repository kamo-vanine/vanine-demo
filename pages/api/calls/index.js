import clientPromise from "../../../lib/mongodb";
import url from "url";
import querystring from "querystring";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("sample_vanine");
    const parsedUrl = url.parse(req.url);
    const queryParams = querystring.parse(parsedUrl.query);

    switch (req.method) {
      case "POST":
        await db.collection("calls").insertOne(req.body);
        res.status(200).json({ message: "Data inserted successfully" });
        break;
      case "GET":
        if (queryParams.action == "getAll") {
          const calls = await db.collection("calls").find({}).toArray();
          res.status(200).json(calls);
        } else if (queryParams.action == "getOne") {
          const calls = await db
            .collection("calls")
            .find({ _id: queryParams.docId })
            .toArray();
          res.status(200).json(calls[0]);
        } else {
          res.status(404).json({ error: "Not found" });
        }
        break;
      case "DELETE":
        await db.collection("calls").deleteOne({ memberId: req.body.docId });
        res.status(200);
      //res.send(req.body.docId);
      default:
        res.status(404).json({ error: "Not found" });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
}
