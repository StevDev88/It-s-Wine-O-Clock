import connectDB from "../../connectDB"

connectDB

export default async (req, res) => {
    console.log(req.method)
}