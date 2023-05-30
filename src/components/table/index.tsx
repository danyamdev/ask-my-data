import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';

import { useTableSelector } from '../../store/table/selectors';
import dataAPI from '../../api/data';
import { successTableDataAction } from '../../store/table/actions';

import './styles.scss';

const Table: React.FC = () => {
  const dispatch = useDispatch();

  const { table } = useTableSelector();

  const [page, setPage] = useState<number>(1);
  const [description, setDescription] = useState<string>(table.description);

  const getTableData = useCallback(async () => {
    try {
      const { data, pages } = await dataAPI.getTablePage(page);

      dispatch(successTableDataAction({ data, pages }));
    } catch (e) {
      window.console.log(e);
    }
  }, [dispatch, page]);

  useEffect(() => {
    getTableData();
  }, [getTableData]);

  const onChangeDescription = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDescription(value);

    try {
      const res = await dataAPI.updateTableProperties(`description=${value}`);

      window.console.log(res);
    } catch (e) {
      window.console.log(e);
    }
  }, []);

  const onChangePage = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      if (value >= 1 && value <= table.pages) {
        setPage(value);
      }
    },
    [table],
  );

  const dataSource = useMemo(
    () => table.headers.map((h, i) => [h, table.data[0][i], table.data[1][i], table.data[2][i]]),
    [table],
  );

  return (
    <div className="table">
      <div className="table-inner">
        <div className="table-description">
          <Input value={description} onChange={onChangeDescription} />
        </div>

        <div className="table-footer">
          <div className="table-custom">
            {dataSource.map(source => (
              <div key={source[0]} className="column">
                {source.map((s, index) => (
                  <div key={`${source[0]}-${index}`}>{s}</div>
                ))}
              </div>
            ))}
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default Table;
