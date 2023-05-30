import React from 'react';
import { Table as TableAnt } from 'antd';

import { columns, data } from './constants';
import { useTableSelector } from '../../store/table/selectors';

import './styles.scss';

const Table: React.FC = () => {
  const { table } = useTableSelector();

  return (
    <div className="table">
      <div className="table-inner">
        <div className="table-description">{table.description}</div>

        <div className="table-footer">
          <TableAnt scroll={{ y: 170 }} dataSource={data} columns={columns} />

          <span className="information">
            {table.rows} rows x {table.columns} cols
          </span>
        </div>
      </div>
    </div>
  );
};

export default Table;
