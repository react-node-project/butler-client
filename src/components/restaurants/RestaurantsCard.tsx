import { Box } from '@mui/system';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { StyledText, StyledThumb } from './RestaurantsCard.styled';

export type RestaurantsCardProps = {
  imageUrl: string;
  title: string;
  review?: {
    reviewText: string;
    reviewCount: number;
  };
  description: string;
  distanceText: string;
};

const RestaurantsCard = (props: RestaurantsCardProps) => {
  const { imageUrl, title, review, description, distanceText } = props;
  return (
    <Box className={'card_item'}>
      <Box component="button">
        <StyledThumb className="thumb" url={imageUrl} />
        <StyledText>
          <Box className="title">{title}</Box>
          <Box className="description">
            {review && (
              <>
                <Box component="span" className="review_score">
                  <StarIcon color="primary" fontSize="inherit" />
                  {review.reviewText}
                </Box>
                <Box component="span"> ({review.reviewCount})</Box>
              </>
            )}
            <Box component="span">{description}</Box>
          </Box>
          <Box className="distance">{distanceText}</Box>
        </StyledText>
      </Box>
    </Box>
  );
};

export default RestaurantsCard;
