import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

export const StyledUserGrid = styled(Grid)({
  display: 'flex',
  padding: '8px',
  borderBottom: '0.5px solid rgba(0, 0, 0, 0.12)',
  width: '100%',
  '&:hover': {
    transition: 'background-color 0.5s',
    backgroundColor: '#eee',
  },

  '.content-row': {
    flex: 8,
    paddingLeft: '15px',
    textAlign: 'start',
  },
  '.button-row': {
    flex: 2,
  },
});
