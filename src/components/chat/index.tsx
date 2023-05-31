import React from 'react';

import { ChatList, Hint, Input } from './components';

import useChat from './use-chat';

import './styles.scss';

const Chat: React.FC = () => {
  const { hints, answers, onClick } = useChat();

  return (
    <div className="chat">
      <div className="chat-inner">
        <ChatList answers={answers} />
        <Hint hints={hints} onClick={onClick} />
        <Input onClick={onClick} />
      </div>
    </div>
  );
};

export default Chat;
