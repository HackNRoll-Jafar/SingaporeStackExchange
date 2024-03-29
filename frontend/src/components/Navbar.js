import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { StyledAnchor, StyledLink } from './StyledComponents';

const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

const Space = styled('div')({
  flexGrow: 1,
});

const Navbar = () => {
  return (
    <AppBar elevation={2}>
      <Toolbar>
        <Wrapper>
          <Typography variant="h4">
            <StyledLink to="/">
              Singapore Stack Exchange
            </StyledLink>
          </Typography>
          <Space />
          <Typography variant="h6">
            <StyledAnchor href="https://github.com/HackNRoll-Jafar/SingaporeStackExchange" target="_blank" rel="noreferrer">
              Source
            </StyledAnchor>
          </Typography>
        </Wrapper>
      </Toolbar>
    </AppBar>
  )
};

export default Navbar;
