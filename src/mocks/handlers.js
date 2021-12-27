import { rest, setupWorker } from 'msw';
import { THEMEMENU } from './data/landing';
import { MOCK_API_URL } from '../constants/EnvContant';
import { DELEVERING_CITY_LIST } from './data/restaurants';

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
  rest.get(`${MOCK_API_URL}/restauranrs`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ categories: DELEVERING_CITY_LIST }));
  }),
];

const worker = setupWorker(...handlers);

export { worker };
