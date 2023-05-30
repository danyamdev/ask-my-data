import { TCustomError } from '../../types/common';
import { TableActionTypes, TTable, TTableAction } from '../../types/table';
import { TTablePage } from '../../api/types/data';

export const fetchTableAction = (): TTableAction => ({
  type: TableActionTypes.FETCH_TABLE,
});

export const loadingTableAction = (payload: boolean): TTableAction => ({
  type: TableActionTypes.SET_TABLE_LOADING,
  payload,
});

export const successTableAction = (payload: TTable): TTableAction => ({
  type: TableActionTypes.SET_TABLE_SUCCESS,
  payload,
});

export const successTableDataAction = (payload: TTablePage): TTableAction => ({
  type: TableActionTypes.SET_TABLE_DATA_SUCCESS,
  payload,
});

export const errorTableAction = (payload: TCustomError): TTableAction => ({
  type: TableActionTypes.SET_TABLE_ERROR,
  payload,
});
