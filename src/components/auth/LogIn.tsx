import React from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button, Grid, Link, Paper, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { StyledContainer } from '../../styles/element.styled';
import GoogleLogin from './GoogleLogin';
import OnTheWay from '../../asset/img/ontheway';
import KaKaoLogin from './KaKaoLogin';
import { useLoginMutation } from '@store/service/auth.api';
import './custom.css';

interface Props {
  handleFlip: () => {};
}

const LogIn = ({ handleFlip }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [login] = useLoginMutation();

  const onSubmit = async ({ email, password }: { email: string; password: string }) => {
    try {
      await login({ email, password }).unwrap();
    } catch (e) {}
  };

  return (
    <StyledContainer maxWidth="xs">
      <Paper sx={{ px: 5, py: 8 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Typography variant="h5">Log In</Typography>
            <OnTheWay />
          </Grid>

          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Grid item>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email-signup"
                label="Enter email"
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
                label="Enter password"
                type="password"
                id="password-signup"
                autoComplete="current-password"
                helperText={errors.password?.message}
                {...register('password', { required: { value: true, message: '필수입력사항입니다.' } })}
                error={Boolean(errors.password)}
              />
            </Grid>
            {/* Login buttons */}
            <Grid item>
              <Button fullWidth sx={{ width: '80%' }} type="submit" variant="contained" size="large">
                Log In
              </Button>
            </Grid>
            <Grid item sx={{ marginTop: '0.5rem' }}>
              <GoogleLogin />
            </Grid>
            <Grid item>
              <KaKaoLogin />
            </Grid>
          </Box>
          <Grid item>
            <Box pt={2}>
              <Link href="#" variant="body2">
                Reset Password
              </Link>
            </Box>
            <Link component="button" onClick={handleFlip} variant="body2">
              Not registered yet? Sign up
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </StyledContainer>
  );
};

export default LogIn;
