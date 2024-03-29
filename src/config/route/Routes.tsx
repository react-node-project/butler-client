import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import {
  PATH_ACCOUNT,
  PATH_API_DOCS,
  PATH_HISTORY,
  PATH_PAYMENTS,
  PATH_RECEIPT,
  PATH_RESTAURANTS,
  PATH_RESTAURANTS_DETAIL,
  PATH_ROOT,
  PATH_USER_LOGIN
} from '../../constants/PathConstants';
import AuthFlip from '../../pages/user/AuthFlip';
import Home from '../../pages/Home';
import RestaurantsPage from '../../pages/restaurants/RestaurantsPage';
import StorePage from '../../pages/store/StorePage';
import HistoryPage from '../../pages/history/HistoryPage';
import ReceiptPage from '../../pages/history/ReceiptPage';
import { ApiDocs } from '../../pages/api-docs/ApiDocs';
import PaymentsPage from '../../pages/payments/PaymentsPage';
import ProtectedRoutes from './ProtectedRoutes';
import NotFoundPage from './NotFoundPage';
import Account from '../../pages/user/Account';

export const Routes = () => {
  return (
    <Switch>
      <Route path={PATH_ROOT} element={<Home />} />
      <Route path={PATH_RESTAURANTS} element={<RestaurantsPage />} />
      <Route path={PATH_RESTAURANTS_DETAIL} element={<StorePage />} />
      <Route path={PATH_PAYMENTS} element={<PaymentsPage />} />
      <Route path={PATH_HISTORY} element={<HistoryPage />} />
      <Route path={PATH_RECEIPT} element={<ReceiptPage />} />

      <Route element={<ProtectedRoutes permission="onlyUser" />}>
        <Route path={PATH_ACCOUNT} element={<Account />} />
      </Route>
      <Route element={<ProtectedRoutes permission="noneUser" />}>
        <Route path={PATH_USER_LOGIN} element={<AuthFlip />} />
      </Route>
      <Route element={<ProtectedRoutes permission="admin" />}>
        <Route path={PATH_API_DOCS} element={<ApiDocs />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Switch>
  );
};

export default Routes;
