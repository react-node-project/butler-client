import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MOCK_API_URL } from '../../constants/EnvContant';

export const addressApi = createApi({
  reducerPath: 'addressApi',
  baseQuery: fetchBaseQuery({
    baseUrl: MOCK_API_URL,
  }),
  endpoints: (build) => ({
    sendAddress: build.mutation({
      query: ({ location, address }) => ({
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
