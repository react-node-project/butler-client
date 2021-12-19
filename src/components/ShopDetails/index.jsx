import React from 'react';
import ShopHeader from './ShopHeader/index';
import MenuItem from './MenuItem/index';
import Basket from './Basket/index';
import { StyledWrapper } from './shopDetail.styled';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Slide,
  Button,
  Grid,
} from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ShopDetail() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledWrapper>
        <ShopHeader slideDialog={handleClickOpen} />
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="shop-info-description"
        >
          <DialogTitle>{'Info'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="shop-info-description">
              Here we will have Store location, notes, mobile number
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </StyledWrapper>

      <Grid container display="flex" justifySelf="center" spacing={{ xs: 2 }} columns={{ xs: 4, sm: 8, md: 8 }}>
        {Array.from(Array(16)).map((_, index) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <MenuItem spacing={4} key={index} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
