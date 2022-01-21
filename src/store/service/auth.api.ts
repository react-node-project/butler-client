import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { API_URL } from '../../constants/EnvContant';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    // baseUrl: `${API_URL}/auth`,
  }),
  endpoints: (build) => ({
    login: build.mutation({
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
