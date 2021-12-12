import React from 'react';
import { HeaderImage, Header } from './styled.shopHeader';
import burgerImg from '../../../asset/img/burger.png';
import { Grid, Button, List } from '@mui/material';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import ListItem from '@mui/material/ListItem';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const menuCategory = [
  'Detroit Pizza',
  "Greasy's Piacks",
  'Little Chimps Menu',
  'Hotdog',
  'Greasy Fried Chicken',
  'Snacks',
  'Desserts',
];

function getStyles(name, menuName, theme) {
  return {
    fontWeight: menuName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
}

export default function StoreHeader(props) {
  const theme = useTheme();
  const [menuName, setMenuName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setMenuName(
      value,
      // On autofill we get a the stringified value.
      //typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <>
      <Header>
        <Grid container spacing={8} alignItems="center" justifyContent="center">
          <Grid item sx={6}>
            <HeaderImage src={burgerImg} />
          </Grid>
          <Grid item sx={4} sx={{ justifyContent: 'flex-start' }}>
            <List>
              <ListItem disablePadding>
                <Typography variant="h4">Grease Monkey</Typography>
              </ListItem>
              <ListItem disablePadding>
                <Typography variant="h8">20 - 35 min Burgers·American·Fried Chicken</Typography>
              </ListItem>
              <ListItem disablePadding>
                <Button onClick={props.slideDialog} color="primary" startIcon={<InfoIcon />}>
                  Info
                  <ArrowForwardIosIcon style={{ fontSize: 'small' }}></ArrowForwardIosIcon>
                </Button>
              </ListItem>
            </List>
          </Grid>
          <Grid item sx={2}>
            <ListItem disablePadding>
              <Typography variant="h8">Deliver in 20 - 35 min</Typography>
            </ListItem>
          </Grid>
        </Grid>
      </Header>

      <Grid container direction="row-reverse">
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-menu-category">Greasy's Burgers</InputLabel>
          <Select
            labelId="multiple-menu-category"
            id="multiple-category"
            multiple
            value={menuName}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {menuCategory.map((menu) => (
              <MenuItem key={menu} value={menu} style={getStyles(menu, menuName, theme)}>
                {menu}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}
