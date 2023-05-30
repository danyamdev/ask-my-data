import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { TState } from '../../types/state';
import { TChatState } from '../../types/chat';

const state = (state: TState): TChatState => state.chat;

const getChatState = createSelector(state, ({ chat, loading, error }: TChatState) => ({
  chat,
  loading,
  error,
}));

export const useChatSelector = () => useSelector(getChatState);
