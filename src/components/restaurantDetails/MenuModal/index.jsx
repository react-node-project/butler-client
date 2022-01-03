import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  FormGroup,
  FormControlLabel,
  Checkbox,
  IconButton,
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { StyledImg } from './menuModel.styled';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function MenuModal(props) {
  const { open, menuName, menuDesc, menuIngri, imgUrl } = props;
  const handleClose = () => {
    props.handleClose();
  };

  return (
    <div>
      <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose}>
        <IconButton sx={{ position: 'absolute', right: '0' }} onClick={handleClose}>
          <CancelIcon sx={{ fontSize: '45px', color: 'white' }} />
        </IconButton>

        <StyledImg src={imgUrl} />
        <DialogTitle>{menuName}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ m: 2 }} id="menu-option-dialog">
            {menuDesc}
          </DialogContentText>
          <FormGroup>
            {menuIngri.map((el, idx) => (
              <FormControlLabel
                key={idx}
                control={<Checkbox />}
                sx={{ display: 'flex', float: 'left' }}
                label={el[0]}
              />
            ))}
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button sx={{ m: 1, px: 6, width: '100%' }} type="submit" variant="contained">
            Add for $price
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
