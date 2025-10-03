export const Direction = {
  Up: 'Up',
  Down: 'Down',
  Left: 'Left',
  Right: 'Right'
} as const;

export type Direction = typeof Direction[keyof typeof Direction];
