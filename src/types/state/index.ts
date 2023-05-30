import { TChatState } from '../chat';
import { TTableState } from '../table';

export type TState = {
  chat: TChatState;
  table: TTableState;
};
