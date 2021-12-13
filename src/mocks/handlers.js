import { rest, setupWorker } from 'msw';
import { THEMEMENU } from './data/landing';
import { MOCK_API_URL } from '../constants/EnvContant';

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const handlers = [
  rest.get(`${MOCK_API_URL}/theme-menus`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([...THEMEMENU]));
  }),
  rest.post(`${MOCK_API_URL}/address`, async (req, res, ctx) => {
    await sleep(5000);
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
];

const worker = setupWorker(...handlers);

export { worker };
