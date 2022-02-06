import { rest, setupWorker } from 'msw';
import { THEMEMENU } from './data/landing';
import { MOCK_API_URL } from '../constants/EnvContant';
import { RESTAURANTS_LIST, RESTAURANTS_LIST_PICK_UP, RESTAURANTS_LIST_TABLE_SERVICE } from './data/restaurants';
import { RESTAURANT_MENU } from './data/restaurantMenu';
import { locationHandler } from './location.handler';
import { authHandler } from './auth.handler';
import { userHandler } from './user.handler';

export const handlers = [
  rest.get(`${MOCK_API_URL}/theme-menus`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([...THEMEMENU]));
  }),

  rest.get(`${MOCK_API_URL}/getstores`, (req, res, ctx) => {
    const filter = req.url.searchParams.get('filter') ?? 'delivery';

    if (filter === 'delivery') {
      return res(ctx.status(200), ctx.json([...RESTAURANTS_LIST]));
    }
    if (filter === 'pick-up') {
      return res(ctx.status(200), ctx.json([...RESTAURANTS_LIST_PICK_UP]));
    }
    if (filter === 'table-service') {
      return res(ctx.status(200), ctx.json([...RESTAURANTS_LIST_TABLE_SERVICE]));
    }
    return res(
      ctx.status(403),
      ctx.json({
        code: 2000,
        message: 'not supported filter',
      }),
    );
  }),
  rest.get(`${MOCK_API_URL}/restaurant_detail`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([...RESTAURANT_MENU]));
  }),
  ...locationHandler,
  ...authHandler,
  ...userHandler,
];

const worker = setupWorker(...handlers);

export { worker };
