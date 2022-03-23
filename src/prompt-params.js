const inquirer = require('inquirer');

module.exports = async (config) => {

  const questions = [];

  if (!config.name) {
    questions.push({
      type: 'input',
      name: 'name',
      message: 'Package name'
    });
  }

  if (!config.description) {
    questions.push({
      type: 'input',
      name: 'description',
      message: 'Short description'
    });
  }

  if (!config.author) {
    questions.push({
      type: 'input',
      name: 'author',
      message: 'Author'
    });
  }

  if (!config.template) {
    questions.push({
      type: 'list',
      name: 'template',
      message: 'Template',
      choices: ['Starter', 'KanbanApp']
    });
  }

  const promptOptions = await inquirer.prompt(questions);

  return promptOptions;
}