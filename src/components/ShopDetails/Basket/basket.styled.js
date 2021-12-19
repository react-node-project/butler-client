import { styled } from '@mui/styles';

export const StyledtBasket = styled('div')(({ theme }) => ({
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
