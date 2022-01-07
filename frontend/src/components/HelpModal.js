import React from 'react';
import { Modal, Typography } from '@mui/material';
import { StyledPaper, CloseButton } from './StyledComponents';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const HelpModal = (props) => {
  const { isOpen, handleClose } = props;

  return (
    <Modal open={isOpen}>
      <StyledPaper elevation={3}>
        <CloseButton onClick={handleClose}>
          <CloseIcon />
        </CloseButton>
        <Wrapper>
          <Typography variant="h4">
            How to Play
          </Typography>
          <Typography variant="h6">
            <ol>
              <li>The game starts with 1000SGD</li>
              <li>Every 0.5s, the stock price will either increase or decrease</li>
              <li>Press the BUY button to buy the stocks with the current price</li>
              <li>Press the SELL button to sell the stocks with the current price</li>
              <li>The game ends after 1 minute</li>
            </ol>
          </Typography>
        </Wrapper>
      </StyledPaper>
    </Modal>
  )
};

export default HelpModal;
