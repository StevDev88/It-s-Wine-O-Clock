import connectDB from "../../connectDB"

connectDB()

export default async (req, res) => {
    if (req.method === 'POST') {
        const { email, password } = req.body

        console.log(email, password)
    }
}