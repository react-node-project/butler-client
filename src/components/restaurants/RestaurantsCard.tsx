import { Box } from '@mui/system';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { StyledWrap, StyledLayout, StyledText, StyledThumb } from './RestaurantsCard.styled';
import FavIcon from '@components/Icons/FavIcon';
import { useNavigate } from 'react-router-dom';
import { PATH_RESTAURANTS } from './../../constants/PathConstants';

export type RestaurantsCardProps = {
  storeNumber: string;
  imageUrl: string;
  title: string;
  review?: string;
  descriptions: string[];
  distanceText: string;
  isOpen?: boolean;
};

const RestaurantsCard = (props: RestaurantsCardProps) => {
  const { storeNumber, imageUrl, title, review, descriptions, distanceText, isOpen = true } = props;
  const descrition = descriptions.join('· ');
  const navigate = useNavigate();

  const onClickCard = () => {
    navigate(`${PATH_RESTAURANTS}/${storeNumber}`);
  };

  return (
    <StyledLayout className={'card_item'}>
      <StyledWrap onClick={onClickCard}>
        <StyledThumb className="thumb" url={imageUrl}>
          {!isOpen && <span>Back soon</span>}
          <FavIcon />
        </StyledThumb>
        <StyledText>
          <Box className="title">{title}</Box>
          <Box className="description">
            {review && (
              <>
                <Box component="span" className="review_score">
                  <StarIcon color="primary" fontSize="inherit" />
                  {review}
                </Box>
                <Box component="span"> ({review})</Box>
              </>
            )}
            <Box component="span"> {descrition}</Box>
          </Box>
          <Box className="distance">{distanceText}</Box>
        </StyledText>
      </StyledWrap>
    </StyledLayout>
  );
};

export default RestaurantsCard;
