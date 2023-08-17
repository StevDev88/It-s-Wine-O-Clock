import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("wines");
    const { id } = req.query;
    const wine = req.body;

    if (req.method !== "PUT") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    if (!id) {
      return res.status(400).json({ message: "Missing wine ID" });
    }

    await db.collection("wines").updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          name: wine.name,
          image: wine.image,
          color: wine.color,
          size: wine.size,
          price: wine.price,
          region: wine.region,
          protectedOrigin: wine.protectedOrigin,
          description: wine.description,
        },
      }
    );

    res.json(wine);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
