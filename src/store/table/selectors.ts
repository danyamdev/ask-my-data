import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { TState } from '../../types/state';
import { TTableState } from '../../types/table';

const state = (state: TState): TTableState => state.table;

const getTableState = createSelector(state, ({ table, loading, error }: TTableState) => ({
  table,
  loading,
  error,
}));

export const useTableSelector = () => useSelector(getTableState);
