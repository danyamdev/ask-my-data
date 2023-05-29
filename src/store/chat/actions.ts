import { THint } from '../../api/types/ask';
import { TCustomError } from '../../types/common';
import { ChatActionTypes, TChatAction } from '../../types/chat';

export const fetchChatAction = (payload: string): TChatAction => ({
  type: ChatActionTypes.FETCH_CHAT,
  payload,
});

export const loadingChatAction = (payload: boolean): TChatAction => ({
  type: ChatActionTypes.SET_CHAT_LOADING,
  payload,
});

export const successChatAction = (payload: { answer: string; hints: THint[] }): TChatAction => ({
  type: ChatActionTypes.SET_CHAT_SUCCESS,
  payload,
});

export const errorChatAction = (payload: TCustomError): TChatAction => ({
  type: ChatActionTypes.SET_CHAT_ERROR,
  payload,
});
