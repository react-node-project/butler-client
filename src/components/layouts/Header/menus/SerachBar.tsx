import { StyledIconWrapperBox, StyledInputBase, StyledSearchBox } from '@components/layouts/Header/header.styled';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  let location = useLocation();

  useEffect(() => {}, [location]);

  return (
    <StyledSearchBox>
      <StyledIconWrapperBox>
        <SearchIcon />
      </StyledIconWrapperBox>
      <StyledInputBase placeholder="Search for a restaurant" inputProps={{ 'aria-label': 'search' }} />
    </StyledSearchBox>
  );
};

export default SearchBar;
