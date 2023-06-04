import React from 'react';
import { Typography, List, ListItem } from '@mui/material';

const NefturianDetails = ({ name, description, attributes }) => {
  return (
    <div>
      <Typography variant="h5">{name}</Typography>
      <Typography variant="body1">{description}</Typography>
      <List>
        {attributes.map((attr, index) => (
          <ListItem key={index}>
            <Typography variant="body2">
              {attr.trait_type}: {attr.value}
            </Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default NefturianDetails;