import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, ButtonBase } from '@mui/material';
import { StyledText } from './menuItem.styled';

export default function MenuItemCard(props) {
  return (
    <ButtonBase
      onClick={(event) => {
        console.log('hi');
      }}
    >
      <Card sx={{ display: 'flex', maxWidth: '650px', maxHeight: '180px' }}>
        <Box>
          <StyledText>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="span" className="food_name">
                {props.title}
              </Typography>
              <Typography component="span" className="food_description">
                {props.desc}
              </Typography>
              <Typography component="span" className="price">
                {props.price}
              </Typography>
            </CardContent>
          </StyledText>
        </Box>
        <CardMedia component="img" sx={{ width: '122.5', height: '122.5', p: '2rem' }} image={props.url} />
      </Card>
    </ButtonBase>
  );
}
