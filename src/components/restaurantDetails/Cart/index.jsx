import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyledCard,
  StyledButton,
  StyledCartBox,
  StyledItemBox,
  StyledRemoveIcon,
  StyledAddIcon,
  StyledSubtotalBox,
  StyledDeleteItemIcon,
} from './cart.styled';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Divider, Switch, FormControlLabel, IconButton } from '@mui/material';

import { incrementItemQty, decrementItemQty, removeFromCart } from '../../../store/features/cartSlice';
export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const [tipChecked, setTip] = useState(false);
  const dispatch = useDispatch();
  const handleTipChange = () => {
    setTip(!tipChecked);
  };
  return (
    <>
      <StyledCard>
        <ShoppingBasketIcon sx={{ fontSize: '2.5rem' }} />
        <StyledCartBox>
          <h3>Your order</h3>
          {/* cart items */}
          {cart.cartItems?.map((cartItem) => (
            <StyledItemBox key={cartItem.id}>
              <h5>{cartItem.name}</h5>
              <IconButton onClick={() => dispatch(removeFromCart(cartItem.id))}>
                <StyledDeleteItemIcon />
              </IconButton>
              <div className="itemPriceAndQty">
                <h5>
                  <IconButton onClick={() => dispatch(decrementItemQty(cartItem.id))}>
                    <StyledRemoveIcon color="warning" />
                  </IconButton>
                  {cartItem?.qty}
                  <IconButton onClick={() => dispatch(incrementItemQty(cartItem.id))}>
                    <StyledAddIcon color="primary" />
                  </IconButton>
                  <span>£ {cartItem.price * cartItem.qty}</span>
                </h5>
              </div>
            </StyledItemBox>
          ))}

          <Divider />
          <div>
            <h3>
              Tip
              <FormControlLabel control={<Switch checked={tipChecked} onChange={handleTipChange} />} label="£0.69" />
            </h3>
          </div>
          <Divider />
          <StyledSubtotalBox>
            <h3>Subtotal</h3>
            {/* <h5>30.43</h5> */}
            <h5>£ {tipChecked ? cart?.cartTotalAmount + 0.69 : cart?.cartTotalAmount}</h5>
          </StyledSubtotalBox>
        </StyledCartBox>
        <StyledButton fullWidth>Go to Checkout</StyledButton>
      </StyledCard>
    </>
  );
}
