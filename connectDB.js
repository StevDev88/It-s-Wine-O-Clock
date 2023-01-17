import mongoose from "mongoose";


const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        return
    }
    mongoose.connect(process.env.MONGODB_URI, {
    })
    .then((con) => console.log('Mongo connected.'))
}

export default connectDB