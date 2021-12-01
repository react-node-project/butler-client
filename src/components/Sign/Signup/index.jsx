import React from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button, Link, Paper, Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StyledContainer } from '../../../styles/element.styled';
import OnTheWay from '../../../asset/img/ontheway';

const SignUp = (props) => {
  const validationSchema = yup.object().shape({
    name: yup.string().required('필수입력사항입니다'),
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
  const handleFlip = () => {
    props.handleFlip();
  };
  return (
    <StyledContainer maxWidth="xs">
      <Paper sx={{ px: 5, py: 8 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Typography variant="h5">Sign Up</Typography>
            <OnTheWay />
          </Grid>

          {/* 아래는 formcontrol */}
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="성"
                autoFocus
                {...register('name')}
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
                {...register('name')}
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

            {/* Login buttons */}
            <Grid item>
              <Button sx={{ px: 16 }} type="submit" variant="contained" size="large">
                Sign Up
              </Button>
            </Grid>
          </Box>
          <Grid item>
            <Box pt={2}>
              <Link component="button" onClick={handleFlip} variant="body2">
                Already have an account? SignIn
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </StyledContainer>
  );
};

export default SignUp;
