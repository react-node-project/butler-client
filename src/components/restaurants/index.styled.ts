import { styled } from '@mui/styles';
import { Box } from '@mui/material';

export const StyledLayout = styled(Box)({
  width: '100%',
  padding: '32px 8px 0',
  '& > *': {
    marginBottom: '32px',
  },
});
