import React, { useRef } from 'react';

import { ChatItem } from '../index';

import './styles.scss';

const ChatList: React.FC = () => {
  const chatRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={chatRef} className="chat-list">
      <div className="chat-list-inner">
        {[1, 2, 3, 4].map(i => (
          <ChatItem key={i} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
