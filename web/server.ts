import Nullstack, { NullstackServerContext } from 'nullstack';

import Application from './src/Application';
import { plugins } from 'plugins';

const context = Nullstack.start(Application) as NullstackServerContext;

context.start = async function start() {
  // https://nullstack.app/application-startup
};

const { project } = context;

project.shortName = 'Moureau';
project.name = 'Moureau Dev';
project.color = '#1b1f24';
project.backgroundColor = '#1b1f24';
project.orientation = 'portrait';
project.display = 'standalone';
project.type = 'website';
project.favicon = '/img/favicon.png';

export default context;

plugins.forEach(Nullstack.use);
