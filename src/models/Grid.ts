import { type CoOrd } from "./CoOrd";

import type { Item } from "./Items";

export const CELL_TYPE = {
  WALL: 'WALL',
  EMPTY: 'EMPTY',
  SNAKE: 'SNAKE',
  ITEM: 'ITEM',
} as const

export type CELL_TYPE = typeof CELL_TYPE[keyof typeof CELL_TYPE];

export class GridCell {
  cellType: CELL_TYPE;
  cellObject: Item | null;

  constructor(type: CELL_TYPE = CELL_TYPE.EMPTY, obj: Item | null = null) {
    this.cellType = type;
    this.cellObject = obj;
  }

  setCellType(type: CELL_TYPE) {
    this.cellType = type;
  }

  setCellObject(obj: Item | null) {
    this.cellObject = obj;
  }
}

export class Grid {
  rows: number;
  cols: number;
  grid: GridCell[][];

  constructor(rows: number, cols: number, snakePosition: CoOrd[]) {
    this.rows = rows
    this.cols = cols

    this.grid = Array.from({ length: rows }, (_, row) =>
      Array.from({ length: cols }, (_, col) => {
        if (row === 0 || col === 0 || row === rows - 1 || col === cols - 1) {
          return new GridCell(CELL_TYPE.WALL)
        }
        if (snakePosition.some(coord => coord.x === col && coord.y === row)) {
          return new GridCell(CELL_TYPE.SNAKE)
        }
        return new GridCell()
      })
    );

  }

  getCellType(r: number, c: number): CELL_TYPE {
    return this.grid[r][c].cellType
  }

  getCellItemType(c: CoOrd){
    return this.getCell(c).cellObject?.itemType
  }

  getCell(c: CoOrd){
    return this.grid[c.y][c.x]
  }


  getRandomCoord(): CoOrd {
    function getRandomInt(min: number, max: number): number {
      const lower = Math.ceil(min)
      const upper = Math.floor(max)
      return Math.floor(Math.random() * (upper - lower + 1)) + lower
    }

    return {
      x: getRandomInt(1, this.cols - 1),
      y: getRandomInt(1, this.rows - 1)
    }
  }
}