import { Direction } from "./Direction";
import { type CoOrd } from "./CoOrd";
import _ from 'lodash'

export class Snake {
  positions: CoOrd[];
  direction: Direction;

  constructor(initialCoord: CoOrd[]) {
    this.positions = _.cloneDeep(initialCoord)
    this.direction = Direction.Up;
  }

  setDirection(d: Direction) {
    this.direction = d
  }

  getNewCoordinate() {
    // get head
    const head = this.getHead()

    switch (this.direction) {
      case Direction.Up:
        return this.getUp(head)
      case Direction.Down:
        return this.getDown(head)
      case Direction.Left:
        return this.getLeft(head)
      case Direction.Right:
        return this.getRight(head)
    }
  }

  moveToCoord(c: CoOrd, grow = false) {
    let tail: CoOrd | undefined = undefined;
    if (!grow) { 
      tail = this.positions.pop() 
    }
    this.positions.unshift(c)
    return tail
  }

  private getHead(): CoOrd {
    return {
      x: this.positions[0].x,
      y: this.positions[0].y,
    }
  }

  private getUp(head: CoOrd) {
    return {
      x: head.x,
      y: head.y - 1,
    }
  }

  private getDown(head: CoOrd) {
    return {
      x: head.x,
      y: head.y + 1,
    }
  }

  private getLeft(head: CoOrd) {
    return {
      x: head.x - 1,
      y: head.y,
    }
  }

  private getRight(head: CoOrd) {
    return {
      x: head.x + 1,
      y: head.y,
    }
  }

  ifValidDirection(d: Direction) {
    if (this.positions.length === 1) { return true }
    switch (d) {
      case Direction.Up:
        return (this.direction !== Direction.Down)
      case Direction.Down:
        return (this.direction !== Direction.Up)
      case Direction.Left:
        return (this.direction !== Direction.Right)
      case Direction.Right:
        return (this.direction !== Direction.Left)
    }
  }

}
