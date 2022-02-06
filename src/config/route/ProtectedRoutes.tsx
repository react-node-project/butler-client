import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { RootState } from '@store/index';
import { useSelector } from 'react-redux';

type Props = {
  permission?: 'onlyUser' | 'noneUser' | 'admin';
};

const ProtectedRoutes = ({ permission = 'onlyUser' }: Props) => {
  const { isLoggedIn, email } = useSelector((state: RootState) => state.user);

  if (permission === 'noneUser') {
    return !isLoggedIn ? <Outlet /> : <Navigate to="/" />;
  }
  if (permission === 'admin') {
    const adminList: string[] = ['']; // 어드민 관련된 설정 이메일을 상수로 입력한다. 하지만. 보안이 허술할수있으니 api 가 잇으면 더더욱 좋다

    return !adminList.includes(email) && isLoggedIn ? <Outlet /> : <Navigate to="/" />;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
