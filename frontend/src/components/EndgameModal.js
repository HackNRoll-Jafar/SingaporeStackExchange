import React from 'react';
import { Button, Modal, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { StyledLink, StyledPaper } from './StyledComponents';

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
});

const EndgameModal = (props) => {
  const { isOpen, profit, company } = props;

  return (
    <Modal open={isOpen}>
      <StyledPaper elevation={3}>
        <Wrapper>
          <Typography variant="h4" sx = {{textAlign:"center"}}>
            Game Over
          </Typography>
          <Typography variant = "h6">
            You have gained {profit}% profits over the course of this game using {company} stocks
          </Typography>
          <StyledLink to="/game">
            <Button variant="contained">
              Play Again
            </Button>
          </StyledLink>
          <StyledLink to="/">
            <Button variant="contained">
              Homepage
            </Button>
          </StyledLink>
        </Wrapper>
      </StyledPaper>
    </Modal>
  );
};

export default EndgameModal;
