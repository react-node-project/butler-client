import { styled } from '@mui/styles';
import { Box } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

export const StyledMenuWrapper = styled(Box)((props) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  width: '70%',
}));

export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
