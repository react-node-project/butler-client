import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import spec from './swagger.json';

type Props = {};
export const ApiDocs = (props: Props) => {
  return <SwaggerUI spec={spec} />;
};
