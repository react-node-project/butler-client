import { styled } from '@mui/styles';
import { Grid, Theme } from '@mui/material';

export const StyledLayout = styled(Grid)((props: { theme: Theme }) => ({
  padding: '0 32px',
  [props.theme.breakpoints.down(768)]: {
    flexDirection: 'column',
  },
}));
