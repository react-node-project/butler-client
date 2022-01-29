import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo } from '../../type/user.type';

type UserState = UserInfo & { token: string; isLoggedIn: boolean };

const initialState: UserState = {
  mobile: '',
  name: '',
  callingCode: '',
  email: '',
  token: '',
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<UserInfo>) => {
      return (state = {
        ...state,
        ...payload,
        isLoggedIn: true,
      });
    },
    setToken: (state, { payload: token }: PayloadAction<string>) => {
      state.token = token;
    },
    resetUser: (state) => {
      return (state = initialState);
    },
  },
});

export const userAction = userSlice.actions;

export default userSlice.reducer;
