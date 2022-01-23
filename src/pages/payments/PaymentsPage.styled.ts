import { Grid } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';

export const StyledGrid = styled(Grid)((props: { theme: Theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
}));
