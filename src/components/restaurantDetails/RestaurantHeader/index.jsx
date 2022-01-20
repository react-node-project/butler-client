import React, { useState } from 'react';
import { StyledHeaderImage, StyledHeader } from './restaurantHedaer.styled';
import burgerImg from '../../../asset/img/burger.png';
import { Grid, Button, List, Typography, ListItem, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function RestaurantHeader(props) {
  const [heartClicked, setHeartClicked] = useState(false);

  const handleHeartClick = () => {
    setHeartClicked(!heartClicked);
  };
  return (
    <>
      <StyledHeader>
        <Grid container spacing={8} alignItems="center" justifyContent="center">
          <Grid item sm={6}>
            <StyledHeaderImage src={burgerImg} />
          </Grid>
          <Grid item sm={4}>
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
          <IconButton onClick={handleHeartClick}>
            {heartClicked ? (
              <FavoriteIcon style={{ fontSize: '40' }} />
            ) : (
              <FavoriteBorderIcon style={{ fontSize: '40' }} />
            )}
          </IconButton>
        </Grid>
      </StyledHeader>
    </>
  );
}
