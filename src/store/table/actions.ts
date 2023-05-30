import { TCustomError } from '../../types/common';
import { TableActionTypes, TTableAction } from '../../types/table';

export const fetchTableAction = (): TTableAction => ({
  type: TableActionTypes.FETCH_TABLE,
});

export const loadingTableAction = (payload: boolean): TTableAction => ({
  type: TableActionTypes.SET_TABLE_LOADING,
  payload,
});

export const successTableAction = (payload: any): TTableAction => ({
  type: TableActionTypes.SET_TABLE_SUCCESS,
  payload,
});

export const errorTableAction = (payload: TCustomError): TTableAction => ({
  type: TableActionTypes.SET_TABLE_ERROR,
  payload,
});
