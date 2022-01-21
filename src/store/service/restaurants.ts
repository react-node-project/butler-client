import { LeftNavModalProps } from '@components/restaurants/LeftNavModal';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MOCK_API_URL } from '../../constants/EnvContant';

type GetRestaurantsProps = {
  categories: {
    title: string;
    list: string[];
  };
  restaurants: {
    store_no: string;
    store_name: string;
    service_type_code: string;
    phone_no: string;
    minimum_payment_amount: string;
    sale_from_time: string;
    sale_to_time: string;
    delivery_from_time: string;
    delivery_to_time: string;
    city_code: string;
    district_code: string;
    address: string;
    latitude: string;
    longitude: string;
    manager_phone_no: string;
    national_code: string;
    notify: string;
    bank_code: string;
    bank_account_no: string;
    store_image_url: string;
    descriptions: string[];
    review: string;
  }[];
};

export const restaurantsAPI = createApi({
  reducerPath: 'restaurantsApi',
  baseQuery: fetchBaseQuery({ baseUrl: MOCK_API_URL }),
  endpoints: (build) => ({
    getRestaurants: build.query<GetRestaurantsProps, LeftNavModalProps['filter']>({
      query: (filter) => ({
        url: `/getstores`,
        method: 'get',
        params: {
          filter,
        },
      }),
    }),
  }),
});

export const { useGetRestaurantsQuery } = restaurantsAPI;

export type { GetRestaurantsProps };
