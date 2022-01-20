import React from 'react';
import RestaurantHeader from '../restaurantDetails/RestaurantHeader/index';
import Basket from './Basket/index';
import { StyledText, StyledBasketGrid, StyledMenuListGrid, StyledListWrapper } from './restaurantDetail.styled';
import MenuList from './MenuList/index';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Grid,
} from '@mui/material';
import { useGetMenuQuery } from '../../store/service/restaurantMenu';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RestaurantDetail() {
  const { data, error, isLoading } = useGetMenuQuery();
  const [open, setOpen] = React.useState(false);

  const infohandleClickOpen = () => {
    setOpen(true);
  };

  const infohandleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {!data || isLoading ? (
        <>Loading..</>
      ) : (
        <StyledText>
          <RestaurantHeader slideDialog={infohandleClickOpen} />
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={infohandleClose}
            aria-describedby="shop-info-description"
          >
            <DialogTitle>{'Info'}</DialogTitle>
            <DialogContent>
              <DialogContentText id="shop-info-description">
                Here we will have Store location, notes, mobile number
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={infohandleClickOpen}>Close</Button>
            </DialogActions>
          </Dialog>
          <StyledListWrapper container>
            <StyledMenuListGrid item>
              <MenuList menu={data} menuCategory={data.map((item) => item.category)} />
            </StyledMenuListGrid>
            <StyledBasketGrid item sx={{ display: { xs: 'none', md: 'block' } }}>
              <Basket />
            </StyledBasketGrid>
          </StyledListWrapper>
        </StyledText>
      )}
    </>
  );
}
