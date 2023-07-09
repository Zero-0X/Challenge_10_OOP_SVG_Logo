const SVG = require('svg.js');
const { Circle, Triangle, Square } = require('./shapes');

const createLogo = async (answers) => {
  const { text, textColor, shape, shapeColor } = answers;

  const svg = SVG().size(300, 200);

  // Draw the shape
  let shapeObj;
  switch (shape) {
    case 'circle':
      shapeObj = new Circle(shapeColor);
      svg.add(shapeObj.render());
      break;
    case 'triangle':
      shapeObj = new Triangle(shapeColor);
      svg.add(shapeObj.render());
      break;
    case 'square':
      shapeObj = new Square(shapeColor);
      svg.add(shapeObj.render());
      break;
  }

  // Add the text
  svg.text(text).fill(textColor).font({ size: '40px', anchor: 'middle', leading: '1.2em' }).center(150, 110);

  // Save the SVG file
  svg.svg().toFile('logo.svg');
  console.log('Generated logo.svg');
};

module.exports = { createLogo };
