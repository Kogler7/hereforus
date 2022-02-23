const factor = 180 / Math.PI;

export default class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(v) {
    return new Vector(this.x + v.x, this.y + v.y);
  }

  minus(v) {
    return new Vector(this.x - v.x, this.y - v.y);
  }

  multi(s) {
    return new Vector(this.x * s, this.y * s);
  }

  divide(s) {
    return new Vector(this.x / s, this.y / s);
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  deg() {
    let degree = Math.atan(this.y / this.x) * factor;
    return this.x >= 0 ? degree + 180 : degree;
  }

  len2() {
    return this.x * this.x + this.y * this.y;
  }

  len() {
    return Math.sqrt(this.len2());
  }

  norm() {
    return this.divide(this.len());
  }

  info() {
    return "len:" + this.len().toFixed(3) + "; deg:" + this.deg().toFixed(1);
  }
}