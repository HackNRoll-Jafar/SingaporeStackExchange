import React from 'react';
import { Typography } from '@mui/material';
import EndgameModal from '../components/EndgameModal';

// Test components here
const Test = () => {
  return (
    <>
      <Typography variant="h1">
        Hello!
      </Typography>
      <EndgameModal isOpen={true} profit={50.0} company="GOOG"/>
    </>
  )
};

export default Test;
