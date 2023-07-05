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
      case "GET":
        if (queryParams.db == "managers") {
          const manager = await db
            .collection("managers")
            .find({ email: queryParams.email })
            .toArray();
          res.status(200).json(manager);
        }
        break;
      default:
        res.status(404).json({ error: "Not found" });
    }
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Error" });
  }
}
