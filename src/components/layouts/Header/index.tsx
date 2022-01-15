import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Container } from '@mui/material';

import Typography from '@mui/material/Typography';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuIcon from '@mui/icons-material/Menu';

import { PATH_API_DOCS, PATH_ROOT, PATH_USER_SIGNIN } from '../../../constants/PathConstants';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LinkButton, StyledMenuItem } from './header.styled';

interface Props {
  showSideNav: () => {};
}

export default function Header({ showSideNav }: Props) {
  let navigate = useNavigate();

  const { user } = useSelector((state) => state.user);
  const goSignIn = () => navigate(PATH_USER_SIGNIN);
  const goDocs = () => navigate(PATH_API_DOCS);

  const ReactiveMenuItem = !user ? (
    <StyledMenuItem onClick={goSignIn}>
      <HomeOutlinedIcon />
      <Typography textAlign="center">Sign Up or logIn</Typography>
    </StyledMenuItem>
  ) : (
    <StyledMenuItem onClick={goDocs}>
      <FindInPageIcon />
      <Typography textAlign="center">API Docs</Typography>
    </StyledMenuItem>
  );

  return (
    <Box>
      <AppBar position="sticky">
        <Container sx={{ width: '70%' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <LinkButton>
                <Link to={PATH_ROOT}>Butler</Link>
              </LinkButton>
            </Typography>
            {ReactiveMenuItem}
            <StyledMenuItem onClick={showSideNav}>
              <MenuIcon />
              <Typography textAlign="center">Menu</Typography>
            </StyledMenuItem>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
