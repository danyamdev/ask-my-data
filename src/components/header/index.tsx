import React from 'react';
import { Divider, Select } from 'antd';
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { Logo } from '../index';

import useHeader from './use-header';

import invalidImg from '../../assets/images/invalid.svg';
import outliersImg from '../../assets/images/outliers.svg';
import missingImg from '../../assets/images/missing.svg';
import './styles.scss';

const Header: React.FC = () => {
  const { props, table, options, logoName, onChange } = useHeader();

  return (
    <div className="header">
      <div className="header-inner">
        <div className="header-left">
          <Logo name={logoName} />

          <Upload {...props}>
            <Button icon={<UploadOutlined />} />
          </Upload>

          <div className="target-column">
            <span>Target column:</span>
            <Select defaultValue={table.target} options={options} onChange={onChange} />
          </div>
        </div>

        <div className="header-right">
          <div className="item">
            <img src={invalidImg} alt="Invalid-Img" />
            <div className="item-description">
              <span>{table.invalid}%</span>
              <span>invalid</span>
            </div>
          </div>

          <Divider type="vertical" />

          <div className="item">
            <img src={outliersImg} alt="Outliers-Img" />
            <div className="item-description">
              <span>{table.outliers}%</span>
              <span>outliers</span>
            </div>
          </div>

          <Divider type="vertical" />

          <div className="item">
            <img src={missingImg} alt="Missing-Img" />
            <div className="item-description">
              <span>{table.missing}%</span>
              <span>missing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
