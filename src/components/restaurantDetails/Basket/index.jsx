import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyledCard,
  StyledButton,
  StyledBasketBox,
  StyledItemBox,
  StyledRemoveIcon,
  StyledAddIcon,
  StyledSubtotalBox,
  StyledDeleteItemIcon,
} from './basket.styled';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Divider, Switch, FormControlLabel, IconButton } from '@mui/material';

import { removeFromCart } from '../../../store/features/cartSlicer';
// import { useGetAllProductListQuery } from '../../redux/features/productApi';

const Basket = React.memo(() => {
  // const { data, error, isLoading } = useGetAllProductListQuery();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = useCallback((item) => {
    dispatch(removeFromCart(item));
  }, []);

  return (
    <>
      <StyledCard>
        <ShoppingBasketIcon sx={{ fontSize: '2.5rem' }} />
        <StyledBasketBox>
          <h3>Your order</h3>
          {/* cart items */}
          {cart.cartItems?.map((cartItem) => (
            <StyledItemBox key={cartItem.id}>
              <h5>
                {cartItem.title}
                <IconButton onClick={() => handleRemoveFromCart(cartItem)}>
                  <StyledDeleteItemIcon />
                </IconButton>
              </h5>
              <div className="itemPriceAndQty">
                <h5>
                  <StyledAddIcon color="primary" />
                  {cartItem.qty}
                  <StyledRemoveIcon color="warning" />
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
            <h5>£ {cart.cartTotalAmt}</h5>
          </StyledSubtotalBox>
        </StyledBasketBox>
        <StyledButton fullWidth>Go to Checkout</StyledButton>
      </StyledCard>
    </>
    // )
    // }
  );
});

export default Basket;
