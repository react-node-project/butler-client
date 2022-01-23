import styled from 'styled-components';
import { Container, Grid } from '@mui/material';

export const StyledContainer = styled(Container)`
  margin: 1rem;
  max-width: 645px;
  padding: 1rem;
  display: flex;
  width: ${({ width }) => width || '100%'};
  flex-direction: column;
  justify-content: center;
`;
export const StyledDiv = styled.div`
  margin: 1rem;
  flex: ${({ flex }) => flex || 1};
  padding: 1rem;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '60vh'};
  background-color: ${({ bg }) => bg || '#fff'}; ;
`;

export const StyledGrid = styled(Grid)`
  height: ${({ height }) => height || '60vh'};
  background-color: ${({ bg }) => bg || '#eee'};
  text-align: center;
  h2 {
    padding-top: 1rem;
  }
`;

export const StyledDivWrapper = styled.div`
margin:0,
  flex: ${({ flex }) => flex || 1};
  padding: 1rem;
  height: ${({ height }) => height || '100vh'};
  background-color: ${({ bg }) => bg || '#eee'}; ;
`;
