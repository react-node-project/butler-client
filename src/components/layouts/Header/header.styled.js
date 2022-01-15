import { styled, alpha } from '@mui/material/styles';
import { Button, Box, Toolbar, InputBase } from '@mui/material';

export const StyledLinkButton = styled(Button)({
  marginRight:15,
  '& a': {
    fontWeight: 600,
    color: '#fff',
    textDecoration: 'none',
  },
});

export const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
});

export const StyledSearchBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  minWidth: '18rem',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    // width: 'auto',
  },
}));

export const StyledIconWrapperBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      // width: '20ch',
    },
  },
}));

export const StyledResponsiveBox = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

export const StyledBtn = styled(Button)({
  border: '1px solid #eee',
  background: '#eee',
  marginLeft: 10,
  opacity: 0.92,
  color: '#212121',
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
  },
  '&:hover': {
    // 여기 배경을 theme.palette.primary.main 으로 할 방법 아실까요
    background: '#fff',
    fontWeight: 600,
  },
});
