import React, { useRef } from 'react';
import { StyledMenuWrapper, MenuProps } from './menuList.styled';
import { Grid, Typography, InputLabel, MenuItem, FormControl, Select, useTheme, OutlinedInput } from '@mui/material';
import MenuCard from '../MenuCard/index';
import MenuModal from '../MenuModal/index';

function getStyles(name, menuName, theme) {
  return {
    fontWeight: menuName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightBold,
  };
}

export default function MenuList(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [menuName, setMenuName] = React.useState('');
  const [menuDesc, setMenuDesc] = React.useState('');
  const [menuIngri, setMenuIngri] = React.useState([]);
  const [imgUrl, setImgUrl] = React.useState('');

  let refs = [useRef(null), useRef(null)];

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setMenuName(value);
    refs.forEach((el, index) => {
      if (el.current.textContent === value) {
        // scrolling doesn't work when there's optional parameter
        // tried enabling chrome://flags/#smooth-scrolling
        refs[index].current.scrollIntoView({ behaviour: 'smooth' });
      }
    });
  };

  const handleCardClick = (menuName, menuDesc, menuIngri, imgUrl) => {
    setMenuName(menuName);
    setMenuDesc(menuDesc);
    setMenuIngri(menuIngri);
    setImgUrl(imgUrl);
    setOpen(true);
  };

  return (
    <>
      <MenuModal
        open={open}
        menuName={menuName}
        menuDesc={menuDesc}
        menuIngri={menuIngri}
        imgUrl={imgUrl}
        handleClose={handleClose}
      />
      <Grid container top="0" position="sticky" direction="row-reverse">
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="input-menu-category">Greasy's Burgers</InputLabel>
          <Select
            id="menu-category"
            value={menuName}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
            defaultValue=""
          >
            {props.menuCategory.map((menu) => (
              <MenuItem key={menu} value={menu} style={getStyles(menu, menuName, theme)}>
                {menu}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <StyledMenuWrapper>
        <Grid container display="flex" justifyContent="center" alignItems="center" spacing={2}>
          {props.menu.map((menu, index) => (
            <React.Fragment key={index}>
              <Grid item marginTop="1rem" marginLeft="2rem" sm={12}>
                <Typography ref={refs[index]} component="span" className="category">
                  {menu.category}
                </Typography>
              </Grid>
              {menu.foodList.map((food, idx) =>
                idx % 2 === 0 ? (
                  <Grid item align="right" sm={10} md={10} lg={5} key={idx}>
                    <MenuCard
                      key={idx}
                      title={food.title}
                      desc={food.desc}
                      ingredients={food.ingredients}
                      url={food.url}
                      price={food.price}
                      handleCardClick={handleCardClick}
                    />
                  </Grid>
                ) : (
                  <Grid item align="left" sm={10} md={10} lg={5} key={idx}>
                    <MenuCard
                      key={idx}
                      title={food.title}
                      desc={food.desc}
                      ingredients={food.ingredients}
                      url={food.url}
                      price={food.price}
                      handleCardClick={handleCardClick}
                    />
                  </Grid>
                ),
              )}
            </React.Fragment>
          ))}
        </Grid>
      </StyledMenuWrapper>
    </>
  );
}
