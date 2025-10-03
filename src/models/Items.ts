import { type CoOrd } from "./CoOrd";

export const itemTypes = {
  Fruit: 'Fruit',
  Bomb: 'Bomb'
} as const;

export type itemTypes = typeof itemTypes[keyof typeof itemTypes];

export interface Item {
  itemType: itemTypes;
  position: CoOrd;
  ateCallback: Function;
}

export class Fruit implements Item {
  itemType: itemTypes;
  position: CoOrd;
  ateCallback: Function;

  constructor(c: CoOrd, cb: Function) {
    this.itemType = itemTypes.Fruit
    this.position = c
    this.ateCallback = cb
  }
}
