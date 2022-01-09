import React, { useState } from 'react';
import {
  StyledCard,
  StyledButton,
  StyledBasketBox,
  StyledItemBox,
  StyledRemoveIcon,
  StyledAddIcon,
  StyledSubtotalBox,
} from './basket.styled';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Divider, Typography, Switch,FormControlLabel } from '@mui/material';
// import { useGetAllProductListQuery } from '../../redux/features/productApi';

const Basket = () => {
  // const { data, error, isLoading } = useGetAllProductListQuery();
  const [items, setItems] = useState([]);

  return (
    <StyledCard>
      <ShoppingBasketIcon sx={{ fontSize: '2.5rem' }} />
      {!items? (
        <Typography pb={2} gutterBottom variant="subtitle1">
          Your basket is empty
        </Typography>
      ) : (
        <>
          <StyledBasketBox>
            <h3>Your order</h3>
            {/* item */}
            <StyledItemBox>
              <h5>Item name</h5>
              <div className="itemPriceAndQty">
                <h5>
                  <StyledAddIcon color="primary" />
                  3
                  <StyledRemoveIcon color="warning" />
                  <span>£ 11.30</span>
                </h5>
              </div>
            </StyledItemBox>

            <Divider />
            <div>
              <h3>
                Tip <FormControlLabel control={<Switch defaultChecked />} label="£0.69" />
              </h3>
            </div>
            <Divider />
            <StyledSubtotalBox>
              <h3>Subtotal</h3>
              <h5>£ 11.30</h5>
            </StyledSubtotalBox>
          </StyledBasketBox>
        </>
      )}
      <StyledButton fullWidth>Go to Checkout</StyledButton>
    </StyledCard>
  );
};

export default Basket;
