import { type IdValue } from './types';

export function isChecked(checkedIds: IdValue[], idValue: IdValue): boolean {
  return checkedIds.includes(idValue);
}
