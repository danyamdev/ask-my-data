import React from 'react';
import { Input } from 'antd';

import Pagination from './components/pagination';
import TableCustom from './components/table-custom';

import useTable from './use-table';

import './styles.scss';

const Table: React.FC = () => {
  const { page, setPage, dataSource, table, description, onChangeDescription, onChangePage } = useTable();

  return (
    <div className="table">
      <div className="table-inner">
        <div className="table-description">
          <Input value={description} onChange={onChangeDescription} />
        </div>

        <div className="table-footer">
          <TableCustom dataSource={dataSource} />

          <Pagination page={page} table={table} setPage={setPage} onChangePage={onChangePage} />
        </div>
      </div>
    </div>
  );
};

export default Table;
