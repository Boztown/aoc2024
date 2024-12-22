export class Matrix {
  constructor(private readonly matrix: string[][]) {}

  public get(point: Point): string | undefined {
    return this.matrix[point.y]?.[point.x];
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
      line.push(this.get({ x, y }));
    }

    return line;
  }

  public getAllLinesFromPoint({
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

  public expandHorizontalFromPoint(point: Point, n: number) {
    const expandedLine = [];
    // Backwards
    for (let i = 1; i <= n; i++) {
      expandedLine.push(
        this.get({ x: point.x - (n - (i - 1)), y: point.y }) || "-"
      );
    }

    // Current
    expandedLine.push(this.get(point) || "-");

    // Forwards
    for (let i = 1; i <= n; i++) {
      expandedLine.push(this.get({ x: point.x + i, y: point.y }) || "-");
    }
    return expandedLine;
  }

  public getSurroudingMatrix(point: Point, length: number) {
    const buildUp = [];

    for (let i = 1; i <= length; i++) {
      buildUp.push(
        this.expandHorizontalFromPoint(
          { x: point.x, y: point.y + (length - (i - 1)) },
          length
        )
      );
    }

    buildUp.push(this.expandHorizontalFromPoint(point, length));

    for (let i = 1; i <= length; i++) {
      buildUp.push(
        this.expandHorizontalFromPoint({ x: point.x, y: point.y - i }, length)
      );
    }

    return new Matrix(buildUp);
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

  public print() {
    this.matrix.forEach((row) => console.log(row));
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
