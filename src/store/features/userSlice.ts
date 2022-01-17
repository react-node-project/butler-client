import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from '../../type/user.type';

const initialState: UserInfo & { token: string } = {
  mobile: '',
  lastName: '',
  firstName: '',
  callingCode: '',
  email: '',
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = { ...action.payload };
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
