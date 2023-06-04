import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.nefturians.io',
});

export const fetchNefturianDetails = async (nftId) => {
  const response = await api.get(`/metadata/${nftId}`);
  return response.data;
};