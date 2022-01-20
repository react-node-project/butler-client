import React from 'react';
import { StyledBtn } from '@components/layouts/Header/header.styled';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

type Props = {};
const Basket = (props: Props) => {
  const goCart = () => {};

  return (
    <StyledBtn onClick={goCart} variant="contained" startIcon={<ShoppingBasketOutlinedIcon />}>
      <a>Basket</a>
    </StyledBtn>
  );
};

export default Basket;
