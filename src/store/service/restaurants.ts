import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MOCK_API_URL } from '../../constants/EnvContant';

type GetRestaurantsProps = {
  categoryList: {
    title: string;
    list: string[];
  };
};

export const restaurantsAPI = createApi({
  reducerPath: 'restaurantsApi',
  baseQuery: fetchBaseQuery({ baseUrl: MOCK_API_URL }),
  endpoints: (build) => ({
    getRestaurants: build.query({
      query: () => ({
        url: `/restauranrs`,
        method: 'get',
      }),
    }),
  }),
});

export const { useGetRestaurantsQuery } = restaurantsAPI;

export type { GetRestaurantsProps };
