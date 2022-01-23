import { styled } from '@mui/styles';
import { Container, Paper, Card, Box } from '@mui/material';

export const StyledBox = styled(Box)({
  textAlign: 'left',
  display: 'flex',
  padding: '1rem',
  flexDirection: 'row',
  '& div': {
    padding: '1rem 0.5rem',
    flex: 1,
  },
});

export const StyledPaper = styled(Paper)({
  margin: '1rem',
  marginTop: '3rem',
  padding: '1rem',
  display: 'flex',
  textAlign: 'center',
  height: '80%',
  flexDirection: 'column',
  '& button': {
    width: '14rem',
    margin: '2rem 0.5rem',
  },
});

export const StyledCard = styled(Card)({
  padding: '1rem',
  justifyContent: 'space-between',
  marginBottom: '0.5rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const StyledTextBox = styled(Box)({
  width: '80%',
  textAlign: 'left',
  paddingLeft: '0.5rem',
});
