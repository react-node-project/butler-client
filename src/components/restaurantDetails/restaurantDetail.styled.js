import { styled } from '@mui/styles';
import { Box } from '@mui/material';

export const StyledText = styled(Box)((props) => ({
  '& .category': {
    display: 'inline-block',
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: '22px',
    color: '#2e3333',
  },
}));
