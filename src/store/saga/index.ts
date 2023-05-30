import { all } from 'redux-saga/effects';

import { fetchChatWatcher } from './chat-saga';
import { fetchTableWatcher } from './table-saga';

export default function* rootWatcher() {
  yield all([fetchChatWatcher(), fetchTableWatcher()]);
}
