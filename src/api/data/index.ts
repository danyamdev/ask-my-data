import Cookies from 'js-cookie';

import { bffAxios } from '../index';

import { TFile, TTablePage } from '../types/data';

const dataAPI = {
  postUploadNewTable: () => bffAxios.post<{ token: string }>('/uploadNewTable'),

  getTableAnalysis: () => bffAxios.get<TFile>(`/getTableAnalysis?token=${Cookies.get('token')}`).then(res => res.data),

  getTablePage: (page: number) =>
    bffAxios
      .get<TTablePage>(`/getTablePage?token=${Cookies.get('token')}&page=${page}&rows_per_page=${3}`)
      .then(res => res.data),

  updateTableProperties: (properties: string) =>
    bffAxios.put(`/updateTableProperties?token=${Cookies.get('token')}&=${properties}`).then(res => res.data),
};

export default dataAPI;
