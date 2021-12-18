import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MOCK_API_URL } from '../../constants/EnvContant';

type SendAddressProps = { location: { lat: number; lng: number }; address: string };

export const addressApi = createApi({
  reducerPath: 'addressApi',
  baseQuery: fetchBaseQuery({
    baseUrl: MOCK_API_URL,
  }),
  endpoints: (build) => ({
    sendAddress: build.mutation({
      query: ({ location, address }: SendAddressProps) => ({
        url: `/address`,
        method: 'post',
        body: {
          location,
          address,
        },
      }),
    }),
  }),
});

export const { useSendAddressMutation } = addressApi;

export type { SendAddressProps };
