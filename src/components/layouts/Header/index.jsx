import React from 'react';
import { AppBar, Box, Button, Stack, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';

import { PATH_ROOT, PATH_USER_SIGNIN } from '../../../constants/PathConstants';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../store/features/userSlice';
import { Link } from 'react-router-dom';
import {
  StyledToolbar,
  StyledLinkButton,
  StyledSearchBox,
  StyledIconWrapperBox,
  StyledInputBase,
} from './header.styled';
import { IconButton } from '@mui/material';

export default function Header({ showSideNav }) {
  const { Kakao } = window;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const onClickLogout = () => {
    Kakao?.Auth.logout();
    dispatch(setUser(null));
  };
  return (
    <Box>
      <AppBar position="sticky">
        <StyledToolbar>
          {/* logo */}
          <StyledLinkButton>
            <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
              <Link to={PATH_ROOT} href="#">
                Butler
              </Link>
            </Typography>
          </StyledLinkButton>

          {/* search */}
          <StyledSearchBox>
            <StyledIconWrapperBox>
              <SearchIcon />
            </StyledIconWrapperBox>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </StyledSearchBox>
          <Stack direction="row" spacing={1}>
            {/* favList */}
            <StyledLinkButton>
              <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
                <Link to={PATH_ROOT} href="#">
                  Favorites
                </Link>
              </Typography>
            </StyledLinkButton>

            {/* login/signup */}
            {user ? (
              <StyledLinkButton onClick={onClickLogout}>
                <LogoutIcon size="large" />
              </StyledLinkButton>
            ) : (
              <StyledLinkButton>
                <Link to={PATH_USER_SIGNIN} href="#">
                  <LoginIcon size="large" />
                </Link>
              </StyledLinkButton>
            )}

            {/* sidemenu */}
            <IconButton onClick={showSideNav}>
              <MenuIcon size="large" color="inherit" />
            </IconButton>
          </Stack>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
