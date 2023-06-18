/* ---------- External ---------- */
import Nullstack, { NullstackClientContext } from 'nullstack';
import { enUS as en, fr, es, ptBR as pt } from 'date-fns/esm/locale';
import { formatRelative } from 'date-fns';

/* ---------- Types ---------- */
import { Language } from '_@types';

/* ---------- Common Components ---------- */
import { Card } from '_common/components/Card';
import { Navbar } from '_common/components/Navbar';
import { Footer } from '_common/components/Footer';

/* ---------- Translations ---------- */
import { translations } from '_utils/translations';

/* ---------- Styles ---------- */
import './styles.css';

/* ---------- Interfaces ---------- */
interface Props {
  language: Language;
}

export class Blog extends Nullstack<Props> {
  /* ---------- Life cycle ---------- */
  initiate({ page }: NullstackClientContext<Props>) {
    page.title = 'Moureau - Blog';
    page.description =
      "Welcome to my blog. Here I'll share my knowledge about web development and other stuff I'm interested in.\nYou can find articles and tutorials in English, Portuguese, French and Spanish here.";
  }

  /* ---------- Renderers ---------- */
  renderArticles({
    settings,
    language,
  }: Partial<NullstackClientContext<Props>>) {
    return (
      <div class="blog-posts">
        {settings.blog_posts
          .filter(post => post.language === language)
          .map(post => (
            <Card
              title={post.title}
              description={`${post.description.slice(0, 80)}${
                post.description.length > 80 ? '...' : ''
              }`}
              url={`/blog/post/${post.id}`}
              image={post.image}
              target="_self"
              label="Read more"
            />
          ))}
      </div>
    );
  }

  renderLatestPost({
    settings,
    language,
  }: Partial<NullstackClientContext<Props>>) {
    const lastest_post = settings.blog_posts
      .filter(post => post.language === language)
      .at(0);

    if (!lastest_post) return null;

    const locales = {
      en,
      pt,
      fr,
      es,
    };

    const format_relative_locale: Record<string, string> = {
      yesterday: "'Yesterday'", // Yesterday
      today: "'Today'", // Today
      other: 'PPPp', // 12/02
      other_year: 'dd/MM/yyyy', // 12/02/2001
    };

    const date_translations = {
      today: {
        en: "'Today', p",
        pt: "'Hoje', p",
        fr: "'Aujourd’hui', p",
        es: "'Hoy', p",
      },
      yesterday: {
        en: "'Yesterday', p",
        pt: "'Ontem', p",
        fr: "'Hier', p",
        es: "'Ayer'´, p",
      },
    };

    const locale = (lang: Language) => ({
      ...locales[lang],
      formatRelative: (token: string, string_date: string) => {
        const date = new Date(string_date);

        if (date.getFullYear() !== new Date().getFullYear()) {
          return format_relative_locale.other_year;
        }

        const formatting = format_relative_locale[token];

        return (formatting || format_relative_locale.other || '')
          .replace("'Today'", date_translations.today[lang])
          .replace("'Yesterday'", date_translations.yesterday[lang]);
      },
    });

    return (
      <a class="latest-post" href={`/blog/post/${lastest_post.id}`}>
        <img src={lastest_post.image} alt="Latest post" />

        <span>
          {formatRelative(new Date(lastest_post.created_at), new Date(), {
            locale: locale(language),
          })}
        </span>

        <b>{lastest_post.title}</b>

        <p>{lastest_post.description}</p>
      </a>
    );
  }

  /* ---------- Render ---------- */
  render({ language }: Props) {
    const { featured, articles } = translations.blog;

    return (
      <main>
        <Navbar language={language} />

        <section class="column gap-xl content">
          <div class="column gap-md">
            <h1>{featured[language]}</h1>

            {this.renderLatestPost({})}
          </div>

          <div class="column gap-md">
            <h2>{articles[language]}</h2>

            {this.renderArticles({})}
          </div>
        </section>

        <Footer />
      </main>
    );
  }
}
