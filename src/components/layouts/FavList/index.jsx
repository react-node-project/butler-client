import React from 'react';
import { Divider, Drawer, IconButton, Typography } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { StyledSideNavContainer, StyledSideNavHeader } from './favlist.styled';
import { useDispatch } from 'react-redux';

// interface Props {
//   isShowSideNav: boolean;
//   hideSideNav(): void;
// }

const FavList = ({ isShowSideNav, hideSideNav }) => {
  const dispatch = useDispatch();

  const list = () => (
    <>
      <StyledSideNavContainer role="presentation">
        <StyledSideNavHeader>
          <Typography color="text.primary">Favourites</Typography>
          <IconButton onClick={hideSideNav}>
            <CloseOutlinedIcon />
          </IconButton>
        </StyledSideNavHeader>
        <Divider />
        <h5>Recently added</h5>
        {/* LIST 여기 */}
      </StyledSideNavContainer>
    </>
  );

  return (
    <Drawer anchor="right" open={isShowSideNav} onClose={hideSideNav}>
      {list()}
    </Drawer>
  );
};

export default FavList;
