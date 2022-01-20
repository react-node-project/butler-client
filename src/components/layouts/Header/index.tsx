import React, { useEffect, useState } from 'react';
import { AppBar, Box, Stack, useMediaQuery } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import { useSelector } from 'react-redux';
import { StyledBtn, StyledLinkButton, StyledToolbar } from './header.styled';
import Typography from '@mui/material/Typography';

import { PATH_RESTAURANTS, PATH_RESTAURANTS_DETAIL, PATH_ROOT } from '../../../constants/PathConstants';
import { ApiDocsMenu, Basket, FavMenu, LogInMenu, SearchBar } from '@components/layouts/Header/menus';
import { RootState } from '@store/index';
import { theme } from '../../../styles/theme';

interface Props {
  showSideNav: () => void;
  showFavList: () => void;
}

export default function Header({ showSideNav, showFavList }: Props) {
  let location = useLocation();
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const cart = true;

  const isBrowserWidth = useMediaQuery(theme.breakpoints.up('md'));
  const user = useSelector((state: RootState) => state.user);
  const [isShowSearchBar, setIsShowSearchBar] = useState(false);

  useEffect(() => {
    const isShowPage = [PATH_RESTAURANTS, PATH_RESTAURANTS_DETAIL].includes(location.pathname);

    setIsShowSearchBar(isShowPage && isBrowserWidth);
  }, [location, isBrowserWidth]);

  return (
    <Box>
      <AppBar position="sticky">
        <Box>
          <StyledToolbar>
            <Typography component="div" sx={{ flexGrow: 1 }}>
              <StyledLinkButton>
                <Link to={PATH_ROOT}>Butler</Link>
              </StyledLinkButton>
            </Typography>
            <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
              {isShowSearchBar && <SearchBar />}
              {cart && <Basket />}
              {isLoggedIn ? (
              {basket && <Basket />}
              {user ? (
                <>
                  <FavMenu showFavList={showFavList} />
                  <ApiDocsMenu />
                </>
              ) : (
                <LogInMenu />
              )}

              {/* side menu */}
              <StyledBtn startIcon={<MenuIcon />} onClick={showSideNav} aria-label="menu">
                Menu
              </StyledBtn>
            </Stack>
          </StyledToolbar>
        </Box>
      </AppBar>
    </Box>
  );
}
