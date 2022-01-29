import React from 'react';
import { StyledBtn } from '@components/layouts/Header/header.styled';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import { PATH_USER_LOGIN } from '../../../../constants/PathConstants';

type Props = {};

const LogInMenu = (props: Props) => {
  return (
    <StyledBtn variant="contained" startIcon={<LoginIcon />}>
      <Link to={PATH_USER_LOGIN}>Login</Link>
    </StyledBtn>
  );
};

export default LogInMenu;
