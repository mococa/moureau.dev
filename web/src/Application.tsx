/* ---------- External ---------- */
import Nullstack, {
  NullstackClientContext,
  NullstackNode,
  NullstackServerContext,
} from 'nullstack';
import cookie from 'cookie';

/* ---------- Modules ---------- */
import { Blog } from '_modules/blog';
import { CMS } from '_modules/cms';
import { Home } from '_modules/home';
import { NotFound } from '_modules/404';
import { Post } from '_modules/post';

/* ---------- Translations ---------- */
import { get_language_from_locale } from '_utils/translations';

/* ---------- Styles ---------- */
import '/public/fonts/styles.css';
import '_styles/global.css';

declare function Head(): NullstackNode;

class Application extends Nullstack {
  /* ---------- Proxies ---------- */
  locale = 'en-US';

  /* ---------- Renderers ---------- */
  renderHead({ page }: NullstackClientContext) {
    return (
      <head>
        <meta
          name="keywords"
          content="Luiz Felipe Moureau, web, developer, portfolio, blog, resume, contact, contact me, moureau, luiz, luiz moureau, mococa, luizfelipesmoureau"
        />

        <meta name="theme-color" content="#1b1f24" />
        <meta name="twitter:site" content="@luizmoureau" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@luizmoureau" />
        <meta name="twitter:image" content="/image-banner.png" />
        <meta name="twitter:title" content={page.title} />
        <meta name="twitter:description" content={page.description} />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </head>
    );
  }

  /* ---------- Server functions ---------- */
  static async getLocale({ request }: Partial<NullstackServerContext>) {
    const languages = request.headers?.['accept-language'] || 'en-US,en';

    const browser_language = ['en', 'pt', 'fr', 'es'].find(lang =>
      lang.includes(languages.split(',')[0].split('-')[0]),
    );

    const cookies = request.headers?.cookie;

    const { locale = browser_language } = cookie.parse(cookies || '') as Record<
      string,
      string
    >;

    return { locale };
  }

  /* ---------- Handlers ---------- */
  handleChangeLocale({
    page,
    locale,
  }: NullstackClientContext<{ locale: string }>) {
    this.locale = locale;

    page.locale = locale;
  }

  /* ---------- Life cycle ---------- */
  async initiate({ page }: NullstackClientContext) {
    const { locale } = await Application.getLocale({});

    this.locale = locale || 'en-US';

    page.locale = this.locale;
    page.title = 'Moureau - Fullstack Developer';
    page.description =
      "I'm Luiz Felipe Moureau and this is my personal website. Here you can read about me, my passions, work and more.\nFeel free to contact me anytime.";
    page.image = '/image-banner.png';
  }

  hydrate(ctx: NullstackClientContext) {
    ctx.handleChangeLocale = this.handleChangeLocale;
  }

  /* ---------- Render ---------- */
  render({ page }: NullstackClientContext) {
    const language = get_language_from_locale(page.locale || this.locale);

    return (
      <html lang={page.locale || this.locale}>
        <body>
          <Head />

          <hello>
            Greetings, inspector! If you wanna see more, check my Github: mococa
            😏
          </hello>

          <Home route="/" language={language} />

          <Blog route="/blog" language={language} />

          <Post route="/blog/post/:id" language={language} />

          <CMS route="/cms" language={language} />

          {(page.not_found || page.status === 404) && (
            <NotFound language={language} route="*" />
          )}
        </body>
      </html>
    );
  }
}

export default Application;
