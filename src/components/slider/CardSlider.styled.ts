import { styled } from '@mui/styles';
import { Box, Typography } from '@mui/material';

export const StyledLayout = styled(Box)({
  position: 'relative',
  padding: '0 8px',
});

export const StyledTitle = styled(Typography)({
  marginBottom: '24px',
});

export const StyledContents = styled(Box)({
  position: 'relative',
});

export const StyledSlider = styled(Box)({
  overflow: 'hidden',
  '& .arrow': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: '#fff',
    height: '56px',
    width: '56px',
    border: '1px solid rgba(0,0,0,.04)',
    borderRadius: '50%',
    boxShadow: '0 1px 4px rgb(0 0 0 / 8%)',
    zIndex: 1,
    cursor: 'pointer',
    outline: 'none',
    transition: 'box-shadow .1s ease-in',
    '&:hover': {
      boxShadow: '0 6px 20px rgb(0 0 0 / 8%)',
    },
  },
  '& .slide_list': {
    display: 'flex',
    margin: 0,
    padding: 0,
    listStyle: 'none',
    transition: 'transform .6s ease-out',
    '& .card_item': {
      display: 'inline-flex',
      flex: 'none',
      marginRight: '16px',
      '& button': {
        width: '100%',
        height: '100%',
        padding: 0,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
      },
    },
  },
});

export const StyledPrevButton = styled(Box)({
  left: '-28px',
});
export const StyledNextButton = styled(Box)({
  right: '-28px',
});
