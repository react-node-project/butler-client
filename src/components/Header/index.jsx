import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LoginIcon from '@mui/icons-material/Login';
import { PATH_ROOT, PATH_USER_SIGNIN } from '../../constants/PathConstants';
import { styled } from '@mui/styles';

export default function Header() {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <LinkTag to={PATH_ROOT}>Butler</LinkTag>
          </Typography>
          <LinkTag to={PATH_USER_SIGNIN} href="#">
            <LoginIcon />
          </LinkTag>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const LinkTag = styled(Link)({
  color: '#fff',
  textDecoration: 'none',
});
