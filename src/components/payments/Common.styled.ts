import { styled } from '@mui/styles';
import { Box, Theme } from '@mui/material';

export const StyledBorderBox = styled(Box)((props: { theme: Theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  border: '1px solid #ccc',
  color: '#bbb',
  '& input:checked + .MuiFormControlLabel-label': {
    color: props.theme.palette.primary.main,
  },
}));
