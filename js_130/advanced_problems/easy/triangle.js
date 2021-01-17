class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3];

    if (this.sides.some(side => side <= 0) || side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1) {
      this.type = 'not a triangle'
    } else if (side1 === side2 && side2 === side3) {
      this.type = 'equilateral';
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      this.type = 'isosceles';
    } else {
      this.type = 'scalene';
    }
  }
  kind() {
    if (this.type === 'not a triangle') {
      throw new Error();
    } else {
      return this.type;
    }
  }
}

module.exports = Triangle;