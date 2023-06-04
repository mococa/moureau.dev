/* ---------- External ---------- */
import Nullstack, { NullstackClientContext } from 'nullstack';

/* ---------- Types ---------- */
import { Language, Models } from '_@types';

/* ---------- Common Components ---------- */
import { Link } from '_common/components/Link';
import { SectionTitle } from '_common/components/SectionTitle';
import { ShownDate } from '_common/components/ShownDate';

/* ---------- Translations ---------- */
import { translations } from '_utils/translations';

/* ---------- Styles ---------- */
import './styles.css';

/* ---------- Interfaces ---------- */
interface Props {
  language: Language;
}

export class RecentPosts extends Nullstack<Props> {
  /* ---------- Renderers ---------- */
  renderPost({ id, created_at, title, language }: Models.BlogPost) {
    return (
      <a class="recent-post" href={`/blog/post/${id}`}>
        <ShownDate
          date={new Date(created_at)}
          label="Articles"
          language={language}
        />

        <h3>{title}</h3>
      </a>
    );
  }

  /* ---------- Render ---------- */
  render({ settings, language }: NullstackClientContext<Props>) {
    const { title, button } = translations.latest_articles;

    return (
      <section id="blog">
        <div class="row content">
          <div class="column">
            <SectionTitle title="Blog" href="#blog" />

            <h3>{title[language]}</h3>

            <Link href="/blog" size="large">
              {button[language]}
            </Link>
          </div>

          <ul>
            {((settings.blog_posts as unknown as Models.BlogPost[]) || [])
              .filter(
                ({ language: post_language }) => post_language === language,
              )
              .slice(0, 3)
              .map(post => (
                <li>{this.renderPost({ ...post, language })}</li>
              ))}
          </ul>
        </div>
      </section>
    );
  }
}
