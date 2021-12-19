import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';

export default function MenuItem() {
  return (
    <Card sx={{ display: 'flex', maxWidth: '450px', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Food Name
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Food Description
          </Typography>
        </CardContent>
      </Box>
      <FastfoodIcon sx={{ width: '151' }} />
      {/* <CardMedia src={burgerImg} component="img" sx={{ width: 151 }} alt="food image" /> */}
    </Card>
  );
}
