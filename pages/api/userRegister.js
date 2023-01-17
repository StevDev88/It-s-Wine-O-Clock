import connectDB from "../../connectDB"
import User from '../../models/userModel'
import bcrypt from "bcryptjs"

connectDB()

export default async (req, res) => {

    try {
        if (req.method === 'POST') {
            const { email, password } = req.body

            console.log(email, password)
        
            const hashedPassword = await bcrypt.hash(password, 12)
            const newUser = await new User({ email: email, password: hashedPassword }).save()

            res.status(200).json({ message: "Sign Up Success"})
        }
    } catch (error) {
        console.log(error)
    }
}