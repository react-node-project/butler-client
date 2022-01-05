// 민주님 이 컴포넌트는 메뉴 페이지 기능에 장바구니 담기 클릭 버튼까지 진행되면 더 할게요. 
// 장바구니용 cartSlice는 만들어 두었는데요 + orderSlice 만드셔야 할 것 같아요. 

import React, { useState } from 'react';
import { StyledCard, StyledButton } from './basket.styled';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Divider, Typography } from '@mui/material';
// import { useGetAllProductListQuery } from '../../redux/features/productApi';
import { useEffect } from 'react';

const Basket = () => {
  // item => redux
  // const { data, error, isLoading } = useGetAllProductListQuery();
  const [items, setItems] = useState([]);

  // useEffect(()=>{
  //   setItems(prev=>[prev,...data])
  //   console.log("fetched data",items)
  // },[items]);

  return (
    <StyledCard>
      <ShoppingBasketIcon sx={{ fontSize: '2.5rem' }} />
      {!items ? (
        <Typography pb={2} gutterBottom variant="subtitle1">
          Your basket is empty
        </Typography>
      ) : (
        <>
          <Divider />
          <Typography align="right" p={2} pt={5} gutterBottom variant="subtitle1">
            Subtotal <span>£ 0.0</span>
          </Typography>
        </>
      )}
      <StyledButton fullWidth>Go to Checkout</StyledButton>
    </StyledCard>
  );
};

export default Basket;
