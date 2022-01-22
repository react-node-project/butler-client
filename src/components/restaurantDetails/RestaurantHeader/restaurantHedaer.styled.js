import { styled } from '@mui/styles';
import { Grid } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const StyledHeader = styled(Grid)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#eeeee4',
  flex: 'wrap',
  display: 'flex',
}));

export const StyledHeaderImage = styled('img')(({ theme }) => ({
  padding: '1rem',
  maxWidth: '100%',
}));
