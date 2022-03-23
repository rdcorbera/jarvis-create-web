const program = require('commander');
const getDefaultParams = require('./default-params');
const getPromptParams = require('./prompt-params');

const defaultParams = getDefaultParams();

program
  .name('jarvis-create-web')
  .version('0.0.1')
  .usage('[options] [web-app-name]')
  .option('-n, --name <string>', 'Application name')
  .option('-d, --description <string>', 'Short description')
  .option('-a, --author <string>', 'Author')
  .option('-t, --template <string>', 'Template')
  .parse();

const init = async () => {

  console.log();
  console.log('Welcome to Jarvis Web App Creator Wizard');

  let config = getProgramParams(defaultParams);

  const promptParams = await getPromptParams(config);

  config = { ...config, ...promptParams };

  console.log(config);

  console.log();
}

const getProgramParams = (config) => {
  let options = program.opts();

  Object.keys(config).forEach((k) => {
    if (options[k]) {
      config[k] = options[k];
    }
  });

  if (program.args.length > 0) {
    console.log('Invalid arguments');
    program.help();
    program.exit(1);
  }

  return config;
}

init();