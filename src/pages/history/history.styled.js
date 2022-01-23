import { styled } from '@mui/styles';
import { Container, Paper, Grid, Box } from '@mui/material';

export const StyledBox = styled(Box)({
  textAlign: 'left',
  display: 'flex',
  padding:"1rem",
  flexDirection: 'row',
  '& div': {
    padding:"1rem 0.5rem",
    flex: 1,
  },
});

export const StyledPaper = styled(Paper)({
  margin: '1rem',
  marginTop:"3rem",
  padding: '1rem',
  display: 'flex',
  textAlign: 'center',
  height: '80%',
  flexDirection: 'column',
  '& button': {
    width: '16rem',
  },
});
