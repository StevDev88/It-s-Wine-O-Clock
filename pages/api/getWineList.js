import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("wines");

    const wines = await db.collection("wines").find({}).limit(5).toArray();

    res.json(wines);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
