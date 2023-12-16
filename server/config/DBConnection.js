import mongoose from "mongoose";

const connectToDb = async () => {
    await mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log(`Connect to DB`);
    })
    .catch((err) => {
        console.log(err.message);
    });
}


export default connectToDb