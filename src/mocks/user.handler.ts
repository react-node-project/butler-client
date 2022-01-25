import { ResponseComposition, rest, RestRequest } from 'msw';
import { MOCK_API_URL } from '../constants/EnvContant';
import { ButlerResponse } from '../type/commont.type';
import { SignUpRequest, UserInfo } from '../type/user.type';
import { signUpRequestSchema } from '../util/shcema';

const sampleUser: UserInfo = {
  email: 'butler@gmail.com',
  callingCode: '00',
  name: 'paul',
  mobile: '010-1234-1234',
};

export const userHandler = [
  rest.post(
    `${MOCK_API_URL}/users`,
    async (req: RestRequest<SignUpRequest>, res: ResponseComposition<ButlerResponse>, ctx) => {
      try {
        await signUpRequestSchema.validate(req.body);
        return res(
          ctx.status(200),
          ctx.json({
            code: 1000,
            message: 'ok',
            userNumber: 1,
            email: req.body.email,
          }),
        );
      } catch (e) {
        console.log('ee', e);
        return res(
          ctx.status(400),
          ctx.json({
            code: 2000,
            message: '필수 데이터가 존재하지않습니다',
          }),
        );
      }
    },
  ),
  rest.get(`${MOCK_API_URL}/users/`, (req, res: ResponseComposition<ButlerResponse>, { status, json }) => {
    const token = req.headers.get('Authorization');
    if (!token) {
      return res(
        json({
          code: 2000,
          message: 'token 이 존재하지 않습니다',
        }),
        status(400),
      );
    }

    return res(
      status(200),
      json({
        ...sampleUser,
        code: 1000,
        message: 'ok',
      }),
    );
  }),
  rest.patch(
    `${MOCK_API_URL}/users`,
    async (req: RestRequest<SignUpRequest>, res: ResponseComposition<ButlerResponse>, { status, json }) => {
      res(
        status(200),
        json({
          code: 1000,
          message: 'ok',
          ...sampleUser,
        }),
      );
    },
  ),
];
