import { bffAxios } from '../index';

import { TFile } from '../types/data';

const dataAPI = {
  postUploadNewTable: () => bffAxios.post<TFile>('/uploadNewTable'),
};

export default dataAPI;
