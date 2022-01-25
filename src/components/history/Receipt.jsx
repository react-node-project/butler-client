import React from 'react';

import { Container, Box, Button, Divider, Typography } from '@mui/material';

import { StyledBox, StyledPaper } from './history.styled';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

export default function Receipt() {
  return (
    <Container>
      <StyledPaper>
        <Box>
          <ReceiptLongIcon size="large" />
        </Box>
        <h2>Order # 39215</h2>

        <Divider />

        <StyledBox>
          <div>
            <Typography variant="body1" gutterBottom>
              From
            </Typography>
            <Typography variant="body1" gutterBottom color="text.secondary">
              restaurant address details
            </Typography>
            <Typography variant="subtitle2" gutterBottom color="text.secondary">
              264443
            </Typography>
          </div>
          <div>
            <Typography variant="body1" gutterBottom>
              To
            </Typography>
            <Typography variant="body1" gutterBottom color="text.secondary">
              delivered address
            </Typography>

            <Typography variant="subtitle2" gutterBottom color="text.secondary">
              +44 3405 25342
            </Typography>
          </div>
        </StyledBox>

        <Divider />

        <StyledBox>
          <div>
            <Typography variant="body1" gutterBottom>
              My order
            </Typography>
            <Typography variant="subtitle2" gutterBottom color="text.secondary">
              Total
            </Typography>
          </div>
        </StyledBox>
      </StyledPaper>
    </Container>
  );
}