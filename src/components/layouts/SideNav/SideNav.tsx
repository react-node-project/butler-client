import React from 'react';
import {
  Divider,
  Drawer,
  FormGroup,
  IconButton,
  InputLabel,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { PATH_ACCOUNT, PATH_HISTORY, PATH_USER_LOGIN } from '../../../constants/PathConstants';
import { StyledButton, StyledSideNavContainer, StyledSideNavHeader, StyledSideNavMain } from './sideNav.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Country, Language, setCountry, setLanguage } from '@store/features/configSlice';
import { RootState } from '@store/index';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LoginIcon from '@mui/icons-material/Login';
import { useLazyLogoutQuery } from '@store/service/auth.api';
import { userAction } from '@store/features/userSlice';

interface Props {
  isShowSideNav: boolean;
  hideSideNav(): void;
}

const SideNav = ({ isShowSideNav, hideSideNav }: Props) => {
  const dispatch = useDispatch();
  const { language, country } = useSelector((state: RootState) => state.config);
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const [logout] = useLazyLogoutQuery();

  const onChangeSelect = (e: SelectChangeEvent<string>) => {
    dispatch(
      e.target.name === 'country' ? setCountry(e.target.value as Country) : setLanguage(e.target.value as Language),
    );
  };

  const doLogout = () => {
    logout(null);
    dispatch(userAction.resetUser());
    hideSideNav();
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
            {isLoggedIn ? (
              <>
                <StyledButton startIcon={<PersonOutlineIcon />} fullWidth size="large">
                  <Link href={PATH_ACCOUNT}>Account</Link>
                </StyledButton>
                <StyledButton startIcon={<ReceiptLongIcon />} fullWidth size="large" onClick={hideSideNav}>
                  <Link href={PATH_HISTORY}>Order history</Link>
                </StyledButton>
                <StyledButton startIcon={<LogoutIcon />} fullWidth size="large" onClick={doLogout}>
                  <a>Logout</a>
                </StyledButton>
              </>
            ) : (
              <>
                <StyledButton startIcon={<LoginIcon />} fullWidth size="large" onClick={hideSideNav}>
                  <Link href={PATH_USER_LOGIN}>Sign up or log in</Link>
                </StyledButton>
              </>
            )}
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
