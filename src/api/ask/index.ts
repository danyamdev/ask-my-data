import Cookies from 'js-cookie';

import { bffAxios } from '../index';

import { TAsk } from '../types/ask';

const askAPI = {
  postAsk: (query: string) =>
    bffAxios.post<TAsk>(`/ask?token=${Cookies.get('token')}&query=${query}`).then(res => res.data),
};

export default askAPI;
