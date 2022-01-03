import { Box } from '@mui/system';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { StyledButton, StyledText, StyledThumb } from './RestaurantsCard.styled';
import { StyledLayout } from '../../pages/restaurants/RestaurantsPage.styled';

export type RestaurantsCardProps = {
  imageUrl: string;
  title: string;
  review?: {
    reviewText: string;
    reviewCount: number;
  };
  descriptions: string[];
  distanceText: string;
  isOpen?: boolean;
};

const RestaurantsCard = (props: RestaurantsCardProps) => {
  const { imageUrl, title, review, descriptions, distanceText, isOpen = true } = props;
  const descrition = descriptions.join('· ');
  return (
    <StyledLayout className={'card_item'}>
      <StyledButton component="button">
        <StyledThumb className="thumb" url={imageUrl}>
          {!isOpen && <span>Back soon</span>}
        </StyledThumb>
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
            <Box component="span"> {descrition}</Box>
          </Box>
          <Box className="distance">{distanceText}</Box>
        </StyledText>
      </StyledButton>
    </StyledLayout>
  );
};

export default RestaurantsCard;
