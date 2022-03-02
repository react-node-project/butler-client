import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { Typography } from '@mui/material';
import { StyledRating } from './rating.styled';

export default function Rating(props) {
  const { rating, numReviews } = props;

  const ratingTemplate = (text) => {
    return (
      <StyledRating>
        <StarIcon color="primary" />
        <Typography>
          {text} ({numReviews})
        </Typography>
      </StyledRating>
    );
  };

  if (rating >= 4.5) {
    return ratingTemplate('Execellent');
  } else if (rating >= 4.0) {
    return ratingTemplate('Very Good');
  } else {
    return ratingTemplate('Good');
  }
}
