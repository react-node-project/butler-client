import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MOCK_API_URL } from '../../constants/EnvContant';
import { LoginRequest, LoginResponse } from '../../type/auth.type';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${MOCK_API_URL}/auth`,
  }),
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginRequest>({
      query: ({ email, password }: { password: string; email: string }) => ({
        url: '/login',
        headers: { 'cors-free-key': '8ElvFN0JnirIOD4F' },
        method: 'post',
        body: { email, password },
      }),
    }),
    logout: build.query({
      query: () => '/logout',
    }),
    extendAuth: build.query({
      query: () => '/refresh',
    }),
  }),
});

export const { useLoginMutation, useLogoutQuery, useExtendAuthQuery } = authAPI;
