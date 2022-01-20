import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button, Checkbox, FormControlLabel, Grid, Link, Paper, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StyledContainer } from '../../../styles/element.styled';
import OnTheWay from '../../../asset/img/ontheway';

interface Props {
  handleFlip: () => {};
}

const validationSchema = yup.object().shape({
  name: yup.string().required('필수입력사항입니다'),
  email: yup.string().email('올바른 이메일 형식이 아닙니다').required('필수입력사항입니다'),
  password: yup
    .string()
    .required('필수입력사항입니다')
    .min(5, '비밀번호는 5자리 이상이어야 합니다')
    .max(20, '비밀번호는 20자리 이하이어야합니다')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s:]).*$/, {
      message: '비밀번호는 최소한 대문자 한개 (A-Z), 소문자 한개 (a-z), 숫자 (0-9) 그리고 특수문자를 포함하여야 합니다',
    }),
});
type dataSchema = yup.InferType<typeof validationSchema>;

const SignUp = ({ handleFlip }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const [hidePassword, setHidePassword] = useState(true);

  const onSubmit = (data: dataSchema) => {};

  return (
    <StyledContainer maxWidth="xs">
      <Paper sx={{ px: 5, py: 8 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Typography variant="h5">Sign Up</Typography>
            <OnTheWay />
          </Grid>

          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="이름"
                autoComplete="family-name"
                {...register('name')}
                helperText={errors.name?.message}
                error={Boolean(errors.name)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email-sign-in"
                label="이메일"
                autoComplete="email"
                {...register('email')}
                helperText={errors.email?.message}
                error={Boolean(errors.email)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="비밀번호"
                type={hidePassword ? 'password' : 'text'}
                id="password"
                autoComplete="new-password"
                {...register('password')}
                helperText={errors.password?.message}
                error={Boolean(errors.password)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                checked={hidePassword}
                onChange={() => setHidePassword(!hidePassword)}
                control={<Checkbox />}
                label="비밀번호 숨기기"
              />
            </Grid>

            <Grid item xs={12}>
              <Button sx={{ px: 16 }} type="submit" variant="contained" size="large">
                Sign Up
              </Button>
            </Grid>
          </Box>
          <Grid item xs={12}>
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
