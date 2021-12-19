import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const StyledSideNavContainer = styled(Box)`
  height: 100%;
  width: 350px;
  display: flex;
  flex-direction: column;
`;

const StyledSideNavHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const StyledSideNavMain = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 90%;
  justify-content: space-between;

  .sidenav-selected-buttons {
  }
`;

export { StyledSideNavContainer, StyledSideNavHeader, StyledSideNavMain };
