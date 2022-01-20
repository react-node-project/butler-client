import { RootState } from '@store/index';
import React from 'react';
import { useSelector } from 'react-redux';

export type TitleProps = {};

const Title = (props: TitleProps) => {
  const title = useSelector((state: RootState) => state.payments.title);

  return <h2>{title}</h2>;
};

export default Title;
