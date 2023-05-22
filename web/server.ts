import Nullstack, { NullstackServerContext } from 'nullstack';

import Application from './src/Application';
import { plugins } from 'plugins';

const context = Nullstack.start(Application) as NullstackServerContext;

context.start = async function start() {
  // https://nullstack.app/application-startup
};

const { project, worker } = context;

project.shortName = 'Moureau';
project.name = 'Moureau';
project.color = '#1b1f24';
project.backgroundColor = '#1b1f24';
project.orientation = 'portrait';
project.display = 'standalone';
project.type = 'website';
project.favicon = '/img/favicon.png';

const flags_regex = [
  /https\:\/\/hatscripts\.github\.io\/circle\-flags\/flags\/br.svg/,
  /https\:\/\/hatscripts\.github\.io\/circle\-flags\/flags\/fr.svg/,
  /https\:\/\/hatscripts\.github\.io\/circle\-flags\/flags\/es.svg/,
  /https\:\/\/hatscripts\.github\.io\/circle\-flags\/flags\/uk.svg/,
];

worker.staleWhileRevalidate = [...flags_regex];

export default context;

plugins.forEach(Nullstack.use);
