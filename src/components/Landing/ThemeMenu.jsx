import { THEMEMENU } from './data';
import { StyledDiv } from './landing.styled';
import React from 'react';
import { Grid, Typography, ImageListItem, ImageList, ImageListItemBar } from '@mui/material';

export default function ThemeMenu() {
  return (
    <>
      {/* fontFamily theme 적용 안됨 */}
      <Typography data-testid="header" align="left" variant="h4">
        What's on the menu?
      </Typography>
      <ImageList>
        <Grid container sx={{ flexGrow: 1 }} spacing={3}>
          {THEMEMENU.map((item) => (
            <Grid item xs={4} sm={6} md={6}>
              <StyledDiv>
                <ImageListItem key={item.url}>
                  <img
                    style={{ height: 120 }}
                    src={`${item.url}?w=128&fit=crop&auto=format`}
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
