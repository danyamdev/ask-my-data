import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';

import { TOKEN } from './constants';
import { fetchChatAction } from './store/chat/actions';
import { useChatSelector } from './store/chat/selectors';
import { fetchTableAction } from './store/table/actions';
import { useTableSelector } from './store/table/selectors';

const useApp = () => {
  const dispatch = useDispatch();

  const { loading: loadingChat } = useChatSelector();
  const { loading: loadingTable } = useTableSelector();

  useEffect(() => {
    Cookies.set('token', TOKEN);

    dispatch(fetchTableAction());
    dispatch(fetchChatAction(''));
  }, []);

  return { loadingChat, loadingTable };
};

export default useApp;
