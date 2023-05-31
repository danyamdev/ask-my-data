import React from 'react';
import { Divider } from 'antd';

import { results } from '../../constants';
import { TTable } from '../../../../types/table';

type TProps = {
  table: TTable;
};

const HeaderRight: React.FC<TProps> = ({ table }) => (
  <div className="header-right">
    {results.map(({ name, icon }, index) => (
      <>
        <div key={name} className="item">
          {icon}
          <div className="item-description">
            <span>{table[name]}%</span>
            <span>{name}</span>
          </div>
        </div>
        {index != 2 && <Divider key={index} type="vertical" />}
      </>
    ))}
  </div>
);

export default HeaderRight;
