import { TCustomError } from '../common';
import { THint } from '../../api/types/ask';

export type TChatState = {
  chat: {
    answers: string[];
    hints: THint[];
  };
  loading: boolean;
  error: TCustomError | null;
};

export enum ChatActionTypes {
  FETCH_CHAT = 'FETCH_CHAT',
  SET_CHAT_LOADING = 'SET_CHAT_LOADING',
  SET_CHAT_SUCCESS = 'SET_CHAT_SUCCESS',
  SET_CHAT_ERROR = 'SET_CHAT_ERROR',
}

export type TFetchChatAction = {
  type: ChatActionTypes.FETCH_CHAT;
  payload: string;
};

type TSetChatLoadingAction = {
  type: ChatActionTypes.SET_CHAT_LOADING;
  payload: boolean;
};

type TSetChatSuccessAction = {
  type: ChatActionTypes.SET_CHAT_SUCCESS;
  payload: { answer: string; hints: THint[] };
};

type TSetChatErrorAction = {
  type: ChatActionTypes.SET_CHAT_ERROR;
  payload: TCustomError;
};

export type TChatAction = TFetchChatAction | TSetChatLoadingAction | TSetChatSuccessAction | TSetChatErrorAction;
