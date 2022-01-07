import { styled } from '@mui/material/styles';
import { Button, Paper, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)({
  color: 'inherit',
  textDecoration: 'none',
});

export const StyledAnchor = styled('a')({
  color: 'inherit',
  textDecoration: 'none',
});

export const StyledButton = styled(Button)(({ theme }) => ({}));

export const StyledPaper = styled(Paper)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  padding: '1rem',
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  color : 'red',
  position: 'absolute',
  top: '0%',
  right: '0%'
}));
