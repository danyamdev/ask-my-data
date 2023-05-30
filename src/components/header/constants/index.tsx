import React from 'react';
import { ReactComponent as InvalidImg } from '../../../assets/images/invalid.svg';
import { ReactComponent as OutliersImg } from '../../../assets/images/outliers.svg';
import { ReactComponent as MissingImg } from '../../../assets/images/missing.svg';

type TResult = {
  name: 'invalid' | 'outliers' | 'missing';
  icon: JSX.Element;
};

export const results: TResult[] = [
  {
    name: 'invalid',
    icon: <InvalidImg />,
  },
  {
    name: 'outliers',
    icon: <OutliersImg />,
  },
  {
    name: 'missing',
    icon: <MissingImg />,
  },
];
