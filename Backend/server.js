import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './Routes/FoodRoute.js';

// app config
const app = express();
const port = 4000;

// Db connections
connectDB();

// API endpoints
app.use('/api/food', foodRouter);
app.use('/images', express.static('Uploads'));

// middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
// mongodb + srv://VivekSingh:51352895vs@cluster0.kv3gj.mongodb.net