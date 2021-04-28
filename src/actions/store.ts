import { ActionType } from '../types/ActionType';
import { ActionModel } from '../types/Models';

export function storeUnlockAction(password: string): ActionModel {
  return {
    type: ActionType.STORE_UNLOCK,
    value: password,
  };
}

export function storeLockAction(password?: string): ActionModel {
  return {
    type: ActionType.STORE_LOCK,
    value: password,
  };
}
