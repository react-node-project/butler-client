import React from 'react';

import { Container, Box, Button, Divider, Typography } from '@mui/material';

import { StyledBox, StyledPaper } from './history.styled';
import { StyledDivWrapper } from '../../styles/sharedElement.styled';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

export default function ReceiptPage() {
  return (
    // receipt view 만 작성: 리뷰 안하셔도 됩니당
    <StyledDivWrapper>
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

          <Divider />

          <Button variant="outlined">download receipt</Button>
        </StyledPaper>
      </Container>
    </StyledDivWrapper>
  );
}
