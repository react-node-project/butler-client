import React from 'react';
import ShopHeader from './ShopHeader/index';
import MenuItem from './MenuItem/index';
import { StyledWrapper } from './shopDetail.styled';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Slide
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

      <Grid container display="flex" justifySelf="center" spacing={1}>
        {Array.from(Array(16)).map((_, index) => (
          <Grid item xs={10} sm={5} md={5} key={index}>
            <MenuItem key={index} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
