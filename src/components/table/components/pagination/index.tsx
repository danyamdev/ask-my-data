import React, { Dispatch, SetStateAction } from 'react';
import { Input } from 'antd';
import { TTable } from '../../../../types/table';

type TProps = {
  page: number;
  table: TTable;
  setPage: Dispatch<SetStateAction<number>>;
  onChangePage: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
};

const Pagination: React.FC<TProps> = ({ page, table, setPage, onChangePage }) => (
  <div className="pagination">
    <span className="information">
      {table.rows} rows x {table.columns} cols
    </span>

    <div className="pagination-custom">
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} className={`number${page === i ? ' isActive' : ''}`} onClick={() => setPage(i)}>
          {i}
        </span>
      ))}

      <div className="page">Go to page</div>

      <Input type="number" min={6} max={table.pages} onChange={onChangePage} />

      <div className="page">of {table.pages}</div>
    </div>
  </div>
);

export default Pagination;
