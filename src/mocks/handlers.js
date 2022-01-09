import { rest, setupWorker } from 'msw';
import { THEMEMENU } from './data/landing';
import { MOCK_API_URL } from '../constants/EnvContant';
import swagger from './data/swagger.json';
import {
  CATEGORY_LIST,
  CATEGORY_LIST_PICK_UP,
  CATEGORY_LIST_TABLE_SERVICE,
  RESTAURANTS_LIST,
  RESTAURANTS_LIST_PICK_UP,
  RESTAURANTS_LIST_TABLE_SERVICE
} from './data/restaurants';

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const handlers = [
  rest.get(`${MOCK_API_URL}/theme-menus`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([...THEMEMENU]));
  }),
  rest.post(`${MOCK_API_URL}/inactiveLocation`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: 1000,
        message: 'ok',
      }),
    );
  }),
  rest.post(`${MOCK_API_URL}/location`, async (req, res, ctx) => {
    await sleep(3000);
    const whiteList = ['영국 리버풀'];

    if (!whiteList.includes(req.body.address)) {
      return res(
        ctx.status(403),
        ctx.json({
          code: 2000,
          message: 'not supported location',
        }),
      );
    }

    return res(
      ctx.json({
        code: 1000,
        message: 'ok',
      }),
    );
  }),
  rest.get(`${MOCK_API_URL}/restauranrs/:filter`, (req, res, ctx) => {
    if (req.params.filter === 'delivery') {
      return res(ctx.status(200), ctx.json({ categories: { ...CATEGORY_LIST }, restaurants: [...RESTAURANTS_LIST] }));
    }
    if (req.params.filter === 'pick-up') {
      return res(
        ctx.status(200),
        ctx.json({ categories: { ...CATEGORY_LIST_PICK_UP }, restaurants: [...RESTAURANTS_LIST_PICK_UP] }),
      );
    }
    if (req.params.filter === 'table-service') {
      return res(
        ctx.status(200),
        ctx.json({ categories: { ...CATEGORY_LIST_TABLE_SERVICE }, restaurants: [...RESTAURANTS_LIST_TABLE_SERVICE] }),
      );
    }

    return res(
      ctx.status(403),
      ctx.json({
        code: 2000,
        message: 'not supported filter',
      }),
    );
  }),
  rest.get(`${MOCK_API_URL}/document`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ...swagger }));
  }),
];

const worker = setupWorker(...handlers);

export { worker };
