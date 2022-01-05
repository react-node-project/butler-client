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
import { setTotalPrice as setTotalPriceStore, addMenuOption } from '../../../store/features/menuSelectSlice';
import { useDispatch } from 'react-redux';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function MenuModal(props) {
  const [checkedItems, setCheckedItems] = React.useState({});
  const [ingredients, setingredients] = React.useState([]);
  const { open, menuName, menuDesc, menuIngri, imgUrl } = props;
  const [price, setPrice] = React.useState(0);
  const dispatch = useDispatch();

  const handleClose = () => {
    props.handleClose();
    // dispatch selected items and total
    let priceToAdd = Math.abs(parseFloat(price).toFixed(2));
    dispatch(setTotalPriceStore(priceToAdd));

    dispatch(addMenuOption(ingredients));
    // clear checkbox, options, price
    setCheckedItems([]);
    setingredients([]);
    setPrice(0);

    console.log(checkedItems);
  };

  const handleIngredients = (e, idx, item) => {
    ingredients.push(item);

    // if already checked, uncheck and remove item's price from the total
    // if not add item and its price
    if (item[0] in checkedItems) {
      if (checkedItems[item[0]]) {
        setCheckedItems({ ...checkedItems, [item[0]]: false });
        setPrice(price - item[1]);
      } else {
        setCheckedItems({ ...checkedItems, [item[0]]: true });
        setPrice(price + item[1]);
      }
    } else {
      setCheckedItems({ ...checkedItems, [item[0]]: true });
      setPrice(price + item[1]);
    }
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
                    onChange={(e) => handleIngredients(e, idx, item)}
                  />
                }
                sx={{ display: 'flex', float: 'left' }}
                label={item[0]}
              />
            ))}
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button sx={{ m: 1, px: 6, width: '100%' }} type="submit" variant="contained">
            Add for $ {Math.abs(parseFloat(price).toFixed(2))}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
