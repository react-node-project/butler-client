import { THEMEMENU } from './data';

import React from 'react';
import { Grid, Typography, ImageListItem, ImageList, ImageListItemBar } from '@mui/material';

export default function ThemeMenu() {
  return (
    <div>
      {/* fontFamily theme 적용 안됨 */}
      <Typography align="left" variant="h5" sx={{ fontFamily: "'Readex Pro', 'sans-serif'" }}>
        What's on the menu?
      </Typography>
      <ImageList
      // sx={{ width: 500, height: 450 }}
      >
        <Grid container sx={{ flexGrow: 1 }} spacing={3}>
          {THEMEMENU.map((item) => (
            <Grid item xs={4} sm={6} md={6}>
              <ImageListItem key={item.url}>
                <img
                  style={{ height: 120 }}
                  src={`${item.url}?w=128&fit=crop&auto=format`}
                  // srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar title={item.desc} subtitle={<span>view more {item.title}</span>} position="below" />
              </ImageListItem>
            </Grid>
          ))}
        </Grid>
      </ImageList>
    </div>
  );
}
