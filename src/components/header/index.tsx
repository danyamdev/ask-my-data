import React from 'react';
import { Divider, Select } from 'antd';

import { Logo } from '../index';

import invalidImg from '../../assets/images/invalid.svg';
import outliersImg from '../../assets/images/outliers.svg';
import missingImg from '../../assets/images/missing.svg';
import './styles.scss';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-inner">
        <div className="header-left">
          <Logo />

          <div className="target-column">
            <span>Target column:</span>
            <Select defaultValue="revenue" options={[{ value: 'revenue', label: 'Revenue' }]} />
          </div>
        </div>

        <div className="header-right">
          <div className="item">
            <img src={invalidImg} alt="Invalid-Img" />
            <div className="item-description">
              <span>1,4%</span>
              <span>invalid</span>
            </div>
          </div>

          <Divider type="vertical" />

          <div className="item">
            <img src={outliersImg} alt="Outliers-Img" />
            <div className="item-description">
              <span>0,2%</span>
              <span>outliers</span>
            </div>
          </div>

          <Divider type="vertical" />

          <div className="item">
            <img src={missingImg} alt="Missing-Img" />
            <div className="item-description">
              <span>0,1%</span>
              <span>missing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
