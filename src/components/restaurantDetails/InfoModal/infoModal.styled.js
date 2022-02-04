import { Grid, Divider } from '@mui/material';
import styled from 'styled-components';

export const StyledGrid = styled(Grid)((props) => ({
  maxHeight: 'calc(100% - 64px)',
  maxWidth: '560px',
  margin: '0 auto',
}));

export const StyledLayoutHeader = styled(Grid)((props) => ({
  marginBottom: '16px',
  fontSize: '20.8px',
}));

export const StyledLayout = styled(Grid)((props) => ({
  paddingTop: '24px',
  paddingBottom: '10px',
}));

export const StyledLayoutList = styled(Grid)({
  backgroundColor: 'white',
  fontSize: '15px',
});

export const StyledDivider = styled(Divider)({
  width: '100%',
});

export const StyledIconContent = styled(Grid)((props) => ({
  display: 'flex',
  margin: '10px 10px',
  verticalAlign: 'middle',

  '& .content-icon': {
    paddingRight: '8px',
  },
}));
