import React from 'react';

import { ChatList, Hint, Input } from './components';

import './styles.scss';

const Chat: React.FC = () => {
  return (
    <div className="chat">
      <div className="chat-inner">
        <ChatList />
        <Hint />
        <Input />
      </div>
    </div>
  );
};

export default Chat;
