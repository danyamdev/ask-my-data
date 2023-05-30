import { useEffect, useRef } from 'react';

const useChatList = (answers: string[]) => {
  const chatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatRef.current && chatRef.current.scrollTo(0, 99999);
  }, [chatRef, answers]);

  return { chatRef };
};

export default useChatList;
