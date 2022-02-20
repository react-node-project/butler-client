import React from 'react';
import { THEMEMENU } from './data';
import { StyledDiv } from './landing.styled';
import { Grid, Typography, ImageListItem, ImageList, ImageListItemBar } from '@mui/material';

export default function ThemeMenu() {
  return (
    <>
      <Typography mt={2} data-testid="header" align="left" variant="h5">
        What's on the menu?
      </Typography>

      <ImageList>
        <Grid container spacing={3}>
          {THEMEMENU.map((item) => (
            <Grid key={item.title} item xs={12} sm={12} md={6}>
              <StyledDiv>
                <ImageListItem key={item.url}>
                  <img
                    style={{ height: 140 }}
                    src={`${item.url}?w=168&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <div className="title">
                    <Typography variant="h5" align="center">
                      {item.title}
                    </Typography>
                  </div>
                  <ImageListItemBar
                    title={item.desc}
                    subtitle={
                      <Typography align="left" variant="subtitle2">
                        view more {item.title}
                      </Typography>
                    }
                    position="below"
                  />
                </ImageListItem>
              </StyledDiv>
            </Grid>
          ))}
        </Grid>
      </ImageList>
    </>
  );
}
