import Nullstack, { NullstackServerContext } from 'nullstack';
import { RecurrenceRule, scheduleJob } from 'node-schedule';
import { Remarkable } from 'remarkable';
import RemarkableEmoji from 'remarkable-emoji';

import Application from './src/Application';
import { plugins } from 'plugins';

import { highlight } from './src/utils/highlight';
import { Models } from '_@types';

const context = Nullstack.start(Application) as NullstackServerContext;

const rule = new RecurrenceRule();
rule.minute = 10;

const job = scheduleJob(rule, async () => {
  console.log('Fetching threads...');

  try {
    const response = await fetch(`${secrets.apiEndpoint}/blog/posts`, {
      keepalive: true,
    });

    const { posts } = await response.json();

    if (!posts) return;

    console.log('Posts fetched !');

    context.settings.blog_posts = (posts || [])
      .map((post: Models.BlogPost) => {
        const remarkable = new Remarkable({
          highlight,
          html: true,
          typographer: true,
        });

        return {
          ...post,
          body: remarkable.render(post.body),
        };
      })
      .filter(Boolean)
      .sort(
        (a: Models.BlogPost, b: Models.BlogPost) => b.created_at.localeCompare(a.created_at),
      );
  } catch (error) {
    console.error({ error });
  }
});

context.start = async function start() {
  // https://nullstack.app/application-startup

  job.invoke();
};

const { project, worker, secrets } = context;

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

function parseMetadata(string_metadata: string) {
  const data = {};

  const lines: string[] = string_metadata?.trim().split('\n');

  for (const line of lines || []) {
    const [key, value, ...value_parts] = line
      .split(':')
      .map(item => item.trim());

    data[key] = `${value}:${value_parts.join(':')}`.slice(0, -1);
  }

  return data;
}

export default context;

plugins.forEach(Nullstack.use);
