import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

export const useRestaurantsEvent = () => {
  const { title, list } = useSelector((state: RootState) => state.restaurants.saleList);

  return { title, list };
};
