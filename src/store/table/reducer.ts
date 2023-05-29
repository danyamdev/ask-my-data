import { TTableAction, TTableState } from '../../types/table';

const initialState: TTableState = {
  table: {
    info: {
      columns: '',
      datetime: '',
      description: '',
      file_extension: '',
      filename: '',
      headers: '',
      invalid: '',
      missing: '',
      outliers: '',
      rows: '',
      target: '',
    },
  },
  loading: true,
  error: null,
};
