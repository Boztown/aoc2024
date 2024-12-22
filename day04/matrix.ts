export class Matrix {
  constructor(private readonly matrix: string[][]) {}

  public get(x: number, y: number): string | undefined {
    return this.matrix[y]?.[x];
  }

  public getLineFromPoint({
    point,
    count,
    direction,
  }: {
    point: Point;
    count: number;
    direction: string;
  }) {
    const line = [];
    const vector = Directions[direction];

    for (let i = 0; i < count; i++) {
      const x = point.x + vector.x * i;
      const y = point.y + vector.y * i;
      console.log(x, y);
      line.push(this.get(x, y));
    }

    return line;
  }
}

type Vector = { x: number; y: number };
type Point = { x: number; y: number };

export const Directions: Record<string, Vector> = {
  Up: { x: 0, y: -1 },
  Down: { x: 0, y: 1 },
  Left: { x: -1, y: 0 },
  Right: { x: 1, y: 0 },
  UpLeft: { x: -1, y: -1 },
  UpRight: { x: 1, y: -1 },
  DownLeft: { x: -1, y: 1 },
  DownRight: { x: 1, y: 1 },
};
