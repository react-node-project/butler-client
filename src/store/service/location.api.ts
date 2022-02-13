import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constants/EnvContant';

type SendLocationProps = { location: { lat: number; lng: number }; address: string };

type InactiveLocationProps = { location: { lat: number; lng: number }; email: string };

export const locationAPI = createApi({
  reducerPath: 'locationAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (build) => ({
    sendLocation: build.mutation({
      query: ({ location, address }: SendLocationProps) => ({
        url: `/getstores`,
        method: 'get',
        body: {
          location,
          address,
        },
      }),
    }),
    sendInactiveLocation: build.mutation({
      query: ({ email, location }: InactiveLocationProps) => ({
        url: `/location/inactive`,
        method: 'post',
        body: {
          email,
          location,
        },
      }),
    }),
  }),
});

export const { useSendLocationMutation, useSendInactiveLocationMutation } = locationAPI;

export type { SendLocationProps };
