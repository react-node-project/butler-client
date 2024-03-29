import { styled } from '@mui/styles';
import { Box, Grid, Button } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

export const StyledMenuWrapper = styled(Box)((props) => ({
  display: 'flex',
}));

export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const StyledOptionBar = styled(Grid)(({ theme }) => ({
  backgroundColor: 'white',
  flex: 'wrap',
  display: 'flex',
  padding: '16px',
  position: 'sticky',
  top: '0',
  zIndex: 5,
}));

export const StyledOptionItem = styled(Button)(({ theme, selected }) => ({
  // need to get theme primary color from props
  backgroundColor: selected ? '#22b39a' : 'white',
  borderRadius: selected ? '16px' : '',
  color: selected ? 'white' : '#22b39a',
  justifyContent: 'center',
  padding: '2px 16px',
  textAlign: 'center',
  lineHeight: '24px',

  '&:hover, &.Mui-focusVisible': { color: 'grey' },
}));
