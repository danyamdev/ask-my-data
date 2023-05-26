import React from 'react';
import { Divider } from 'antd';

import { ReactComponent as Star } from '../../../../assets/images/star.svg';
import { ReactComponent as Darts } from '../../../../assets/images/darts.svg';

import './styles.scss';

const Hint: React.FC = () => (
  <div className="hint">
    <div className="hint-inner">
      <div className="hint-left">
        <Star />
        <span>Which industry leads to the highest number of defaults?</span>
      </div>

      <Divider type="vertical" />

      <div className="hint-right">
        <Darts />
        <span>Identify the industries whith the greatest risk.</span>
      </div>
    </div>
  </div>
);

export default Hint;
