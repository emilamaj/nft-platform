import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export const logRequest = async (address, nftId, ip) => {
    try {
        await client.connect();
        if (client.isConnected()) {
            const collection = client.db('nft-platform').collection('requests');
            await collection.insertOne({ address, nftId, ip, timestamp: new Date() });
        } else {
            console.warn('No database connection. Logging request skipped.');
        }
    } catch (error) {
        console.error('Error logging request:', error.message);
    } finally {
        await client.close();
    }
};
