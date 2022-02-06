import { styled } from '@mui/styles';
import { Box } from '@mui/material';

export const StyledList = styled(Box)({});

export const StyledCardItem = styled(Box)((props: { backgroundImage?: string }) => ({
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
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
  },
}));
