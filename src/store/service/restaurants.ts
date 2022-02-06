import { COLLECTION_TYPES } from '@components/restaurants/CollectionSlider';
import { LeftNavModalProps } from '@components/restaurants/LeftNavModal';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MOCK_API_URL } from '../../constants/EnvContant';

type GetRestaurantsProps = {
  restaurants: {
    storeNo: string;
    storeName: string;
    serviceTypeCode: string;
    phoneNo: string;
    minimumPaymentAmount: string;
    saleFromTime: string;
    saleToTime: string;
    deliveryFromTime: string;
    deliveryToTime: string;
    cityCode: string;
    districtCode: string;
    address: string;
    latitude: string;
    longitude: string;
    managerPhoneNo: string;
    nationalCode: string;
    notify: string;
    bankCode: string;
    bankAccountNo: string;
    storeImageUrl: string;
    descriptions: string[];
    review: string;
  }[];
};

export const restaurantsAPI = createApi({
  reducerPath: 'restaurantsApi',
  baseQuery: fetchBaseQuery({ baseUrl: MOCK_API_URL }),
  endpoints: (build) => ({
    getRestaurants: build.query<
      GetRestaurantsProps['restaurants'],
      { filter: LeftNavModalProps['filter']; collection: COLLECTION_TYPES[number]['name'] }
    >({
      query: ({ filter, collection }) => ({
        url: `/getstores`,
        method: 'GET',
        params: {
          filter,
          ...(collection && { collection }),
        },
      }),
    }),
  }),
});

export const { useGetRestaurantsQuery } = restaurantsAPI;

export type { GetRestaurantsProps };
