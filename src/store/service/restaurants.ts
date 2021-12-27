import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MOCK_API_URL } from '../../constants/EnvContant';

type GetRestaurantsProps = {
  categoryList: {
    title: string;
    list: string[];
  };
  restaruranst: {
    imageUrl: string;
    title: string;
    description: string;
    review: {
      reviewText: string;
      reviewCount: number;
    };
    distanceText: string;
  }[];
};

export const restaurantsAPI = createApi({
  reducerPath: 'restaurantsApi',
  baseQuery: fetchBaseQuery({ baseUrl: MOCK_API_URL }),
  endpoints: (build) => ({
    getCategories: build.query<GetRestaurantsProps['categoryList'], null>({
      query: () => ({
        url: `/categories`,
        method: 'get',
      }),
    }),
    getRestaurants: build.query<GetRestaurantsProps['restaruranst'], string>({
      query: (filter) => ({
        url: `/restauranrs/${filter}`,
        method: 'get',
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useGetRestaurantsQuery } = restaurantsAPI;

export type { GetRestaurantsProps };
