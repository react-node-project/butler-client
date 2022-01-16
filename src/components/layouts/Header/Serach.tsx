import { StyledIconWrapperBox, StyledInputBase, StyledSearchBox } from '@components/layouts/Header/header.styled';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const Search = () => {
  return (
    <StyledSearchBox>
      <StyledIconWrapperBox>
        <SearchIcon />
      </StyledIconWrapperBox>
      <StyledInputBase placeholder="Search for a restaurant" inputProps={{ 'aria-label': 'search' }} />
    </StyledSearchBox>
  );
};

export default Search;
