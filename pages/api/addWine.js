import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("wines");
    const wine = req.body;

    // const documents = [wine, wine, wine].map((doc) => {
    //   const { _id, ...rest } = doc;
    //   return rest;
    // });

    await db.collection("user-wines").insertOne(wine);

    res.json(wine);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
