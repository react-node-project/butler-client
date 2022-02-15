import { RootState } from '@store/index';

const prepareHeaderToken = (headers: Headers, { getState }: { getState: () => unknown }) => {
  const user = (getState() as RootState).user;
  const { token } = user;

  if (token) {
    headers.set('Authorization', `${token}`);
  }
  return headers;
};

export { prepareHeaderToken };
