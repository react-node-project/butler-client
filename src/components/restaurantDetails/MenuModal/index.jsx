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
import { StyledImg, StyledButton } from './menuModel.styled';
import { addToCart } from '../../../store/features/cartSlice';
import { useDispatch } from 'react-redux';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function MenuModal(props) {
  const [checkedItems, setCheckedItems] = React.useState({});
  const [ingredients, setingredients] = React.useState({});
  const { open, menuName, menuDesc, menuIngri, imgUrl, menuPrice } = props;
  const [price, setPrice] = React.useState(0);
  const dispatch = useDispatch();

  const floatToFixed = (price) => {
    return Math.abs(parseFloat(price).toFixed(2));
  };
  const handleClose = () => {
    props.handleClose();

    // clear checkbox, options, price
    setCheckedItems({});
    setingredients({});
    setPrice(0);
  };

  const addIngredients = (menuName, item) => {
    let currentIngredients = ingredients[menuName] || [];
    setingredients({ ...ingredients, [menuName]: [...currentIngredients, { ingredient: item[0], price: item[1] }] });
  };

  const removeIngredients = (menuName, item) => {
    let updatedIngredients = ingredients[menuName].filter((ingredient) => ingredient[0] !== item[0]);
    setingredients(updatedIngredients);
  };

  const handleIngredients = (e, idx, item, menuName) => {
    // if already checked, uncheck and remove item's price from the total
    // if not add item and its price

    if (item[0] in checkedItems) {
      if (checkedItems[item[0]]) {
        setCheckedItems({ ...checkedItems, [item[0]]: false });
        setPrice(price - item[1]);
        removeIngredients(menuName, item);
      } else {
        setCheckedItems({ ...checkedItems, [item[0]]: true });
        setPrice(price + item[1]);
        addIngredients(menuName, item);
      }
    } else {
      setCheckedItems({ ...checkedItems, [item[0]]: true });
      setPrice(price + item[1]);
      addIngredients(menuName, item);
    }
  };

  const handleAddToCart = () => {
    // calculate ingredients total
    let ingredientsTotal = Object.values(ingredients)[0]
      .map((item) => item.price)
      .reduce((acc, val) => acc + val, 0);

    // cart object item that will be dispatched to the redux store
    let cartItemObj = {
      foodName: Object.keys(ingredients)[0],
      ingredients: Object.values(ingredients),
      price: floatToFixed(parseInt(menuPrice, 10) + ingredientsTotal),
    };

    console.log(cartItemObj);
    //dispatch selected items and total
    dispatch(addToCart(cartItemObj));
    handleClose();
  };
  return (
    <div>
      <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose}>
        <StyledButton>
          <IconButton sx={{ position: 'absolute', right: '0' }} onClick={handleClose}>
            <CancelIcon span="component" className="cancelBtn" sx={{ fontSize: '45px' }} />
          </IconButton>
        </StyledButton>

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
                control={
                  <Checkbox
                    checked={checkedItems[item[0]] || false}
                    onChange={(e) => handleIngredients(e, idx, item, menuName)}
                  />
                }
                sx={{ display: 'flex', float: 'left' }}
                label={item[0]}
              />
            ))}
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button sx={{ m: 1, px: 6, width: '100%' }} onClick={handleAddToCart} type="submit" variant="contained">
            Add for $ {floatToFixed(price)}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
