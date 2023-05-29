import { call, put, takeEvery } from 'redux-saga/effects';

import { TableActionTypes, TFetchTableAction } from '../../types/table';

function* fetchTableWorker(action: TFetchTableAction) {
  // try {
  // } catch (e: any) {}
}

export function* fetchTableWatcher() {
  yield takeEvery(TableActionTypes.FETCH_TABLE, fetchTableWorker);
}
