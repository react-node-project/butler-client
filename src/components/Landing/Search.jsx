import { StyledContainer } from './../../styles/element2.styled';
import { Paper, Typography } from '@mui/material';
function Search() {
  return (
    <div id="serch">
      <StyledContainer height={'50vh'}>
        <Typography variant="h5">Your favourite takeaways delivered to your door</Typography>
        <Paper></Paper>
      </StyledContainer>
    </div>
  );
}

export default Search;
