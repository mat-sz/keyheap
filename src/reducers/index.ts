import { Store } from 'redux';
import { ActionType } from '../types/ActionType';

import { ActionModel, KeyModel } from '../types/Models';

export interface StateType {
  keys: KeyModel[];
  selectedKeyId?: string;
  locked: boolean;
}

let initialState: StateType = {
  keys: [],
  locked: false,
};

export type StoreType = Store<StateType, ActionModel>;

export function applicationState(state = initialState, action: ActionModel) {
  const newState = { ...state };

  switch (action.type) {
    case ActionType.KEY_SELECT:
      newState.selectedKeyId = action.value as string;
      break;
    case ActionType.KEY_REMOVE:
      break;
    default:
      return state;
  }

  return newState;
}
