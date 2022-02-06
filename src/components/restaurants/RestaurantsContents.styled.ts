import { styled } from '@mui/styles';
import { Box } from '@mui/material';

export const StyledLayout = styled(Box)({
  width: '100%',
  paddingTop: '32px',
  '& > *': {
    marginBottom: '32px',
  },
});
