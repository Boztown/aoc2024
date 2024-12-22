export class Matrix {
  constructor(private readonly matrix: string[][]) {}

  public get(x: number, y: number): string | undefined {
    return this.matrix[y]?.[x];
  }

  public getLineFromPoint({
    point,
    lineLength,
    direction,
  }: {
    point: Point;
    lineLength: number;
    direction: string;
  }) {
    const line = [];
    const vector = Directions[direction];

    for (let i = 0; i < lineLength; i++) {
      const x = point.x + vector.x * i;
      const y = point.y + vector.y * i;
      line.push(this.get(x, y));
    }

    return line;
  }

  getAllLinesFromPoint({
    point,
    count: lineLength,
  }: {
    point: Point;
    count: number;
  }) {
    const lines: Record<string, (string | undefined)[]> = {};

    for (const direction in Directions) {
      const line = this.getLineFromPoint({ point, lineLength, direction });
      lines[direction] = line;
    }

    return lines;
  }

  public iteratePoints(callback: (point: Point) => void) {
    for (let r = 0; r < this.matrix.length; r++) {
      const row = this.matrix[r];
      for (let c = 0; c < row.length; c++) {
        const col = this.matrix[r][c];
        const point: Point = { x: c, y: r };
        callback(point);
      }
    }
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
