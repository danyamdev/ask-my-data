import React, { useMemo } from 'react';
import { Divider, Select } from 'antd';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { Logo } from '../index';

import { API } from '../../constants';
import { useTableSelector } from '../../store/table/selectors';

import invalidImg from '../../assets/images/invalid.svg';
import outliersImg from '../../assets/images/outliers.svg';
import missingImg from '../../assets/images/missing.svg';
import './styles.scss';

const Header: React.FC = () => {
  const { table } = useTableSelector();

  const options = useMemo(
    () =>
      table.headers?.map((h, i) => ({
        value: i,
        label: h,
      })),
    [table],
  );

  const logoName = useMemo(() => `${table.filename}${table.file_extension}`, [table]);

  const props: UploadProps = {
    name: 'file',
    action: `${API}/uploadNewTable`,
    onChange: async info => {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    showUploadList: false,
  };

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
            <Select defaultValue={table.target} options={options} />
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
