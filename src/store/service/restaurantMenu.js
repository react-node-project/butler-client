import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MOCK_API_URL } from '../../constants/EnvContant';

export const menuAPI = createApi({
  reducerPath: 'restaurantMenuApi',
  baseQuery: fetchBaseQuery({ baseUrl: MOCK_API_URL }),
  endpoints: (builder) => ({
    getMenu: builder.query({
      query: () => '/restaurant_detail',
    }),
  }),
});

export const { useGetMenuQuery } = menuAPI;
