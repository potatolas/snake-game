import type { CoOrd } from "./CoOrd";

export const INIT_ROWS = 21
export const INIT_COLS = 21
export const INITIAL_SLIDER_VALUE = 800
export const MAX_SLIDER_VALUE = 1200
export const MIN_SLIDER_VALUE = 200
export const MIN_INTERVAL = 100

export interface GameConfig {
  rows: number,
  cols: number,
  snakePosition: CoOrd[],
  interval: number
}

export function getInitConfig(): GameConfig {
  return {
    rows: INIT_ROWS,
    cols: INIT_COLS,
    snakePosition: getInitSnakePosition(INIT_ROWS, INIT_COLS),
    interval: calculateInterval(INITIAL_SLIDER_VALUE)
  }
}

function getInitSnakePosition(r: number, c: number) {
  return [{
    x: (r - 1) / 2,
    y: (c - 1) / 2
  },
  {
    x: (r - 1) / 2,
    y: ((c - 1) / 2) + 1
  }] as CoOrd[]
}

export function calculateInterval(inputValue: number) {
  return (MAX_SLIDER_VALUE / inputValue) * MIN_INTERVAL;
}