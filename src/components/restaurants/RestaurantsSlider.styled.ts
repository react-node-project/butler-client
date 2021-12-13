import { styled } from '@mui/styles';
import { Box } from '@mui/material';

export const StyledList = styled(Box)({
  '& .card_item': {
    width: '262px',
    height: '295px',
    margin: '1px 1px 5px',
    borderRadius: '3px',
    boxShadow: '0 1px 4px rgb(0 0 0 / 8%), 0 0 0 1px rgb(0 0 0 / 4%)',
    '& button': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
});
