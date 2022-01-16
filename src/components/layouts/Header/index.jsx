import React from 'react';
import { AppBar, Box, Stack, Typography } from '@mui/material';
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
  StyledResponsiveBox,
  StyledSearchBox,
  StyledIconWrapperBox,
  StyledBtn,
  StyledInputBase,
} from './header.styled';
import { IconButton } from '@mui/material';

export default function Header({ showSideNav, showFavList }) {
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
          <StyledLinkButton>
            <Link to={PATH_ROOT} href="#">
              Butler
            </Link>
          </StyledLinkButton>

          {/* search */}
          <StyledSearchBox>
            <StyledIconWrapperBox>
              <SearchIcon />
            </StyledIconWrapperBox>
            <StyledInputBase placeholder="Search for a restaurant" inputProps={{ 'aria-label': 'search' }} />
          </StyledSearchBox>
          <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
            <StyledResponsiveBox>
              {/* favList */}
              <StyledBtn onClick={showFavList} variant="contained" startIcon={<FavoriteBorderIcon color="warning" />}>
                Favorites
              </StyledBtn>

              {/* login/signup */}
              {user ? (
                <StyledBtn onClick={onClickLogout} variant="contained" startIcon={<LogoutIcon color="primary" />}>
                  <Typography mt={0.5} variant="subtitle2">
                    Logout
                  </Typography>
                </StyledBtn>
              ) : (
                <StyledBtn onClick={onClickLogout} variant="contained" startIcon={<LoginIcon color="primary" />}>
                  <Link to={PATH_USER_SIGNIN} href="#">
                    Login
                  </Link>
                </StyledBtn>
              )}
            </StyledResponsiveBox>

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
