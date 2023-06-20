import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("wines");
    const { wineId } = req.query;

    const wine = await db.collection("wines").deleteOne({
      id: wineId,
    });

    console.log("Wine Deleted")

    res.json(wine);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};