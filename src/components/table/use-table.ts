import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';

import dataAPI from '../../api/data';
import { useTableSelector } from '../../store/table/selectors';
import { successTableDataAction } from '../../store/table/actions';

const useTable = () => {
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

  return {
    page,
    table,
    setPage,
    dataSource,
    description,
    onChangePage,
    onChangeDescription,
  };
};

export default useTable;
