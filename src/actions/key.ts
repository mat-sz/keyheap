import { ActionType } from '../types/ActionType';
import { ActionModel } from '../types/Models';

export function keyGenerateAction(): ActionModel {
  return {
    type: ActionType.KEY_GENERATE,
    value: undefined,
  };
}

export function keyImportAction(data: string): ActionModel {
  return {
    type: ActionType.KEY_IMPORT,
    value: data,
  };
}

export function keyExportAction(id: string): ActionModel {
  return {
    type: ActionType.KEY_EXPORT,
    value: id,
  };
}

export function keyRemoveAction(id: string): ActionModel {
  return {
    type: ActionType.KEY_REMOVE,
    value: id,
  };
}

export function keySelectAction(id: string): ActionModel {
  return {
    type: ActionType.KEY_SELECT,
    value: id,
  };
}
