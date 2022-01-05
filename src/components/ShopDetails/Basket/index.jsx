import React, { useState } from 'react';
import { StyledDiv, StyledCard,StyledButton } from './basket.styled';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Divider, Typography } from '@mui/material';
import Product from './Product';

import { useGetAllProductListQuery } from '../../redux/features/productApi';
import { useEffect } from 'react';

const Basket2 = () => {
  // item => redux
  const {data,error,isLoading} = useGetAllProductListQuery();
  const [items, setItems] = useState([]);

  // useEffect(()=>{
  //   setItems(prev=>[prev,...data])
  //   console.log("fetched data",items)
  // },[items]);

  return (
    <StyledDiv>
      {isLoading? <p>Loading...</p>:
      error? <p>An error has occurred..</p>:
      <Product data={data} />
      }

      {/* cart */}
      <StyledCard>
          <ShoppingBasketIcon sx={{fontSize:"2.5rem"}}/>
          {!items? <Typography pb={2} gutterBottom variant="subtitle1">Your basket is empty</Typography>:
          (

            <>
            <Divider/>
            <Typography p={2} gutterBottom variant="h6">Subtotal <span>£ 0.0</span></Typography>
            </>
          )}
          <StyledButton fullWidth>Go to Checkout</StyledButton>
      </StyledCard>

    </StyledDiv>
  );
};

export default Basket2;

