import React, { useCallback, useState } from 'react';

import { ChatList, Hint, Input } from './components';

import askAPI from '../../api/ask';
import { TAsk, THint } from '../../api/types/ask';

import './styles.scss';

const Chat: React.FC = () => {
  const [hint, setHint] = useState<THint>();
  const [answers, setAnswers] = useState<TAsk[]>([]);

  const onClick = useCallback(async (query: string) => {
    try {
      const { data } = await askAPI.postAsk(query);
      setAnswers(prevState => [...prevState, data]);
    } catch (e) {
      window.console.log(e);
    }
  }, []);

  return (
    <div className="chat">
      <div className="chat-inner">
        <ChatList answers={answers} />
        <Hint />
        <Input onClick={onClick} />
      </div>
    </div>
  );
};

export default Chat;
