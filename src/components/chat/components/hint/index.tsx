import React from 'react';
import { Divider } from 'antd';

import { THint } from '../../../../api/types/ask';

import { ReactComponent as Star } from '../../../../assets/images/star.svg';
import { ReactComponent as Darts } from '../../../../assets/images/darts.svg';

import './styles.scss';

type TProps = {
  hints: THint[];
};

const Hint: React.FC<TProps> = ({ hints }) => (
  <>
    {hints.map(({ query, goal }, index) => (
      <div key={index}>
        <div className="hint">
          <div className="hint-inner">
            <div className="hint-left">
              <Star />
              <span>{query}</span>
            </div>

            <Divider type="vertical" />

            <div className="hint-right">
              <Darts />
              <span>{goal}</span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default Hint;
