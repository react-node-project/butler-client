import { styled } from '@mui/styles';
import { Grid } from '@mui/material';

export const StyledHeader = styled(Grid)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#eeeee4',
  flex: 'wrap',
  display: 'flex',
}));

export const StyledHeaderImage = styled('img')(({ theme }) => ({
  padding: '1rem',
  maxWidth: '100%',
}));
