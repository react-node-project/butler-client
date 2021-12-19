import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MOCK_API_URL } from '../../constants/EnvContant';

type SendLocationProps = { location: { lat: number; lng: number }; address: string };

export const locationAPI = createApi({
  reducerPath: 'addressApi',
  baseQuery: fetchBaseQuery({
    baseUrl: MOCK_API_URL,
  }),
  endpoints: (build) => ({
    sendLocation: build.mutation({
      query: ({ location, address }: SendLocationProps) => ({
        url: `/location`,
        method: 'post',
        body: {
          location,
          address,
        },
      }),
    }),
  }),
});

export const { useSendLocationMutation } = locationAPI;

export type { SendLocationProps };
