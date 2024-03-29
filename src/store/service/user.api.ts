import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MOCK_API_URL } from '../../constants/EnvContant';
import { SignUpRequest, SignUpResponse, UserInfo } from '../../type/user.type';
import { prepareHeaderToken } from '../../util/api.util';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${MOCK_API_URL}/users`,
    prepareHeaders: prepareHeaderToken,
  }),
  endpoints: (build) => ({
    getUser: build.query<UserInfo, null>({
      query: () => '/',
    }),
    signUp: build.mutation<SignUpResponse, SignUpRequest>({
      query: ({ email, password, name, callingCode, mobile }) => ({
        url: '/',
        method: 'post',
        body: {
          email,
          password,
          name,
          callingCode,
          mobile,
        },
      }),
    }),
    updateUser: build.mutation<UserInfo, Partial<UserInfo>>({
      query({ email, name, callingCode, mobile }) {
        return {
          body: {
            ...(email && { email }),
            ...(name && { name }),
            ...(callingCode && { callingCode }),
            ...(mobile && { mobile }),
          },
          url: '/',
          method: 'patch',
        };
      },
    }),
    verifyUser: build.mutation<any, { type: 'password'; value: string }>({
      query: ({ type, value }) => ({
        url: '/verify',
        body: {
          type,
          value,
        },
        method: 'POST',
      }),
    }),
  }),
});

export const { useSignUpMutation, useUpdateUserMutation, useVerifyUserMutation, useLazyGetUserQuery } = userAPI;
