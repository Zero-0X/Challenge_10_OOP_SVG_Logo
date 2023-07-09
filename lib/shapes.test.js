const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  test('renders the circle SVG with the given color', () => {
    const color = '#FF0000';
    const circle = new Circle(color);
    expect(circle.render().tostring()).toBe(`<circle fill="${color}" cx="150" cy="100" r="50"></circle>`);
  });
});

describe('Triangle', () => {
  test('renders the triangle SVG with the given color', () => {
    const color = '#00FF00';
    const triangle = new Triangle(color);
    expect(triangle.render().tostring()).toBe(
      `<polygon fill="${color}" points="75,20 225,20 150,180"></polygon>`
    );
  });
});

describe('Square', () => {
  test('renders the square SVG with the given color', () => {
    const color = '#0000FF';
    const square = new Square(color);
    expect(square.render().tostring()).toBe(`<rect fill="${color}" width="150" height="160" x="75" y="20"></rect>`);
  });
});
