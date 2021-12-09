import React from 'react';
import { Button, Divider, Drawer, FormControl, IconButton, NativeSelect } from '@mui/material';
import Box from '@mui/material/Box';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link } from 'react-router-dom';
import { PATH_USER_SIGNIN } from '../../../constants/PathConstants';

export const SideNav = ({ isShowSideNav, hideSideNav }) => {
  const list = () => (
    <>
      <Box sx={{ width: 350 }} role="presentation">
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <img src="" alt="" />
          <span className="title">Butler</span>
          <IconButton onClick={hideSideNav}>
            <CloseOutlinedIcon />
          </IconButton>
        </Box>
        <Divider />
        <Button sx={{ width: '80%' }} size="" variant="contained" onClick={hideSideNav}>
          <Link to={PATH_USER_SIGNIN}>Sign up or log in</Link>
        </Button>
        <FormControl fullWidth>
          <NativeSelect defaultValue="EN">
            <option value="EN">English</option>
            <option value="KO">한 국 어</option>
          </NativeSelect>
          <NativeSelect defaultValue="GBR">
            <option value="GBR">United Kingdom</option>
            <option value="KOR">대한 민국</option>
          </NativeSelect>
        </FormControl>
      </Box>
    </>
  );

  return (
    <Drawer anchor="right" open={isShowSideNav} onClose={hideSideNav}>
      {list()}
    </Drawer>
  );
};
