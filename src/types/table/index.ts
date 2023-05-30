import { TFile, TTablePage } from '../../api/types/data';
import { TCustomError } from '../common';

type TTable = TFile & TTablePage;

export type TTableState = {
  table: TTable;
  loading: boolean;
  error: TCustomError | null;
};

export enum TableActionTypes {
  FETCH_TABLE = 'FETCH_TABLE',
  SET_TABLE_LOADING = 'SET_TABLE_LOADING',
  SET_TABLE_SUCCESS = 'SET_TABLE_SUCCESS',
  SET_TABLE_ERROR = 'SET_TABLE_ERROR',
}

export type TFetchTableAction = {
  type: TableActionTypes.FETCH_TABLE;
};

type TSetTableLoadingAction = {
  type: TableActionTypes.SET_TABLE_LOADING;
  payload: boolean;
};

type TSetTableSuccessAction = {
  type: TableActionTypes.SET_TABLE_SUCCESS;
  payload: TTable;
};

type TSetTableErrorAction = {
  type: TableActionTypes.SET_TABLE_ERROR;
  payload: TCustomError;
};

export type TTableAction = TFetchTableAction | TSetTableLoadingAction | TSetTableSuccessAction | TSetTableErrorAction;
