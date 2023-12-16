import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log(`Connect to DB`);
        }).catch((err) => {
            console.log(err.message);
        })

app.listen(3000,() => {
    console.log(`Server running at port 3000`);
})