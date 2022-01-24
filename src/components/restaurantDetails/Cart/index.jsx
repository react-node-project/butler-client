import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyledCard,
  StyledButton,
  StyledCartBox,
  StyledItemBox,
  StyledRemoveIcon,
  StyledAddIcon,
  StyledSubtotalBox,
} from './cart.styled';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Divider, Switch, FormControlLabel, IconButton } from '@mui/material';

import { removeFromCart } from '../../../store/features/cartSlice';

const Cart = React.memo(() => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = useCallback((item) => {
    dispatch(removeFromCart(item));
  }, []);


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
              <div className="itemPriceAndQty">
                <h5>
                  <StyledRemoveIcon color="warning" />
                  {cartItem?.qty}
                  <StyledAddIcon color="primary" />
                  <span>£ {cartItem.price * cartItem.qty}</span>
                </h5>
              </div>
            </StyledItemBox>
          ))}

          <Divider />
          <div>
            <h3>
              Tip <FormControlLabel control={<Switch defaultChecked />} label="£0.69" />
            </h3>
          </div>
          <Divider />
          <StyledSubtotalBox>
            <h3>Subtotal</h3>
            <h5>£ {cart?.cartTotalAmount}</h5>
          </StyledSubtotalBox>
        </StyledCartBox>
        <StyledButton fullWidth>Go to Checkout</StyledButton>
      </StyledCard>
    </>
    // )
    // }
  );
});

export default Cart;
