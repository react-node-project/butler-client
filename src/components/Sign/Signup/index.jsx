import React from 'react';
import { Avatar, Button, TextField, Link, Grid, Box, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm } from 'react-hook-form';
import { PATH_USER_SIGNIN } from '../../../constants/PathConstants';
import { StyledContainer } from '../../../styles/element.styled';
import { StyledBox } from './Signup.styled';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log('data', data);
  };

  return (
    <StyledContainer maxWidth="sm">
      <StyledBox>
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          회원가입
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="성"
                autoFocus
                {...register('firstName', {
                  required: { value: true, message: '필수입력사항입니다.' },
                })}
                helperText={errors.firstName?.message}
                error={Boolean(errors.firstName)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="이름"
                name="lastName"
                autoComplete="family-name"
                {...register('lastName', {
                  required: { value: true, message: '필수입력사항입니다.' },
                })}
                helperText={errors.lastName?.message}
                error={Boolean(errors.lastName)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="이메일"
                name="email"
                autoComplete="email"
                {...register('email', {
                  required: { value: true, message: '필수입력사항입니다.' },
                  pattern: { value: /^\S+@\S+$/i, message: '올바른 이메일 형식이 아닙니다.' },
                })}
                helperText={errors.email?.message}
                error={Boolean(errors.email)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="비밀번호"
                type="password"
                id="password"
                autoComplete="new-password"
                {...register('password', { required: { value: true, message: '필수입력사항입니다.' } })}
                helperText={errors.password?.message}
                error={Boolean(errors.password)}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            회원가입
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href={PATH_USER_SIGNIN} variant="body2">
                이미 계정이 있으십니까? 로그인
              </Link>
            </Grid>
          </Grid>
        </Box>
      </StyledBox>
    </StyledContainer>
  );
}
