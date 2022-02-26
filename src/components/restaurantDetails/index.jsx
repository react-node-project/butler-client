import React from 'react';
import RestaurantHeader from './RestaurantHeader/index';
import Cart from './Cart/index';
import { StyledText, StyledCartGrid, StyledMenuListGrid, StyledListWrapper } from './restaurantDetail.styled';
import MenuList from './MenuList/index';
import InfoModal from './InfoModal/index';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, Typography } from '@mui/material';
import { useGetMenuQuery } from '../../store/service/restaurantMenu';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RestaurantDetail() {
  const { data, isLoading } = useGetMenuQuery();
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
          <RestaurantHeader data={data} slideDialog={infohandleClickOpen} />
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={infohandleClose}
            aria-describedby="shop-info-description"
          >
            <DialogTitle>
              <Typography fontSize="20px" align="center">
                Info
              </Typography>
            </DialogTitle>
            <DialogContent style={{ backgroundColor: '#f9fafa' }}>
              <InfoModal />
            </DialogContent>
            <DialogActions>
              <Button onClick={infohandleClose}>Close</Button>
            </DialogActions>
          </Dialog>

          <StyledListWrapper container>
            <StyledMenuListGrid item>
              <MenuList menu={data} menuCategory={data.map((item) => item.category)} />
            </StyledMenuListGrid>
            <StyledCartGrid item sx={{ display: { xs: 'none', md: 'block' } }}>
              <Cart />
            </StyledCartGrid>
          </StyledListWrapper>
        </StyledText>
      )}
    </>
  );
}
