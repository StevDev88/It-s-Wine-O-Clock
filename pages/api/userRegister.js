import connectDB from "../../connectDB"
import User from '../../models/userModel'

connectDB()

export default async (req, res) => {
    if (req.method === 'POST') {
        const { email, password } = req.body

        console.log(email, password)

    const newUser = await new User({ email, password }).save()

    console.log(newUser)

    }
}