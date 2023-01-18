import connectDB from "../../connectDB"
import User from '../../models/userModel'
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

connectDB()

export default async (req, res) => {

    try {
        if (req.method === 'POST') {
            const { email, password } = req.body
            const user = await User.findOne({email: email})

            if (!user) {
                res.status(422).json({message: "User does not exist."})
            }

            console.log(email, password)
        
            const doMatch = await bcrypt.compare(password, user.password)

            if (!doMatch) {
                res.status(400).json({ message: "Incorrect credentials."})
            } else {
                const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {expiresIn: '7d',
                })
                res.status(201).json({ message: "Login success", user, token }) 
            }
        }
    } catch (error) {
        console.log(error)
    }
}