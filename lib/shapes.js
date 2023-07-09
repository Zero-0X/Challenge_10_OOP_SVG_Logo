const SVG = require('svg.js');

class Shape {
  constructor(color) {
    this.color = color;
  }

  render() {
    throw new Error('render() method must be implemented by the child class.');
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return SVG().circle().fill(this.color).center(150, 100).radius(50);
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return SVG().polygon().fill(this.color).plot([[75, 20], [225, 20], [150, 180]]);
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return SVG().rect().fill(this.color).width(150).height(160).move(75, 20);
  }
}

module.exports = { Shape, Circle, Triangle, Square };
