import { styled } from '@mui/styles';
import { Box } from '@mui/material';

export const StyledList = styled(Box)({});

export const StyledCardItem = styled(Box)({
  width: '167px',
  height: '88px',
  marginRight: '16px',
  '& span': {
    display: 'flex',
    alignItems: 'flex-end',
    width: '100%',
    height: '100%',
    padding: '8px',
    borderRadius: '5px',
    backgroundImage:
      'url(https://co-restaurants.roocdn.com/images/d014c72287beb4cdebe325c025fe54d085c8c062/shortcut/offers.png?width=334&height=176&fit=crop&bg-color=fb5058&auto=webp&format=png)',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
  },
});
