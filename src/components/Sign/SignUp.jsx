import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';
import { PATH_USER_SIGNIN } from '../../constants/PathConstants';
import { styled } from '@mui/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function SignUp() {
  const validationSchema = yup.object().shape({
    firstName: yup.string().required('필수입력사항입니다'),
    lastName: yup.string().required('필수입력사항입니다'),
    email: yup.string().email('올바른 이메일 형식이 아닙니다').required('필수입력사항입니다'),
    password: yup
      .string()
      .required('필수입력사항입니다')
      .min(5, '비밀번호는 5자리 이상이어야 합니다')
      .max(20, '비밀번호는 20자리 이하이어야합니다')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s:]).*$/, {
        message:
          '비밀번호는 최소한 대문자 한개 (A-Z), 소문자 한개 (a-z), 숫자 (0-9) 그리고 특수문자를 포함하여야 합니다',
      }),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    console.log('data', data);
  };
  return (
    <SignUpWrap maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px',
        }}
      >
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
                {...register('firstName')}
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
                {...register('lastName')}
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
                {...register('email')}
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
                {...register('password')}
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
      </Box>
    </SignUpWrap>
  );
}

const SignUpWrap = styled(Container)({
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
