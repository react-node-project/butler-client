import React from 'react';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { Controller, useForm } from 'react-hook-form';
import { SignUpRequest } from '../../../type/user.type';
import { phoneNumberRegex } from '../../../util/shcema';
import TextField from '@mui/material/TextField';
import { StyledRow } from '@components/auth/SignUp/signup.styled';
import { CALLING_CODES } from '../../../constants/CountryConstant';
import { theme } from '../../../styles/theme';
import { StyledGrid } from '../../../styles/sharedElement.styled';
import { useUpdateUserMutation, useVerifyUserMutation } from '@store/service/user.api';
import { userAction } from '@store/features/userSlice';

const AccountDetail = () => {
  const originUser = useSelector((state: RootState) => state.user);
  const [verifyUser] = useVerifyUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const dispatch = useDispatch();
  const {
    register,
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isDirty, dirtyFields },
  } = useForm<SignUpRequest>({
    defaultValues: {
      callingCode: originUser.callingCode,
      mobile: originUser.mobile,
      name: originUser.name,
      password: '',
    },
    mode: 'onBlur',
  });

  const saveChanges = async () => {
    try {
      const { name, password, callingCode, mobile } = getValues();
      await verifyUser({ type: 'password', value: password }).unwrap();

      const data = {
        ...(dirtyFields.name && { name }),
        ...(dirtyFields.callingCode && { callingCode }),
        ...(dirtyFields.mobile && { mobile }),
      };
      await updateUser(data).unwrap();
      dispatch(userAction.setUser(data));
      reset(data);
    } catch (e) {
      /**
       *  에러처리
       * */
    }
  };

  return (
    <StyledGrid
      height="auto"
      sx={{ m: 2, p: 2 }}
      style={{ backgroundColor: theme.palette.primary.contrastText, width: '60%' }}
    >
      <Box className="header" sx={{ m: 1, p: 1 }}>
        <Typography textAlign="start" fontSize="1.5rem">
          Account Details
        </Typography>
      </Box>
      <Divider />
      <Grid container direction="column" sx={{ justifyContent: 'center', alignItems: 'center', width: '100%', pt: 2 }}>
        <TextField
          sx={{ width: '60%' }}
          label="name"
          id="name"
          autoComplete="name"
          {...register('name', {
            required: {
              value: true,
              message: 'name is required',
            },
            minLength: {
              value: 3,
              message: 'please input Name min least 3 character',
            },
          })}
          helperText={errors.name?.message}
          error={Boolean(errors.name)}
        />
        <TextField
          margin="dense"
          value={originUser.email}
          sx={{ width: '60%' }}
          label="Email"
          disabled
          autoComplete="email"
        />
        <FormControl sx={{ width: '60%' }}>
          <StyledRow>
            <Controller
              name="callingCode"
              control={control}
              render={({ field: { name, value, onChange } }) => (
                <FormControl style={{ flex: 3 }}>
                  <InputLabel error={Boolean(errors.mobile)} id="calling-code">
                    나라 번호
                  </InputLabel>
                  <Select
                    error={Boolean(errors.mobile)}
                    labelId="calling-code"
                    name={name}
                    value={value}
                    onChange={onChange}
                  >
                    {CALLING_CODES.map(({ key, value }) => (
                      <MenuItem key={key} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                  {Boolean(errors.mobile) && <FormHelperText error={Boolean(errors.mobile)}>&nbsp; </FormHelperText>}
                </FormControl>
              )}
            />
            <TextField
              style={{ flex: 7 }}
              label="Mobile"
              type="tel"
              {...register('mobile', {
                required: {
                  value: true,
                  message: 'mobile is Required',
                },
                pattern: {
                  value: phoneNumberRegex,
                  message: 'please Input Phone Number(000-0000-0000)',
                },
              })}
              error={Boolean(errors.mobile)}
              helperText={errors.mobile?.message}
            />
          </StyledRow>
        </FormControl>
      </Grid>
      {isDirty && (
        <>
          <Divider />
          <Box
            sx={{ pt: 2 }}
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography>You must supply your current valid password</Typography>
            <TextField
              sx={{ m: 0.5 }}
              style={{ width: '60%' }}
              type="password"
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              label="Current Password"
              {...register('password', { required: { value: true, message: 'input your password' } })}
            />
            <Button onClick={handleSubmit(saveChanges)}>Save Changes</Button>
          </Box>
        </>
      )}
    </StyledGrid>
  );
};

export default AccountDetail;
