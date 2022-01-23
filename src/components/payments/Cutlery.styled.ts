import { Box, styled } from '@mui/material';

export const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const StyledTextBox = styled(Box)({
  '& span': {
    display: 'block',
  },
  '& span:first-of-type': {
    color: '#000',
  },
});
