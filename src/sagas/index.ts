import { put, takeEvery, select, call } from 'redux-saga/effects';
import { ActionType } from '../types/ActionType';

function* keyGenerate() {}
function* keyImport() {}
function* keyExport() {}

export function* root() {
  yield takeEvery(ActionType.KEY_GENERATE, keyGenerate);
  yield takeEvery(ActionType.KEY_IMPORT, keyImport);
  yield takeEvery(ActionType.KEY_EXPORT, keyExport);
}
