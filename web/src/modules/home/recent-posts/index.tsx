/* ---------- External ---------- */
import Nullstack, { NullstackClientContext } from 'nullstack';

/* ---------- Types ---------- */
import { Language, Models } from '_@types';

/* ---------- Common Components ---------- */
import { Link } from '_common/components/Link';
import { SectionTitle } from '_common/components/SectionTitle';
import { ShownDate } from '_common/components/ShownDate';

/* ---------- Styles ---------- */
import './styles.css';

/* ---------- Interfaces ---------- */
interface Props {
  language: Language;
}

export class RecentPosts extends Nullstack<Props> {
  /* ---------- Renderers ---------- */
  renderPost({ id, created_at, title }: Models.BlogPost) {
    return (
      <a class="recent-post" href={`/blog/post/${id}`}>
        <ShownDate date={new Date(created_at)} label="Articles" />

        <h3>{title}</h3>
      </a>
    );
  }

  render({ settings, language }: NullstackClientContext<Props>) {
    return (
      <section id="blog">
        <div class="row content">
          <div class="column">
            <SectionTitle title="Blog" href="#blog" />

            <h3>Check out my latest articles and tutorials</h3>

            <Link href="/blog" size="large">
              Browse all articles
            </Link>
          </div>

          <ul>
            {((settings.blog_posts as unknown as Models.BlogPost[]) || [])
              .filter(
                ({ language: post_language }) => post_language === language,
              )
              .slice(0, 3)
              .map(post => (
                <li>{this.renderPost(post)}</li>
              ))}
          </ul>
        </div>
      </section>
    );
  }
}
