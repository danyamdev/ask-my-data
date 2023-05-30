import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Cookies from 'js-cookie';

import { TOKEN } from './constants';
import { fetchChatAction } from './store/chat/actions';
import { useChatSelector } from './store/chat/selectors';
import { fetchTableAction } from './store/table/actions';
import { useTableSelector } from './store/table/selectors';

const useApp = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const { loading: loadingChat } = useChatSelector();
  const { loading: loadingTable } = useTableSelector();

  useEffect(() => {
    const token = searchParams.get('token');
    Cookies.set('token', token !== null ? token : TOKEN);

    dispatch(fetchTableAction());
    dispatch(fetchChatAction(''));
  }, [searchParams]);

  return { loadingChat, loadingTable };
};

export default useApp;
