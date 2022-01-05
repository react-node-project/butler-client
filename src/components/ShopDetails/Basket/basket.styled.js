import { styled } from '@mui/styles';
import { Card, Button } from '@mui/material';

export const styledDiv = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      padding: '1rem',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      maxWidth: '90%',
      padding: '1rem',
    },
    '@media (min-width: 1200px)': {
      maxWidth: '100%',
      padding: '0 10rem',
    },
  }));

export const StyledCard = styled(Card)(({ theme }) => ({
    color:"salmon"
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  background:"#ccc",
}));