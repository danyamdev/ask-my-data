import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import askAPI from '../../api/ask';
import { useChatSelector } from '../../store/chat/selectors';
import { successChatAction } from '../../store/chat/actions';

const useChat = () => {
  const dispatch = useDispatch();

  const { chat } = useChatSelector();

  const onClick = useCallback(async (query: string) => {
    try {
      const { answer, hints } = await askAPI.postAsk(query);

      dispatch(successChatAction({ answer, hints }));
    } catch (e) {
      window.console.log(e);
    }
  }, []);

  return {
    onClick,
    hints: chat.hints,
    answers: chat.answers,
  };
};

export default useChat;
