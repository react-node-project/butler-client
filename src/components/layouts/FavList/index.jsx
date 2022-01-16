import React from 'react';
import { Divider, Drawer, IconButton, Typography, Box } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { StyledSideNavContainer, StyledSideNavHeader, StyledBox } from './favlist.styled';
import { useDispatch } from 'react-redux';
import FavShopCard from './FavCard';

// interface Props {
//   isShowSideNav: boolean;
//   hideSideNav(): void;
// }

const FavList = ({ isShowSideNav, hideSideNav }) => {
  const dispatch = useDispatch();

  const list = () => (
    <StyledSideNavContainer role="presentation">
      <StyledSideNavHeader>
        <Typography variant="h6" color="text.primary">
          Favourites
        </Typography>
        <IconButton onClick={hideSideNav}>
          <CloseOutlinedIcon color="primary" />
        </IconButton>
      </StyledSideNavHeader>
      <Divider />
      <StyledBox>
        <Typography gutterBottom color="text.primary">
          Recently Added
        </Typography>
        {/* LIST */}
        <FavShopCard />
      </StyledBox>
    </StyledSideNavContainer>
  );

  return (
    <Drawer anchor="right" open={isShowSideNav} onClose={hideSideNav}>
      {list()}
    </Drawer>
  );
};

export default FavList;
