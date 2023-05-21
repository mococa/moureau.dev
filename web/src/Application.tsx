/* ---------- External ---------- */
import Nullstack, {
  NullstackClientContext,
  NullstackEnvironment,
  NullstackNode,
  NullstackPage,
  NullstackParams,
  NullstackProject,
  NullstackRouter,
  NullstackServerContext,
  NullstackSettings,
  NullstackWorker,
} from 'nullstack';
import cookie from 'cookie';

/* ---------- Modules ---------- */
import { Home } from '_modules/home';

/* ---------- Styles ---------- */
import '/public/fonts/styles.css';
import '_styles/global.css';
import { get_language_from_locale } from '_utils/translations';

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
          content="Luiz Felipe Moureau, web, developer, portfolio, blog, resume, contact, contact me, moureau, mococa, luizfelipesmoureau"
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
  static async getLocale(context: NullstackServerContext) {
    const cookies = context.request.headers.cookie;
    const { locale } = cookie.parse(cookies || '');

    return { locale };
  }

  /* ---------- Handlers ---------- */
  handleChangeLocale({ locale }: { locale: string }) {
    this.locale = locale;

    document.documentElement.lang = locale;
  }

  /* ---------- Life cycle ---------- */
  async prepare() {
    const { locale } = await Application.getLocale(
      {} as NullstackServerContext,
    );

    this.locale = locale || 'en-US';
  }

  async initiate({ page }: NullstackClientContext) {
    page.locale = this.locale || 'en-US';
    page.title = 'Moureau - Fullstack Developer';
    page.description =
      "I'm Luiz Felipe Moureau and this is my personal website. Here you can read about me, my passions, work and more.\nFeel free to contact me anytime.";
    page.image = '/image-banner.png';
  }

  hydrate() {
    document.documentElement.lang = this.locale;
  }

  /* ---------- Render ---------- */
  render(ctx) {
    const language = get_language_from_locale(this.locale);
    ctx.handleChangeLocale = this.handleChangeLocale;

    return (
      <body>
        <Head />

        <hello>
          Greetings, inspector! If you wanna see more, check my Github: mococa
          😏
        </hello>

        <Home route="/" language={language} />
      </body>
    );
  }
}

export default Application;
