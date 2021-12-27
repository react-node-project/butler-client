import { rest, setupWorker } from 'msw';
import { THEMEMENU } from './data/landing';
import { MOCK_API_URL } from '../constants/EnvContant';
import {
  CATEGORY_LIST,
  RESTAURANTS_LIST,
  RESTAURANTS_LIST_PICK_UP,
  RESTAURANTS_LIST_TABLE_SERVICE,
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
  rest.get(`${MOCK_API_URL}/categories`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ...CATEGORY_LIST }));
  }),
  rest.get(`${MOCK_API_URL}/restauranrs`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([...RESTAURANTS_LIST]));
  }),
  rest.get(`${MOCK_API_URL}/restauranrs/delivery`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([...RESTAURANTS_LIST]));
  }),
  rest.get(`${MOCK_API_URL}/restauranrs/pick-up`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([...RESTAURANTS_LIST_PICK_UP]));
  }),
  rest.get(`${MOCK_API_URL}/restauranrs/table-service`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([...RESTAURANTS_LIST_TABLE_SERVICE]));
  }),
];

const worker = setupWorker(...handlers);

export { worker };
