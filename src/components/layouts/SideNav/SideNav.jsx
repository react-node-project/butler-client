import React, { useState } from 'react';
import {
  Button,
  Divider,
  Drawer,
  FormGroup,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link } from 'react-router-dom';
import { PATH_USER_SIGNIN } from '../../../constants/PathConstants';
import { SideNavContainer, SideNavHeader, SideNavMain } from './styled.sideNav';

export default ({ isShowSideNav, hideSideNav }) => {
  const [selected, setSelected] = useState({
    language: 'EN',
    country: 'GBR',
  });

  const onChangeSelect = (e) => setSelected((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  const list = () => (
    <>
      <SideNavContainer role="presentation">
        <SideNavHeader>
          <Typography color="text.primary">Butler</Typography>
          <IconButton onClick={hideSideNav}>
            <CloseOutlinedIcon />
          </IconButton>
        </SideNavHeader>
        <Divider />
        <SideNavMain>
          <Button sx={{ width: '100%' }} size="large" variant="contained" onClick={hideSideNav}>
            <Link to={PATH_USER_SIGNIN}>Sign up or log in</Link>
          </Button>
          <FormGroup className="sidenav-selected-buttons">
            <InputLabel id="select-language-label">Language</InputLabel>
            <Select
              labelId="select-language-label"
              id="language-select"
              name="language"
              value={selected.language}
              label="Age"
              onChange={onChangeSelect}
            >
              <MenuItem value="EN">English</MenuItem>
              <MenuItem value="KO">한 국 어</MenuItem>
            </Select>

            <InputLabel id="select-language-label">Country</InputLabel>
            <Select
              labelId="select-country-label"
              id="language-country"
              name="country"
              value={selected.country}
              label="country"
              onChange={onChangeSelect}
            >
              <MenuItem value="GBR">United Kingdom</MenuItem>
              <MenuItem value="AUS">Australia</MenuItem>
              <MenuItem value="KOR">대한 민국</MenuItem>
            </Select>
          </FormGroup>
        </SideNavMain>
      </SideNavContainer>
    </>
  );

  return (
    <Drawer anchor="right" open={isShowSideNav} onClose={hideSideNav}>
      {list()}
    </Drawer>
  );
};
