import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { PATH_ROOT } from '../../constants/PathConstants';
import { StyledLink } from '../../styles/element.styled';

const NotFoundPage = () => {
  return (
    <Container
      maxWidth="sm"
      style={{
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography>죄송합니다 찾을 수 없는 페이지 입니다.</Typography>
      <Button>
        <StyledLink to={PATH_ROOT}>홈으로 가기</StyledLink>
      </Button>
    </Container>
  );
};

export default NotFoundPage;
