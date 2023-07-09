const fs = require('fs');
const inquirer = require('inquirer');

const createLogo = async (answers) => {
  const { text, textColor, shape, shapeColor } = answers;

  let svgContent;

  switch (shape) {
    case 'circle':
      svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="50" fill="${shapeColor}" />
        <text x="150" y="110" text-anchor="middle" fill="${textColor}" font-size="40px" font-family="sans-serif">${text}</text>
      </svg>`;
      break;
    case 'triangle':
      svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="75,20 225,20 150,180" fill="${shapeColor}" />
        <text x="150" y="110" text-anchor="middle" fill="${textColor}" font-size="40px" font-family="sans-serif">${text}</text>
      </svg>`;
      break;
    case 'square':
      svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="75" y="20" width="150" height="160" fill="${shapeColor}" />
        <text x="150" y="110" text-anchor="middle" fill="${textColor}" font-size="40px" font-family="sans-serif">${text}</text>
      </svg>`;
      break;
  }

  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
};

module.exports = { createLogo };
