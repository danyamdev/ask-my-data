import React from 'react';
import { Input as InputAnt } from 'antd';

import useInput from './use-input';

import { ReactComponent as Plane } from '../../../../assets/images/plane.svg';

import './styles.scss';

const placeholder = 'Ask the question?';

type TProps = {
  onClick: (query: string) => Promise<void>;
};

const Input: React.FC<TProps> = ({ onClick }) => {
  const { query, onChange, handleClick } = useInput(onClick);

  return (
    <div className="input">
      <InputAnt value={query} placeholder={placeholder} onChange={onChange} />
      <Plane onClick={handleClick} />
    </div>
  );
};

export default Input;
