import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import { authenticateUser } from './middleware/authMiddleware.js';
import postRoutes from './routes/postRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

const whitelist = ['http://localhost:5173'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
  
app.use(cors(corsOptions));

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGO_DB;

async function main() {
    await mongoose.connect(mongoDB);
} 
main().catch((err) => console.log(err));

app.use('/api/v1/posts', authenticateUser, postRoutes);
app.use('/api/v1/posts', authenticateUser, commentRoutes);
app.use('/api/v1/user', authenticateUser, userRoutes);
app.use('/api/v1', authRoutes);

app.listen(process.env.PORT, () => {
    console.log(`App started on ${process.env.PORT}.`);
})