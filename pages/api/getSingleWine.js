import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("wines");
    const { id } = req.query;

    const wine = await db.collection("wines").findOne({
      _id: ObjectId(id),
    });

    console.log(_id)

    res.json(wine);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
