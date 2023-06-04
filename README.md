# Nefturian NFT Platform

This platform allows users to input an Ethereum address (the "creature") and discover the Nefturian NFT linked to it.
It accomodates Nefturians that have not yet been revealed.
The function that finds the assigned Nefturian ID is not revealed to the user.

The project uses Next.js for the front-end as well as the back-end functionnality, Material-UI for UI components. Requests are logged to MongoDB.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Installation
2. Install the project dependencies:

```bash
cd nft-platform
npm install
```

## Configuration

Create a `.env` file at the root of the project to store your environment variables:

```
MONGODB_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB connection string.

## Running the project

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
