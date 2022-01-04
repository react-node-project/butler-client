import React, { useEffect } from 'react';
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
  const [ingredients, setingredients] = React.useState([]);
  const { open, menu, menuName, menuDesc, menuIngri, imgUrl } = props;
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [checked, setChecked] = React.useState([]);

  useEffect(() => {
    // console.log(props.menu[0].foodList[0].ingredients);
    let checkList = props.menu.map((category, categoryIdx) =>
      category.foodList.map((food, foodIdx) => {
        return food.ingredients;
      }),
    );

    console.log(checkList);
  }, []);

  const handleClose = () => {
    props.handleClose();
    // clear out selected options
    setingredients([]);
    // let tmpchecked = [];
    // tmpchecked = checked.map((item) => ({ item: false }));
    // console.log(tmpchecked);
  };
  const addIngredients = (e, idx, item) => {
    ingredients.push(item);
    setTotalPrice(totalPrice + item[1]);
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
            {menuIngri.map((item, idx) => (
              <FormControlLabel
                key={idx}
                control={<Checkbox checked={checked[idx]} onChange={(e) => addIngredients(e, idx, item)} />}
                sx={{ display: 'flex', float: 'left' }}
                label={item[0]}
              />
            ))}
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button sx={{ m: 1, px: 6, width: '100%' }} type="submit" variant="contained">
            Add for $ {totalPrice}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
