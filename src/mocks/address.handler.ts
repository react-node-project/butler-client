import { ResponseComposition, rest, RestRequest } from 'msw';
import { MOCK_API_URL } from '../constants/EnvContant';
import { GetAddressResponse } from '../type/address.type';
import { faker } from '@faker-js/faker';
import { CALLING_CODES } from '../constants/CountryConstant';

const callingCode = CALLING_CODES[Math.floor(Math.random() * 2)].value;
const phoneNumberFormat = `${callingCode} ###-###-####`;

const addresses: GetAddressResponse['addresses'] = [
  {
    id: 4,
    message: faker.lorem.word(5),
    streetAddress: faker.address.streetAddress(true),
    city: faker.address.cityName(),
    apartment: 'apartment',
    phoneNumber: faker.phone.phoneNumber(phoneNumberFormat),
    postcode: faker.address.zipCode(),
  },
  {
    id: 1,
    message: faker.lorem.word(5),
    streetAddress: faker.address.streetAddress(true),
    city: faker.address.cityName(),
    apartment: 'apartment',
    phoneNumber: faker.phone.phoneNumber(phoneNumberFormat),
    postcode: faker.address.zipCode(),
  },
  {
    id: 2,
    message: faker.lorem.word(5),
    streetAddress: faker.address.streetAddress(true),
    city: faker.address.cityName(),
    apartment: 'apartment',
    phoneNumber: faker.phone.phoneNumber(phoneNumberFormat),
    postcode: faker.address.zipCode(),
  },
  {
    id: 3,
    message: faker.lorem.word(5),
    streetAddress: faker.address.streetAddress(true),
    city: faker.address.cityName(),
    apartment: 'apartment',
    phoneNumber: faker.phone.phoneNumber(phoneNumberFormat),
    postcode: faker.address.zipCode(),
  },
];

export const addressHandler = [
  rest.get(`${MOCK_API_URL}/address`, async (req: RestRequest, res: ResponseComposition<GetAddressResponse>, ctx) => {
    if (!req.headers.get('authorization')) {
      return res(ctx.status(401));
    }

    return res(ctx.status(200), ctx.json({ addresses }));
  }),
  rest.delete(
    `${MOCK_API_URL}/address/:id`,
    async (req: RestRequest<undefined, { id: string }>, res: ResponseComposition<GetAddressResponse>, ctx) => {
      if (!req.headers.get('authorization')) {
        return res(ctx.status(401));
      }
      const { id } = req.params;
      if (!id) {
        return res(ctx.status(400));
      }

      const idx = addresses.findIndex((d) => d.id === Number(id));
      if (idx < 0) {
        return res(ctx.status(404));
      }

      addresses.splice(idx, 1);

      return res(ctx.status(200));
    },
  ),
];
