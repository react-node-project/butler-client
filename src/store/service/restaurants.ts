import { LeftNavModalProps } from '@components/restaurants/LeftNavModal';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MOCK_API_URL } from '../../constants/EnvContant';

type GetRestaurantsProps = {
  categories: {
    title: string;
    list: string[];
  };
  restaurants: {
    imageUrl: string;
    title: string;
    descriptions: string[];
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
    getRestaurants: build.query<GetRestaurantsProps, LeftNavModalProps['filter']>({
      query: (filter) => ({
        url: `/restauranrs/${filter}`,
        method: 'get',
      }),
    }),
  }),
});

export const { useGetRestaurantsQuery } = restaurantsAPI;

export type { GetRestaurantsProps };
