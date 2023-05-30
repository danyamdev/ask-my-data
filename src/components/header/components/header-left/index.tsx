import React from 'react';
import { Button, Select, Upload, UploadProps } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { Logo } from '../../../index';

type TProps = {
  logoName: string;
  props: UploadProps;
  target: number;
  options: { value: number; label: string }[];
  onChange: (value: number) => Promise<void>;
};

const HeaderLeft: React.FC<TProps> = ({ logoName, props, options, target, onChange }) => (
  <div className="header-left">
    <Logo name={logoName} />

    <Upload {...props}>
      <Button icon={<UploadOutlined />} />
    </Upload>

    <div className="target-column">
      <span>Target column:</span>
      <Select defaultValue={target} options={options} onChange={onChange} />
    </div>
  </div>
);

export default HeaderLeft;
