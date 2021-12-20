import { styled } from '@mui/styles';
import { Box, Theme } from '@mui/material';

export const StyledLayout = styled(Box)((props: { theme: Theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  '& > div': {
    width: '100%',
    padding: '0 8px',
    marginBottom: '16px',
    [props.theme.breakpoints.up(768)]: {
      width: '50%',
    },
    [props.theme.breakpoints.up(980)]: {
      width: '33.3%',
    },
  },
}));
