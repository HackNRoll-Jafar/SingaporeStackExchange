import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Button, Grid, IconButton, Modal, Paper, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

const StyledGrid = styled(Grid)(() => ({
  minHeight: '100vh',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderColor: '#000000',
  textColor: '#000000',
  backgroundColor: theme.palette.secondary.primary,
  width: '8%',
  margin: '0.2%'
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color : 'red',
  position: 'absolute',
  top: '0%',
  right: '0%'
}));

const StyledPaper = styled(Paper)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  border: '2px solid #000'
}));

const Homepage = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleOpen = () => {
    setIsModalOpened(true);
  };

  const handleClose = () => {
    setIsModalOpened(false);
  };

  return <StyledGrid container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center">
    <StyledButton variant="outlined"> 
      <Link to="/game">
        <Typography variant="h3">
          Play
        </Typography>
      </Link>
    </StyledButton>
    <StyledButton variant = "outlined" onClick={handleOpen}> 
      <Typography variant="h3">
        Help 
      </Typography>
    </StyledButton>
    <Modal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      open={isModalOpened}>
      <StyledPaper>
        <StyledIconButton onClick={handleClose}>
          <CloseIcon />
        </StyledIconButton>
        <Typography id="aria-labelledby" variant="h3" sx = {{textAlign:"center"}}>
          How to Play
        </Typography>
        <Typography id="aria-describedby" variant = "h4">
          <ol>
            <li>The game starts with 1000SGD</li>
            <li>Every 0.5s, the stock price will either increase or decrease</li>
            <li>Press the BUY button to buy the stocks with the current price</li>
            <li>Press the SELL button to sell the stocks with the current price</li>
            <li>The game ends after 1 minute</li>
          </ol>
        </Typography>
      </StyledPaper>
    </Modal>
  </StyledGrid>
};

export default Homepage;
