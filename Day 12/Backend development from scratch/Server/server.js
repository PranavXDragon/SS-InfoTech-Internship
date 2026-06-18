import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import dns from 'dns';
import app from './app.js';

dotenv.config();

const PORT = process.env.PORT || 6000;
const MONGODB_URI = process.env.MONGO_URI || process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME || 'test';
const COLLECTION_NAME = process.env.COLLECTION_NAME || 'submissions';

// Configure DNS to use public resolvers for SRV lookups
dns.setServers(['8.8.8.8', '1.1.1.1']);

let dbClient = null;
let collection = null;
let dbConnected = false;

if (MONGODB_URI) {
    dbClient = new MongoClient(MONGODB_URI);
    dbClient.connect()
        .then(() => {
            const db = dbClient.db(DB_NAME);
            collection = db.collection(COLLECTION_NAME);
            dbConnected = true;
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('MongoDB connection failed:', error.message);
        });
} else {
    console.warn('Warning: MONGODB_URI is not defined in environment variables. MongoDB operations will be disabled.');
}

app.post('/api/data', async (req, res) => {
    if (!dbConnected || !collection) {
        return res.status(503).json({ error: 'MongoDB is not connected.' });
    }

    try {
        const data = req.body;
        if (!data || Object.keys(data).length === 0) {
            return res.status(400).json({ error: 'Request body is empty.' });
        }

        const result = await collection.insertOne(data);
        res.json({ success: true, insertedId: result.insertedId });
    } catch (error) {
        console.error('Insert failed:', error);
        res.status(500).json({ error: 'Could not save data.' });
    }
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', dbConnected });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
