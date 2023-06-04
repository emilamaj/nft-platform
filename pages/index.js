import React from 'react';
import AddressInput from '../components/AddressInput';
import NefturianCard from '../components/NefturianCard';
import NefturianDetails from '../components/NefturianDetails';
import { fetchNefturianDetails } from '../services/nefturiansApi';
import { Container } from '../styles/global';

const HomePage = () => {
  const [nefturian, setNefturian] = React.useState(null);

  const handleAddressSubmit = async (address) => {
    console.log('address', address);
    const response = await fetch('/api/nft', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address }),
    });
    const { nftId } = await response.json();
    const details = await fetchNefturianDetails(nftId);
    setNefturian(details);
  };

  return (
    <Container>
      <AddressInput onSubmit={handleAddressSubmit} />
      {nefturian && (
        <>
          <NefturianCard image={nefturian.image} />
          <NefturianDetails
            name={nefturian.name}
            description={nefturian.description}
            attributes={nefturian.attributes}
          />
        </>
      )}
    </Container>
  );
};

export default HomePage;