import { styled } from '@mui/styles';
import { Button, MenuItem } from '@mui/material';

export const LinkButton = styled(Button)({
  '& a': {
    fontWeight: 'bold',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
  },
});

export const StyledMenuItem = styled(MenuItem)({
  backgroundColor: '#fff',
  borderRadius: '4px',
  color: 'black',
  marginRight: '2rem',

  '& svg': {
    marginRight: '0.5rem',
  },

  '&:hover': {
    backgroundColor: '#fff',
  },
});
