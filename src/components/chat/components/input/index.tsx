import React from 'react';
import { Input as InputAnt } from 'antd';

import { ReactComponent as Plane } from '../../../../assets/images/plane.svg';

import './styles.scss';

const placeholder = 'Which industry leads to the highest number of defaults?';

const Input: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    window.console.log(e);
  };

  return (
    <div className="input">
      <InputAnt placeholder={placeholder} onChange={onChange} />
      <Plane />
    </div>
  );
};

export default Input;
