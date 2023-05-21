/* ---------- External ---------- */
import Nullstack, { NullstackClientContext, NullstackNode } from 'nullstack';

/* ---------- Modules ---------- */
import { Home } from '_modules/home';

/* ---------- Styles ---------- */
import '/public/fonts/styles.css';
import '_styles/global.css';

declare function Head(): NullstackNode;

class Application extends Nullstack {
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

  /* ---------- Life cycle ---------- */
  async initiate({ page }: NullstackClientContext) {
    page.locale = 'en-US';
    page.title = 'Moureau - Fullstack Developer';
    page.description =
      "I'm Luiz Felipe Moureau and this is my personal website. Here you can read about me, my passions, work and more.\nFeel free to contact me anytime.";
    page.image = '/image-banner.png';
  }

  /* ---------- Render ---------- */
  render() {
    return (
      <body>
        <Head />

        <hello>
          Greetings, inspector! If you wanna see more, check my Github: mococa
          😏
        </hello>

        <Home route="/" />
      </body>
    );
  }
}

export default Application;
