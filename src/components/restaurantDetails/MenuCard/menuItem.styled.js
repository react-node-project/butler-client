import { Box } from '@mui/material';
import styled from 'styled-components';

export const StyledThumb = styled(Box)((props) => ({
  width: '250px',
  height: '250px',
  backgroundImage: `url(${props.url})`,
  backgroundRepeat: 'no-repeat',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'cneter',
}));

export const StyledText = styled(Box)((props) => ({
  padding: '0 16px 16px',
  marginTop: '16px',
  color: '#828285',
  textAlign: 'left',
  fontSize: '14px',
  lineHeight: '19px',

  '& .food_name': {
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: '22px',
    color: '#2e3333',
  },
  '& .food_description': { display: 'inline-block' },
  '& .price': {},
  '& .category': { fontSize: '22px', fontWeight: 'bold' },
}));
