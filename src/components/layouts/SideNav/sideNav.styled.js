import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

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

const StyledButton = styled(Button)`
  padding-right: 2rem;
  margin-top: 1rem;
  a {
    padding-left:0.5rem;
    text-decoration: none;
    text-align: left;
    color: #212121;
    width: 100%;
  }
`;

export { StyledButton, StyledSideNavContainer, StyledSideNavHeader, StyledSideNavMain };

