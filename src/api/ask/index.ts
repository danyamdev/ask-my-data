import { bffAxios } from '../index';

import { TAsk } from '../types/ask';

const askAPI = {
  postAsk: (query: string) => bffAxios.post<TAsk>(`/ask?query=${query}`),
};

export default askAPI;
