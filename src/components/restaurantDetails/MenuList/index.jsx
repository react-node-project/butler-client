import React, { useRef } from 'react';
import { StyledMenuWrapper, StyledOptionBar, StyledOptionItem } from './menuList.styled';
import { Grid, Typography, Stack, Divider } from '@mui/material';
import MenuCard from '../MenuCard/index';
import MenuModal from '../MenuModal/index';

export default function MenuList(props) {
  const [open, setOpen] = React.useState(false);
  const [menuName, setMenuName] = React.useState('');
  const [menuDesc, setMenuDesc] = React.useState('');
  const [menuIngri, setMenuIngri] = React.useState([]);
  const [imgUrl, setImgUrl] = React.useState('');
  const [price, setPrice] = React.useState('');
  let refs = [useRef(null), useRef(null)];

  const handleClose = () => {
    setOpen(false);
  };

  const handleCardClick = (menuName, menuDesc, menuIngri, imgUrl, price) => {
    setMenuName(menuName);
    setMenuDesc(menuDesc);
    setMenuIngri(menuIngri);
    setImgUrl(imgUrl);
    setPrice(price);
    setOpen(true);
  };
  const handleCateogryClick = (value) => {
    refs.forEach((el, index) => {
      if (el.current.textContent === value) {
        refs[index].current.scrollIntoView({ block: 'start', behaviour: 'smooth' });
      }
    });
  };
  return (
    <>
      <MenuModal
        open={open}
        menuName={menuName}
        menuDesc={menuDesc}
        menuIngri={menuIngri}
        imgUrl={imgUrl}
        menuPrice={price}
        handleClose={handleClose}
      />
      <StyledOptionBar>
        <Stack direction="row" spacing={2}>
          {props.menu.map((item, idx) => (
            <StyledOptionItem key={idx} onClick={() => handleCateogryClick(item.category)}>
              {item.category}
            </StyledOptionItem>
          ))}
        </Stack>
      </StyledOptionBar>
      <Divider />

      <StyledMenuWrapper>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          {props.menu.map((menu, index) => (
            <React.Fragment key={index}>
              <Grid item marginTop="1rem" marginLeft="2rem" sm={12}>
                <Typography ref={refs[index]} component="span" className="category">
                  {menu.category}
                </Typography>
              </Grid>
              {menu.foodList.map((food, idx) =>
                idx % 2 === 0 ? (
                  <Grid item sm={12} md={12} lg={6} key={idx}>
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
                  <Grid item sm={12} md={12} lg={6} key={idx}>
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
