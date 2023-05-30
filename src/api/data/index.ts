import Cookies from 'js-cookie';

import { bffAxios } from '../index';

import { TFile, TTablePage } from '../types/data';

const dataAPI = {
  postUploadNewTable: () => bffAxios.post<TFile>('/uploadNewTable'),
  getTableAnalysis: () => bffAxios.get<TFile>(`/getTableAnalysis?token=${Cookies.get('token')}`).then(res => res.data),
  getTablePage: ({ page, rowsPerPage }: { page: number; rowsPerPage: number }) =>
    bffAxios
      .get<TTablePage>(`/getTablePage?token=${Cookies.get('token')}&page=${page}&rows_per_page=${rowsPerPage}`)
      .then(res => res.data),
};

export default dataAPI;
