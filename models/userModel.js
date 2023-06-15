import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema({
    // userName: {
    //     type: String,
    //     unique: true,
    //     required: true,
    // },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please enter your email address."],
        validate: [validator.isEmail, "Please enter valid email address."]
    },
    password: {
        type: String,
        unique: false,
        minLength: [7, "Password must be longer than 7 characters."],
        required: true,
    },
    // profilePicture: {
    //  type: String,
    // }
})

// const User = mongoose.model('User', userSchema)

export default mongoose.models.User || mongoose.model('User', userSchema)
