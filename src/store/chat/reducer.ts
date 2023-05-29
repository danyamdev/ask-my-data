import { ChatActionTypes, TChatAction, TChatState } from '../../types/chat';

const initialState: TChatState = {
  chat: {
    answers: [],
    hints: [],
  },
  loading: true,
  error: null,
};

export const reducer = (state: TChatState = initialState, action: TChatAction) => {
  switch (action.type) {
    case ChatActionTypes.SET_CHAT_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case ChatActionTypes.SET_CHAT_SUCCESS:
      return {
        ...state,
        chat: {
          answers: [...state.chat.answers, action.payload.answer],
          hints: action.payload.hints,
        },
      };

    case ChatActionTypes.SET_CHAT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
