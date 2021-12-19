import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const useMenuItem = () => {
  const { title, list } = useSelector((state) => state.menu.menuList);

  return { title, list };
};
