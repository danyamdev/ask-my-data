import { call, put, takeEvery } from 'redux-saga/effects';

import askAPI from '../../api/ask';
import { TAsk } from '../../api/types/ask';
import { ChatActionTypes, TFetchChatAction } from '../../types/chat';
import { errorChatAction, loadingChatAction, successChatAction } from '../chat/actions';

function* fetchChatWorker(action: TFetchChatAction) {
  try {
    yield put(loadingChatAction(true));

    const ask: TAsk = yield call(askAPI.postAsk, action.payload);

    yield put(successChatAction(ask));
  } catch (e: any) {
    window.console.log(e);
    yield put(errorChatAction({ title: 'Ошибка', description: 'Обратитесь к администратору!' }));
  }
}

export function* fetchChatWatcher() {
  yield takeEvery(ChatActionTypes.FETCH_CHAT, fetchChatWorker);
}
