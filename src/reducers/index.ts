import { Store } from 'redux';

import { ActionModel, KeyModel } from '../types/Models';

export interface StateType {
  keys: KeyModel[];
  selectedKeyId?: string;
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
