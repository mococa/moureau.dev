import Nullstack, { NullstackServerContext } from 'nullstack';
import { RecurrenceRule, scheduleJob } from 'node-schedule';

import Application from '_Application';
import { plugins } from 'plugins';
import { services } from 'services';
import { setup_post } from '_utils/setup-post';

const context = Nullstack.start(Application) as NullstackServerContext;

const rule = new RecurrenceRule();
rule.minute = 10;

const job = scheduleJob(rule, async () => {
  console.log('Fetching threads...');

  try {
    const { data } = await services.blog.getPosts();

    console.log('Posts fetched !');

    context.settings.blog_posts = (data.posts || [])
      .map(setup_post)
      .sort(({ updated_at }, next_post) =>
        next_post.updated_at.localeCompare(updated_at),
      );
  } catch (error) {
    console.error({ error });
  }
});

context.services = services;

context.start = async function start() {
  // https://nullstack.app/application-startup
  job.invoke();
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
  /\/fonts\/Spacegrotesk\/SpaceGrotesk\-Bold\.ttf/,
  /\/fonts\/Spacegrotesk\/SpaceGrotesk\-Regular\.ttf/,
  /\/fonts\/Spacegrotesk\/SpaceGrotesk\-Medium\.ttf/,
];

worker.staleWhileRevalidate = [...flags_regex];

export default context;

plugins.forEach(Nullstack.use);
