import { styled, alpha } from '@mui/material/styles';
import { Button, Box, Toolbar, InputBase } from '@mui/material';

export const StyledLinkButton = styled(Button)({
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
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  // minWidth: '2rem',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      // width: '20ch',
    },
  },
}));

export const StyledBtn = styled(Button)({
  border: '1px solid #eee',
  background: '#eee',
  opacity: 0.92,
  color: '#212121',
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
  },
  '&:hover': {
    color: '#fff',
  },
});
