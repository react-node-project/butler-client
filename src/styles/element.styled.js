import { styled } from '@mui/styles';
import { Container,Paper,Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { theme } from './theme';

export const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: 20,
  marginTop: '2rem',
});

export const StyledLink = styled(Link)({
  color: (props) => (props.color ? props.color : theme.palette.primary.main),
  textDecoration: 'none',
});

export const StyledPaper = styled(Paper)({
  padding:"3rem"
})

export const StyledGridContainer = styled(Grid)({

})