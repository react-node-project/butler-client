import React from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button, Link, Paper, Grid, Typography, Container } from '@mui/material';
import { useForm } from 'react-hook-form';
import { PATH_USER_SIGNUP } from '../../constants/PathConstants';
import Glogin from './Glogin';
// import { ReactComponent as deliveryImage } from '../../asset/img/ontheway.svg';
import OnTheWay from './../../asset/img/ontheway';
import { styled } from '@mui/styles';

const SignIn = (props) => {
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm();
  //   const onSubmit = (data) => {
  //     console.log(data);
  //   };
  const handleFlip = () => {
    props.handleFlip();
  };
  return (
    <StyledContainer maxWidth="xs">
      <Paper sx={{ px: 5, py: 8 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Typography variant="h5">Sign In</Typography>
            <OnTheWay />
          </Grid>

          {/* 아래는 formcontrol */}
          {/* <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate> */}
          <Grid item>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Enter email"
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
              label="Enter password"
              type="password"
              id="password"
              autoComplete="current-password"
              helperText={errors.password?.message}
              {...register('password', { required: { value: true, message: '필수입력사항입니다.' } })}
              error={Boolean(errors.password)}
            />
          </Grid>
          {/* Login buttons */}
          <Grid item>
            <Button sx={{ px: 6 }} type="submit" variant="contained" size="large">
              Sign In
            </Button>
          </Grid>
          <Grid item>
            <Glogin />
          </Grid>
          {/* </Box>  */}
          <Grid item>
            <Box pt={2}>
              <Link href="#" variant="body2">
                Reset Password
              </Link>
            </Box>
            <Link component="button" onClick={handleFlip} variant="body2">
              {'Not registered yet? Sign up'}
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </StyledContainer>
  );
};

export default SignIn;

const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: 20,
  marginTop: '2rem',
});
