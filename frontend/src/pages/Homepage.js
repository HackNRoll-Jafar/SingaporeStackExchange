import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import HelpModal from '../components/HelpModal';
import { StyledLink, StyledButton } from '../components/StyledComponents';

const StyledGrid = styled(Grid)(() => ({
  minHeight: 'calc(100vh - 100px)',
  gap: '1rem'
}));

const Homepage = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleOpen = () => {
    setIsModalOpened(true);
  };

  const handleClose = () => {
    setIsModalOpened(false);
  };

  return (
    <StyledGrid 
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <StyledLink to="/game">
        <StyledButton variant="contained"> 
          Play
        </StyledButton>
      </StyledLink>
      <StyledButton variant="contained" onClick={handleOpen}> 
        Help
      </StyledButton>
      <HelpModal isOpen={isModalOpened} handleClose={handleClose} />
    </StyledGrid>
  );
};

export default Homepage;
