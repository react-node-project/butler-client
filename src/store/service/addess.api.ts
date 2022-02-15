import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MOCK_API_URL } from '../../constants/EnvContant';
import { GetAddressResponse } from '../../type/address.type';
import { prepareHeaderToken } from '../../util/api.util';

export const addressAPI = createApi({
  reducerPath: 'addressAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: MOCK_API_URL + '/address',
    prepareHeaders: prepareHeaderToken,
  }),
  endpoints: (build) => ({
    getAddress: build.query<GetAddressResponse, void>({
      query: () => '/',
    }),
    deleteAddress: build.mutation<any, number>({
      query: (id) => ({
        url: `/${id}`,
        method: 'delete',
      }),
    }),
  }),
});

export const { useGetAddressQuery, useDeleteAddressMutation } = addressAPI;
