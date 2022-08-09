import { Const } from './Const';

export function makeId(...keywords: string[]): string {
  return [Const.AppName, ...keywords].join('-');
}
