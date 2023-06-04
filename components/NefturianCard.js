import React from 'react';
import { Card, CardMedia } from '@mui/material';
import { NefturianCardStyle } from '../styles/global';

const NefturianCard = ({ image }) => {
  return (
    <Card component={NefturianCardStyle}>
      <CardMedia component="img" image={image} />
    </Card>
  );
};

export default NefturianCard;