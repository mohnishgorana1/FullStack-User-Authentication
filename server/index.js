import express from 'express'
import dotenv from 'dotenv'
import connectToDb from './config/DBConnection.js';

dotenv.config();

const app = express();

app.listen(3000,() => {
    console.log(`Server running at port 3000`);
    connectToDb()
})