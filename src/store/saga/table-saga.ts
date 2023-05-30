import { call, put, takeEvery } from 'redux-saga/effects';

import dataAPI from '../../api/data';
import { TFile, TTablePage } from '../../api/types/data';
import { TableActionTypes } from '../../types/table';
import { errorTableAction, loadingTableAction, successTableAction } from '../table/actions';

function* fetchTableWorker() {
  try {
    yield put(loadingTableAction(true));

    const info: TFile = yield call(dataAPI.getTableAnalysis);
    const data: TTablePage = yield call(dataAPI.getTablePage, 1);

    yield put(successTableAction({ ...info, ...data }));
  } catch (e) {
    window.console.log(e);
    yield put(errorTableAction({ title: 'Ошибка', description: 'Обратитесь к администратору!' }));
  }
}

export function* fetchTableWatcher() {
  yield takeEvery(TableActionTypes.FETCH_TABLE, fetchTableWorker);
}
