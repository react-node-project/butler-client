import { Box } from '@mui/material';
import styled from 'styled-components';

export const StyledThumb = styled(Box)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: '50%',
  maxWidth: '250px',
}));
