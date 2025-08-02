/* ---------- External ---------- */
import { Remarkable } from 'remarkable';

/* ---------- Types ---------- */
import { Models } from '_@types';

/* ---------- Utils ---------- */
import { highlight } from './highlight';

export const setup_post = (post: Models.BlogPost) => {
  const remarkable = new Remarkable({
    highlight,
    html: true,
    typographer: true,
  });

  return {
    ...post,
    content: remarkable.render(post.body),
  };
};
