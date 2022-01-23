import React from 'react';
import {
  Link,
  Divider,
  Drawer,
  FormGroup,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { PATH_USER_SIGNIN, PATH_HISTORY, PATH_ACCOUNT } from '../../../constants/PathConstants';
import { StyledSideNavContainer, StyledSideNavHeader, StyledSideNavMain, StyledButton } from './sideNav.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Country, Language, setCountry, setLanguage } from '../../../store/features/configSlice';
import { RootState } from '../../../store';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LoginIcon from '@mui/icons-material/Login';

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
          <div>
            <StyledButton startIcon={<PersonOutlineIcon />} fullWidth size="large">
              <Link to={PATH_ACCOUNT}>Account</Link>
            </StyledButton>

            <StyledButton startIcon={<ReceiptLongIcon />} fullWidth size="large" onClick={hideSideNav}>
              <Link to={PATH_HISTORY}>Order history</Link>
            </StyledButton>

            <StyledButton startIcon={<LoginIcon />}  fullWidth size="large" onClick={hideSideNav}>
              <Link to={PATH_USER_SIGNIN}>Sign up or log in</Link>
            </StyledButton>
          </div>

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
