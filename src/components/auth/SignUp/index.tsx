import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Select,
  Snackbar,
  Typography
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StyledContainer } from '../../../styles/element.styled';
import OnTheWay from '../../../asset/img/ontheway';
import { useSignUpMutation } from '@store/service/user.api';
import { signUpRequestSchema } from '../../../util/shcema';
import { SignUpRequest } from '../../../type/user.type';

import { CALLING_CODES } from '../../../constants/CountryConstant';
import { StyledRow } from '@components/auth/SignUp/signup.styled';

interface Props {
  handleFlip: () => void;
}

const SignUp = ({ handleFlip }: Props) => {
  const [signUp] = useSignUpMutation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpRequest>({
    resolver: yupResolver(signUpRequestSchema),
    defaultValues: {
      callingCode: '',
    },
  });
  const [hidePassword, setHidePassword] = useState(true);
  const [serverResponse, setServerResponse] = useState<{ type: 'error' | 'success'; message: string; isShow: boolean }>(
    {
      type: 'success',
      message: '',
      isShow: false,
    },
  );

  const onSubmit = async ({
    email,
    password,
    name,
    mobile,
    callingCode,
  }: yup.InferType<typeof signUpRequestSchema>) => {
    try {
      await signUp({
        email,
        password,
        name,
        mobile,
        callingCode,
      }).unwrap();
      setServerResponse({
        type: 'success',
        isShow: true,
        message: '가입에 성공하셧습니다',
      });
      setTimeout(handleFlip, 1000);
    } catch (e) {
      setServerResponse({
        type: 'error',
        isShow: true,
        message: '서버에러입니다.',
      });
    }
  };

  return (
    <StyledContainer maxWidth="xs">
      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={serverResponse.isShow}>
        <Alert sx={{ minWidth: '30rem' }} severity={serverResponse.type}>
          {serverResponse.message}
        </Alert>
      </Snackbar>
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
                autoComplete="name"
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
                control={<Checkbox sx={{ margin: 0 }} />}
                label="비밀번호 숨기기"
              />
            </Grid>
            <Grid item xs={12} display={'flex'}>
              <StyledRow>
                <Controller
                  name="callingCode"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <FormControl style={{ flex: 3 }}>
                      <InputLabel error={Boolean(errors.callingCode)} id="calling-code">
                        나라 번호
                      </InputLabel>
                      <Select
                        error={Boolean(errors.callingCode)}
                        labelId="calling-code"
                        value={value}
                        onChange={onChange}
                      >
                        {CALLING_CODES.map(({ key, value }) => (
                          <MenuItem key={key} value={value}>
                            {value}
                          </MenuItem>
                        ))}
                      </Select>
                      <FormHelperText error={Boolean(errors.callingCode)}>{errors.callingCode?.message}</FormHelperText>
                    </FormControl>
                  )}
                />
                <TextField
                  style={{ flex: 7 }}
                  margin="none"
                  label="핸드폰 번호"
                  type="tel"
                  autoComplete="mobile"
                  {...register('mobile')}
                  error={Boolean(errors.mobile)}
                  helperText={errors.mobile?.message}
                />
              </StyledRow>
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
