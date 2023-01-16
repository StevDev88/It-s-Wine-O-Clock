import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    // userName: {
    //     type: String,
    //     unique: true,
    //     required: true,
    // },
    email: {
        type: String,
        //unique: true,
        required: true,
    },
    password: {
        type: String,
        unique: false,
        required: true,
    },
    // profilePicture: {
    //  type: String,
    // }
  })

  // const User = mongoose.model('User', userSchema)

  export default mongoose.models.User || mongoose.model('User', userSchema)