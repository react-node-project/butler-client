import React from 'react';
import { StyledHeaderImage, StyledHeader, MenuProps } from './shopHedaer.styled';
import burgerImg from '../../../asset/img/burger.png';
import {
  Grid,
  Button,
  List,
  Typography,
  ListItem,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  useTheme,
  OutlinedInput,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoIcon from '@mui/icons-material/Info';

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
    fontWeight: menuName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightBold,
  };
}

export default function StoreHeader(props) {
  const theme = useTheme();
  const [menuName, setMenuName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setMenuName(value);
  };
  return (
    <>
      <StyledHeader>
        <Grid container spacing={8} alignItems="center" justifyContent="center">
          <Grid item sx={6}>
            <StyledHeaderImage src={burgerImg} />
          </Grid>
          <Grid item sx={4}>
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
                  <ArrowForwardIosIcon style={{ fontSize: 'small' }} />
                </Button>
              </ListItem>
              <ListItem disablePadding>
                <Typography variant="h8">Deliver in 20 - 35 min</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid itme sx={2}></Grid>
        </Grid>
      </StyledHeader>

      <Grid container direction="row-reverse">
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="input-menu-category">Greasy's Burgers</InputLabel>
          <Select
            id="menu-category"
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
