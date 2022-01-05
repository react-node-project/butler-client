import { styled } from '@mui/styles';
import { Grid } from '@mui/material';

export const Header = styled(Grid)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  // backgroundColor: '#eeeee4',
  flex: 'wrap',
  display: 'flex',
}));

export const HeaderImage = styled('img')(({ theme }) => ({
  padding: '0.5rem',
  maxWidth:"20rem"
}));
