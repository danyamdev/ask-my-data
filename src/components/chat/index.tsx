import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { ChatList, Hint, Input } from './components';

import askAPI from '../../api/ask';
import { useChatSelector } from '../../store/chat/selectors';
import { successChatAction } from '../../store/chat/actions';

import './styles.scss';

const Chat: React.FC = () => {
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

  return (
    <div className="chat">
      <div className="chat-inner">
        <ChatList answers={chat.answers} />
        <Hint hints={chat.hints} />
        <Input onClick={onClick} />
      </div>
    </div>
  );
};

export default Chat;
