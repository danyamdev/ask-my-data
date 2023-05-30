import React, { useEffect, useState } from 'react';
import { Input as InputAnt } from 'antd';

import { ReactComponent as Plane } from '../../../../assets/images/plane.svg';

import './styles.scss';

const placeholder = 'Which industry leads to the highest number of defaults?';

type TProps = {
  onClick: (query: string) => Promise<void>;
};

const Input: React.FC<TProps> = ({ onClick }) => {
  const [query, setQuery] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClick = () => {
    query.length > 0 && onClick(query);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.keyCode === 13) {
        handleClick();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [handleClick]);

  return (
    <div className="input">
      <InputAnt value={query} placeholder={placeholder} onChange={onChange} />
      <Plane onClick={handleClick} />
    </div>
  );
};

export default Input;
