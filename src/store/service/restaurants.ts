import { COLLECTION_TYPES } from '@components/restaurants/CollectionSlider';
import { LeftNavModalProps } from '@components/restaurants/LeftNavModal';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { coordinatesTypes } from './../../pages/restaurants/RestaurantsPage';
import { API_URL } from '../../constants/EnvContant';

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
    // storeImageUrl: string;
    store_image: string;
    descriptions: string[];
    reviewCount: string;
  }[];
};

type listDataResponseTypes = {
  MESSAGE_CODE: string;
  MESSAGE_NAME: string;
  rowCount: number;
  list: GetRestaurantsProps['restaurants'];
};

export const restaurantsAPI = createApi({
  reducerPath: 'restaurantsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getRestaurants: build.query<
      listDataResponseTypes,
      {
        coordinates: coordinatesTypes;
        filter: LeftNavModalProps['filter'];
        collection: COLLECTION_TYPES[number]['name'];
        distance?: number;
      }
    >({
      query: ({ coordinates, filter, collection, distance }) => ({
        url: `/store/getstores`,
        method: 'GET',
        params: {
          // TODO: latitude 오타확인
          // TODO: distance 기본값 논의
          // TODO: 도시이름 넣어야하는지 확인
          // TODO: 안나오는 주소들 확인
          // TODO: filter 적용 확인
          // TODO: collection 적용 확인
          // TODO: 필요한 필드값 확인 (image, review, descriptions)

          // 현재 주소값으로 넣으면 제대로 안나와서 일단 예시에 있는 값 고정으로 넣었습니다.
          latitude: 10.8007819,
          longitude: 106.7474015,
          // ...coordinates
          distance: distance ? distance : '10',
          // filter,
          // ...(collection && { collection }),
        },
      }),
    }),
  }),
});

export const { useGetRestaurantsQuery } = restaurantsAPI;

export type { GetRestaurantsProps };
