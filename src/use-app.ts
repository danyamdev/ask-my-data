import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';

import { TOKEN } from './constants';
import { fetchChatAction } from './store/chat/actions';
import { useChatSelector } from './store/chat/selectors';

const useApp = () => {
  const dispatch = useDispatch();

  const { chat, error, loading } = useChatSelector();

  useEffect(() => {
    Cookies.set('token', TOKEN);

    dispatch(fetchChatAction(''));
  }, []);
};

export default useApp;
