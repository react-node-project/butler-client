import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/styles';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { PATH_USER_SIGNUP } from '../../constants/PathConstants';
import Container from '@mui/material/Container';

export default function SignIn(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <SignInWrap maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <VpnKeyIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="이메일"
            name="email"
            autoComplete="email"
            autoFocus
            helperText={errors.email?.message}
            {...register('email', {
              required: { value: true, message: '필수입력사항입니다.' },
              pattern: { value: /^\S+@\S+$/i, message: '올바른 이메일 형식이 아닙니다.' },
            })}
            error={Boolean(errors.email)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
            helperText={errors.password?.message}
            {...register('password', { required: { value: true, message: '필수입력사항입니다.' } })}
            error={Boolean(errors.password)}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            로그인
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                비밀번호 재설정
              </Link>
            </Grid>
            <Grid item>
              <Link href={PATH_USER_SIGNUP} variant="body2">
                {'아직 계정이 없으신가요? 계정 만들기'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </SignInWrap>
  );
}

const SignInWrap = styled(Container)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});
