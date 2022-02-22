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
  reviewCount?: string;
  notify: string;
  distanceText: string;
  districtCode: string;
  isOpen?: boolean;
};

const RestaurantsCard = (props: RestaurantsCardProps) => {
  const { storeNumber, imageUrl, title, reviewCount, notify, distanceText, districtCode, isOpen = true } = props;
  // const descrition = descriptions.join('· ');
  const navigate = useNavigate();

  const onClickCard = () => {
    navigate(`${PATH_RESTAURANTS}/${storeNumber}`);
  };

  console.log('notify', notify);

  return (
    <StyledLayout className={'card_item'}>
      <StyledWrap onClick={onClickCard}>
        <StyledThumb className="thumb" url={imageUrl}>
          {!isOpen && <span>Back soon</span>}
        </StyledThumb>
        <StyledText>
          <Box className="title">{title}</Box>
          <Box className="description">
            <Box component="span" className="review_score">
              <StarIcon color="primary" fontSize="inherit" />
              very good
              <Box component="span"> ({reviewCount})</Box>
            </Box>
            {/* <Box component="span"> {notify}</Box> */}
          </Box>
          <Box className="distance">{`${distanceText} ${districtCode}`}</Box>
        </StyledText>
      </StyledWrap>
      <FavIcon />
    </StyledLayout>
  );
};

export default RestaurantsCard;
