import { logRequest } from '../../services/database';
// Import Web3
import Web3 from 'web3';

const getClientIp = (req) => {
    return (
        req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress
    );
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { address } = req.body;
        console.log('api: user address', address);
        
        const addressBN = Web3.utils.toBN(address);
        console.log('api: addressIntString', addressBN.toString());
        // We compute the addressInt % 1241 to get the NFT ID
        // const nftId = 102; 
        const nftId = addressBN.modn(1241);

        console.log('api: nftId', nftId);
        const ip = getClientIp(req);
        console.log('api: ip', ip);
        console.log('api: logging request');

        // Log the request. This is an async operation, but we don't need to wait for it to complete.
        logRequest(address, nftId, ip);
        res.status(200).json({ nftId });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
