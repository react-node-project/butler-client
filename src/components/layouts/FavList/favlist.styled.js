import { styled } from '@mui/material/styles';
import { Box, Chip, Paper } from '@mui/material';

export const StyledSideNavContainer = styled(Box)`
  height: 100%;
  width: 350px;
  display: flex;
  flex-direction: column;
`;

export const StyledSideNavHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const StyledSideNavMain = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 90%;
  justify-content: space-between;
  .sidenav-selected-buttons {
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 90%
border:1px solid blue,
`;

export const StyledPaper = styled(Paper)`
  maxwidth: 345;
  position: relative;
  margin-top: 5px;
  border: none;
  div: {
    height: 100;
    background: #fff;
  }
`;
export const StyledChip = styled(Chip)`
  display: block;
  position: absolute;
  top: 180px;
  right: 5px;
  padding-top: 6px;
`;
