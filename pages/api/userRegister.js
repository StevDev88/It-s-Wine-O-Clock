import connectDB from "../../connectDB"
import User from '../../models/userModel'
import bcrypt from "bcryptjs"

connectDB()

export default async (req, res) => {

    try {
        if (req.method === 'POST') {
            const { firstName, lastName, email, password } = req.body
            const user = await User.findOne({ email: email })

            if (user) {
                res.status(422).json({ message: "User already exists." })
            }

            console.log(firstName, lastName, email, password)

            const hashedPassword = await bcrypt.hash(password, 12)
            const newUser = await new User({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hashedPassword
            }).save()
            res.status(200).json({ message: "Sign Up Success" })
        }
    } catch (error) {
        console.log(error)
    }
}
