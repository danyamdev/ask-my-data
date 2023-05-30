import React, { useCallback, useState } from 'react';
import { Table as TableAnt, Input } from 'antd';

import { columns, data } from './constants';
import { useTableSelector } from '../../store/table/selectors';

import './styles.scss';
import dataAPI from '../../api/data';

const Table: React.FC = () => {
  const { table } = useTableSelector();

  const [description, setDescription] = useState<string>(table.description);

  const onChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDescription(value);

    try {
      const res = await dataAPI.updateTableProperties(`description=${value}`);

      window.console.log(res);
    } catch (e) {
      window.console.log(e);
    }
  }, []);

  return (
    <div className="table">
      <div className="table-inner">
        <div className="table-description">
          <Input value={description} onChange={onChange} />
        </div>

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
