import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import LoginIcon from '@mui/icons-material/Login';

export default function Header() {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="./" color="inherit">
              Butler
            </Link>
          </Typography>
          <Link href="./sign-in" color="#fff">
            <LoginIcon />
          </Link>
        </Toolbar>
        {/* <Link Link="./sign-in">로그인</Link>
    <Link Link="./sign-up">회원가입</Link> */}
      </AppBar>
    </Box>
  );
}
