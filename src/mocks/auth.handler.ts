import { ResponseComposition, rest, RestRequest } from 'msw';
import { MOCK_API_URL } from '../constants/EnvContant';
import { LoginRequest, LoginResponse } from '../type/auth.type';
import { ButlerResponse } from '../type/commont.type';

export const authHandler = [
  rest.post(
    `${MOCK_API_URL}/auth/login`,
    (req: RestRequest<LoginRequest>, res: ResponseComposition<ButlerResponse>, ctx) => {
      if (!req.body.email || !req.body.password) {
        return res(
          ctx.json({
            code: 2000,
            message: 'email or password required',
          }),
          ctx.status(400),
        );
      }

      const user = true;
      if (!user) {
        return res(
          ctx.status(404),
          ctx.json({
            code: 3000,
            message: '없는 유저입니다.',
          }),
        );
      }
      const date = new Date();
      const expireDate = new Date(date.setMonth(date.getMonth() + 1));
      const iss = date.toISOString();
      const exp = expireDate.toISOString();

      const successResponse: LoginResponse = {
        exp,
        iss,
        accessToken: 'abcde',
        userId: 1,
      };
      return res(
        ctx.status(200),
        ctx.json({
          code: 1000,
          message: 'ok',
          ...successResponse,
        }),
      );
    },
  ),
  rest.get(`${MOCK_API_URL}/auth/logout`, (req, res: ResponseComposition<ButlerResponse>, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: 1000,
        message: 'ok',
      }),
    );
  }),
  rest.get(`${MOCK_API_URL}/auth/refresh`, (req, res: ResponseComposition<ButlerResponse>, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: 1000,
        message: 'ok',
      }),
    );
  }),
];
