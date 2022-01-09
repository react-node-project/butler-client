import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { MOCK_API_URL } from '../constants/EnvContant';

type Props = {};
export const Document = (props: Props) => {
  return <SwaggerUI url={`${MOCK_API_URL}/document`} />;
};
