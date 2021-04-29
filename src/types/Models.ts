import { Key } from 'openpgp';
import { ActionType } from './ActionType';

export interface ActionModel {
  type: ActionType;
  value: any;
}

export interface KeyModel {
  id: string;
  key: Key;
}
