import { all } from 'redux-saga/effects';

import { fetchChatWatcher } from './chat-saga';

export default function* rootWatcher() {
  yield all([fetchChatWatcher()]);
}
