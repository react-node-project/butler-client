import React from 'react';
import { StyledBtn } from '@components/layouts/Header/header.styled';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import { PATH_USER_SIGNIN } from '../../../../constants/PathConstants';

type Props = {};

const LogInMenu = (props: Props) => {
  return (
    <StyledBtn variant="contained" startIcon={<LoginIcon color="primary" />}>
      <Link to={PATH_USER_SIGNIN}>Login</Link>
    </StyledBtn>
  );
};

export default LogInMenu;
