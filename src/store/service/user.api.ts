import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MOCK_API_URL } from '../../constants/EnvContant';
import { SignUpRequest, SignUpResponse, UserInfo } from '../../type/user.type';
import { RootState } from '@store/index';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${MOCK_API_URL}/users`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user;
      headers.set('cors-free-key', '8ElvFN0JnirIOD4F');

      if (token) {
        headers.set('Authorization', `${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    getUser: build.query<UserInfo, null>({
      query: () => '/',
    }),
    signUp: build.mutation<SignUpResponse, SignUpRequest>({
      query: (body) => ({
        url: '/signup',
        method: 'post',
        body,
      }),
    }),
    updateUser: build.mutation<UserInfo, Partial<UserInfo>>({
      query(body) {
        return {
          body,
          url: '/',
          method: 'patch',
        };
      },
    }),
  }),
});

export const { useSignUpMutation, useGetUserQuery, useUpdateUserMutation } = userAPI;
