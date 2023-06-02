/* ---------- External ---------- */
import Nullstack, { NullstackClientContext } from 'nullstack';
import { formatRelative } from 'date-fns';
import enGB from 'date-fns/locale/en-GB/index';

/* ---------- Types ---------- */
import { Language, Models } from '_@types';

/* ---------- Common Components ---------- */
import { Link } from '_common/components/Link';
import { SectionTitle } from '_common/components/SectionTitle';

/* ---------- Styles ---------- */
import './styles.css';
import { ShownDate } from '_common/components/ShownDate';

const format_relative_locale: { [key: string]: string } = {
  yesterday: "'Yesterday'", // Yesterday, 07:19 AM
  today: "'Today'", // Today, 12:09 PM
  other: 'dd/MM', // 12/02, 01:04 PM
  other_year: 'dd/MM/yyyy', // 12/02/2001, 3:15 PM
};

const locale = {
  ...enGB,
  formatRelative: (token: string, string_date: string) => {
    const date = new Date(string_date);

    if (date.getFullYear() !== new Date().getFullYear()) {
      return format_relative_locale.other_year;
    }

    const formatting = format_relative_locale[token];

    return formatting || format_relative_locale.other;
  },
};

/* ---------- Interfaces ---------- */
interface Props {
  language: Language;
}

export class RecentPosts extends Nullstack<Props> {
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
