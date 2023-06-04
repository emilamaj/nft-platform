import React from 'react';
import { TextField, Button } from '@mui/material';

const AddressInput = ({ onSubmit }) => {
  const [address, setAddress] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(address);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Ethereum Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Discover Nefturian
      </Button>
    </form>
  );
};

export default AddressInput;