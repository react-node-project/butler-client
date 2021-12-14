import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

export const useRestaurantsCategory = () => {
  const { title, list } = useSelector((state: RootState) => state.restaurants.deleveringCityList);

  return { title, list };
};
