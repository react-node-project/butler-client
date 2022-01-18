import * as React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { StyledBtn } from '@components/layouts/Header/header.styled';

type Props = {
  showFavList: () => void;
};
const FavMenu = ({ showFavList }: Props) => {
  return (
    <StyledBtn onClick={showFavList} variant="contained" startIcon={<FavoriteBorderIcon color="warning" />}>
      Favorites
    </StyledBtn>
  );
};

export default FavMenu;
