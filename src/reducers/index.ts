import { Store } from 'redux';

import { ActionModel } from '../types/Models';
import { Key } from 'openpgp';

export interface StateType {
  keys: Key[];
}

let initialState: StateType = {
  keys: [],
};

export type StoreType = Store<StateType, ActionModel>;

export function applicationState(state = initialState, action: ActionModel) {
  const newState = { ...state };

  switch (action.type) {
    default:
      return state;
  }

  return newState;
}
