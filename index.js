const inquirer = require('inquirer');
const { createLogo } = require('./lib/createLogo');

const runApplication = async () => {
  const answers = await inquirer.prompt([
    {
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => input.length <= 3 || 'Please enter up to three characters.',
    },
    {
      name: 'textColor',
      message: 'Enter the text color (color keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      name: 'shapeColor',
      message: 'Enter the shape color (color keyword or hexadecimal number):',
    },
  ]);

  await createLogo(answers);
};

runApplication();
