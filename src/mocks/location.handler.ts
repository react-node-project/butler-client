import { rest } from 'msw';
import { MOCK_API_URL } from '../constants/EnvContant';

export const locationHandler = [
  rest.post(`${MOCK_API_URL}/location/inactive`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: 1000,
        message: 'ok',
      }),
    );
  }),
  rest.post(`${MOCK_API_URL}/location`, async (req, res, ctx) => {
    const whiteList = ['영국 리버풀'];

    // if (!whiteList.includes(req.body.address)) {
    //   return res(
    //     ctx.status(403),
    //     ctx.json({
    //       code: 2000,
    //       message: 'not supported location',
    //     }),
    //   );
    // }

    return res(
      ctx.delay(1000),

      ctx.json({
        code: 1000,
        message: 'ok',
      }),
    );
  }),
];
