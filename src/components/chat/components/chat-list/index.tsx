import React, { useEffect, useRef } from 'react';
import { Empty } from 'antd';

import { ChatItem } from '../index';

import './styles.scss';

type TProps = {
  answers: string[];
};

const ChatList: React.FC<TProps> = ({ answers }) => {
  const chatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatRef.current && chatRef.current.scrollTo(0, 99999);
  }, [chatRef, answers]);

  return (
    <div ref={chatRef} className="chat-list">
      <div className="chat-list-inner">
        {answers?.length > 0 ? (
          answers?.map((a, i) => <ChatItem key={i} answer={a} />)
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </div>
    </div>
  );
};

export default ChatList;
