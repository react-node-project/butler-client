import React, { useState } from 'react';
import { StyledDiv, StyledCard,StyledButton } from './basket.styled';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Basket2 = () => {
  // item => redux
  const [items, setItems] = useState("")
  return (
    <StyledDiv>
      <StyledCard>
          <ShoppingBasketIcon/>
          {/* {(!item && <Typography variant="subtitle1">Your basket is empty</Typography>)} */}
         
      </StyledCard>
      <StyledButton fullWidth>go to Checkout</StyledButton>
    </StyledDiv>
  );
};

export default Basket2;
