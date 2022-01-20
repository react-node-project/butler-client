import React from 'react';
import { Link } from 'react-router-dom';
import { PATH_API_DOCS } from '../../../../constants/PathConstants';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import { StyledBtn } from '@components/layouts/Header/header.styled';

type Props = {};

const ApiDocsMenu = (props: Props) => {
  return (
    <StyledBtn startIcon={<FindInPageIcon />}>
      <Link to={PATH_API_DOCS}>API Docs</Link>
    </StyledBtn>
  );
};

export default ApiDocsMenu;
