import { Container, Box } from '@mui/material';
import { styled } from '@mui/styles';

export const StyledBox = styled(Box)();

// export const StyledButton = styled(Button)({
//   background: `${({ bg }) => bg || 'transparent'}`,
//   fontWeight: 600,
// });

export const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: 20,
  marginTop: '2rem',
});
