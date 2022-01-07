import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import HelpModal from '../components/HelpModal';
import { StyledLink } from '../components/StyledComponents';

const StyledGrid = styled(Grid)(() => ({
  minHeight: 'calc(100vh - 100px)',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderColor: '#000000',
  textColor: '#000000',
  backgroundColor: theme.palette.secondary.primary,
  width: '8%',
  margin: '0.2%'
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
      <StyledButton variant="contained"> 
        <StyledLink to="/game">
            Play
        </StyledLink>
      </StyledButton>
      <StyledButton variant="contained" onClick={handleOpen}> 
        Help
      </StyledButton>
      <HelpModal isOpen={isModalOpened} handleClose={handleClose} />
    </StyledGrid>
  );
};

export default Homepage;
