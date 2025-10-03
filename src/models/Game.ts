import { Grid } from "./Grid";
import { Snake } from "./Snake";
import { Fruit, itemTypes, type Item } from "./Items";
import { type CoOrd } from "./CoOrd";
import { Direction } from "./Direction";
import { CELL_TYPE } from "./Grid";
import { type GameConfig } from "./Config";
import logger from '@snake/utils/logger.ts'

export const GAME_STATE = {
  DEFAULT: 'DEFAULT',
  DIE: 'DIE',
  ONGOING: 'ONGOING'
} as const

export type GAME_STATE = typeof GAME_STATE[keyof typeof GAME_STATE];

export class Game {
  snake: Snake;
  grid: Grid;
  gameState: GAME_STATE;
  isLocked: Boolean;
  intervalId: number;
  score: number;
  gameInterval: number;

  constructor(config: GameConfig) {
    this.snake = new Snake(config.snakePosition)
    this.grid = new Grid(config.rows, config.cols, config.snakePosition)
    this.gameState = GAME_STATE.DEFAULT
    this.isLocked = false
    this.intervalId = -1
    this.gameInterval = config.interval
    this.score = 0
  }

  changeSnakeDirection(d: Direction) {
    if (this.isLocked) { return; }
    if (!this.snake.ifValidDirection(d)) { return; }
    this.isLocked = true;
    this.snake.setDirection(d)
  }

  handleGameEnd() {
    alert('You lost 😞')
    clearInterval(this.intervalId)
  }

  handleGetItem(newCoord: CoOrd) {
    const itemType = this.grid.getCellItemType(newCoord)

    switch (itemType) {
      case itemTypes.Fruit:
        let fruit = this.grid.getCell(newCoord).cellObject as Item
        fruit.ateCallback(newCoord)
    }

    this.generateRandomFruit()
  }

  moveSnake() {
    const newCoord = this.snake.getNewCoordinate()
    const newCoordCellType = this.grid.getCellType(newCoord.y, newCoord.x)

    logger.log('Game.ts', `Moving Snake to ${JSON.stringify(newCoord)}, ${newCoordCellType}`)


    switch (newCoordCellType) {
      case CELL_TYPE.SNAKE: {
        this.handleGameEnd()
        return;
      }
      case CELL_TYPE.WALL: {
        this.handleGameEnd()
        return;
      }
      case CELL_TYPE.ITEM: {
        this.handleGetItem(newCoord)
        return;
      }
      default: {
        let tail = this.snake.moveToCoord(newCoord)
        if (tail) { // grow = false
          this.grid.grid[newCoord.y][newCoord.x].setCellType(CELL_TYPE.SNAKE)
          this.grid.grid[tail.y][tail.x].setCellType(CELL_TYPE.EMPTY)
        }
        this.isLocked = false;
        break;
      }
    }

  }

  startGame() {
    logger.log('Game.ts', 'Starting Game...')

    if (this.gameState === GAME_STATE.ONGOING) { return; }
    this.gameState = GAME_STATE.ONGOING
    this.intervalId = setInterval(
      () => this.moveSnake(), this.gameInterval
    )
  }

  generateRandomFruit() {
    let destination = this.grid.getRandomCoord()
    let destCellType = this.grid.getCellType(destination.y, destination.x)
    while (destCellType !== CELL_TYPE.EMPTY) {
      destination = this.grid.getRandomCoord()
      destCellType = this.grid.getCellType(destination.y, destination.x)
    }
    this.generateFruit(destination)
  }

  private generateFruit(c: CoOrd) {
    const targetCell = this.grid.grid[c.y][c.x]
    targetCell.setCellType(CELL_TYPE.ITEM)
    targetCell.setCellObject(new Fruit(c, (newCoord: CoOrd) => {
      this.score = this.score + 1
      this.grid.grid[newCoord.y][newCoord.x].setCellType(CELL_TYPE.SNAKE)
      this.snake.moveToCoord(newCoord, true)
    }))
  }
}