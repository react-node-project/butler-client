import { styled } from '@mui/styles';
import { Box, Grid } from '@mui/material';

export const StyledText = styled(Box)((props) => ({
  '& .category': {
    display: 'inline-block',
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: '22px',
    color: '#2e3333',
  },
}));

export const StyledListWrapper = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up(992)]: {
    width: '80%',
    margin: 'auto',
    textAlign: 'center',
  },
}));

export const StyledCartGrid = styled(Grid)(({ theme }) => ({
  width: '30%',
  padding: '1rem',
  // TODO: Sticky is not working
}));

export const StyledMenuListGrid = styled(Grid)(({ theme }) => ({
  width: '70%',
  [theme.breakpoints.down(768)]: {
    width: '100%',
    //TODO: show cart modal bar on the bottom
  },
}));
