import React from 'react';
import {
  Button,
  Divider,
  Drawer,
  FormGroup,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { PATH_USER_SIGNIN } from '../../../constants/PathConstants';
import { StyledSideNavContainer, StyledSideNavHeader, StyledSideNavMain } from './sideNav.styled';
import { StyledLink } from '../../../styles/element.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Country, Language, setCountry, setLanguage } from '../../../store/features/configSlice';
import { RootState } from '../../../store';

interface Props {
  isShowSideNav: boolean;
  hideSideNav(): void;
}

const SideNav = ({ isShowSideNav, hideSideNav }: Props) => {
  const dispatch = useDispatch();
  const { language, country } = useSelector((state: RootState) => state.config);

  const onChangeSelect = (e: SelectChangeEvent<string>) => {
    dispatch(
      e.target.name === 'country' ? setCountry(e.target.value as Country) : setLanguage(e.target.value as Language),
    );
  };

  const list = () => (
    <>
      <StyledSideNavContainer role="presentation">
        <StyledSideNavHeader>
          <Typography color="text.primary">Butler</Typography>
          <IconButton onClick={hideSideNav}>
            <CloseOutlinedIcon />
          </IconButton>
        </StyledSideNavHeader>
        <Divider />
        <StyledSideNavMain>
          <Button sx={{ width: '100%' }} size="large" variant="contained" onClick={hideSideNav}>
            <StyledLink color="black" style={{ textDecoration: 'none', color: 'black' }} to={PATH_USER_SIGNIN}>
              Sign up or log in
            </StyledLink>
          </Button>
          <FormGroup className="sidenav-selected-buttons">
            <InputLabel id="select-language-label">Language</InputLabel>
            <Select<string>
              labelId="select-language-label"
              id="language-select"
              name="language"
              value={language}
              label="Age"
              onChange={onChangeSelect}
            >
              <MenuItem value="EN">English</MenuItem>
              <MenuItem value="KO">한 국 어</MenuItem>
            </Select>

            <InputLabel id="select-language-label">Country</InputLabel>
            <Select<string>
              labelId="select-country-label"
              id="language-country"
              name="country"
              value={country}
              label="country"
              onChange={onChangeSelect}
            >
              <MenuItem value="GBR">United Kingdom</MenuItem>
              <MenuItem value="AUS">Australia</MenuItem>
              <MenuItem value="KOR">대한 민국</MenuItem>
            </Select>
          </FormGroup>
        </StyledSideNavMain>
      </StyledSideNavContainer>
    </>
  );

  return (
    <Drawer anchor="right" open={isShowSideNav} onClose={hideSideNav}>
      {list()}
    </Drawer>
  );
};

export default SideNav;
