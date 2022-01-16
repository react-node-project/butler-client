import React, { useEffect } from 'react';
import RestaurantHeader from '../restaurantDetails/RestaurantHeader/index';
import { StyledText } from './restaurantDetail.styled';
import MenuList from './MenuList/index';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import { useGetMenuQuery } from '../../store/service/restaurantMenu';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RestaurantDetail() {
  // how to fetch data before render? async?
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
          <MenuList menu={data} menuCategory={data.map((item) => item.category)} />
        </StyledText>
      )}
    </>
  );
}
