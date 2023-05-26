import React from 'react';
import { Table as TableAnt } from 'antd';

import { columns, data } from '../../constants';

import './styles.scss';

const Table: React.FC = () => {
  const rows = data.length;
  const cols = Object.keys(data[0]).length;

  return (
    <div className="table">
      <div className="table-inner">
        <div className="table-description">This table describes whether a bank customer has defaulted on a loan.</div>

        <div className="table-footer">
          <TableAnt scroll={{ y: 170 }} dataSource={data} columns={columns} />

          <span className="information">
            {rows} rows x {cols} cols
          </span>
        </div>
      </div>
    </div>
  );
};

export default Table;
