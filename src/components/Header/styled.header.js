import { styled } from '@mui/styles';
import { Button } from '@mui/material';

export const LinkButton = styled(Button)({
  '& a': {
    fontWeight: 'bold',
    color: '#fff',
    textDecoration: 'none',
  },
});
