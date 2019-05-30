let a: number;
let b: string;
let c: boolean;
let d: string[];

enum color {
  red,
  green,
  blue
}
console.log(color.green.toExponential());

let message: any;
message.toLowerCase();
let c = message as string;

class Point {
  private x: number;
  y: number;
  draw() {
    console.log(this.x);
  }
  constructor(x?: number) {
    this.x = x;
  }
}

let point = new Point(1);
let point1 = new Point();

point1.draw();

// Some Changes to Test
//second Push
