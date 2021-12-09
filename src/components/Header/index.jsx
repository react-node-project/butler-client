import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';

import { PATH_ROOT, PATH_USER_SIGNIN } from '../../constants/PathConstants';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/features/userSlice';
import { Link } from 'react-router-dom';
import { LinkButton } from './styled.header';
import { IconButton } from '@mui/material';

export default function Header({ showSideNav }) {
  const { Kakao } = window;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const onClickLogout = () => {
    Kakao.Auth.logout();
    dispatch(setUser(null));
  };
  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <LinkButton>
              <Link to={PATH_ROOT} href="#">
                Butler
              </Link>
            </LinkButton>
          </Typography>
          {user ? (
            <LinkButton onClick={onClickLogout}>
              <LogoutIcon />
            </LinkButton>
          ) : (
            <LinkButton>
              <Link to={PATH_USER_SIGNIN} href="#">
                <LoginIcon />
              </Link>
            </LinkButton>
          )}
          <IconButton onClick={showSideNav}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
