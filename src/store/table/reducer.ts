import { TableActionTypes, TTableAction, TTableState } from '../../types/table';

const initialState: TTableState = {
  table: {
    chat: [],
    columns: 0,
    datetime: '',
    description: '',
    file_extension: '',
    filename: '',
    headers: [],
    invalid: 0,
    missing: 0,
    outliers: 0,
    rows: 0,
    target: 0,
    data: [],
    pages: 0,
  },
  loading: true,
  error: null,
};

export const reducer = (state: TTableState = initialState, action: TTableAction) => {
  switch (action.type) {
    case TableActionTypes.SET_TABLE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case TableActionTypes.SET_TABLE_SUCCESS:
      return {
        ...state,
        table: action.payload,
        loading: false,
      };

    case TableActionTypes.SET_TABLE_DATA_SUCCESS:
      return {
        ...state,
        table: {
          ...state.table,
          ...action.payload,
        },
        loading: false,
      };

    case TableActionTypes.SET_TABLE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
