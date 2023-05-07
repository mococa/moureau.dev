/* ---------- External ---------- */
import Nullstack, { NullstackClientContext, NullstackNode } from 'nullstack';

/* ---------- Styles ---------- */
import '/public/fonts/styles.css';
import '_styles/global.css';

declare function Head(): NullstackNode;

class Application extends Nullstack {
  initiate({ page }: NullstackClientContext) {
    page.locale = 'en-US';
  }

  prepare({ page }: NullstackClientContext) {
    page.title = 'Moureau Dev';
    page.description = "Luiz Felipe's Moureau personal website";
  }

  renderHead({ page }: NullstackClientContext) {
    return (
      <head>
        <meta name="description" content={page.description} />

        <link href="https://fonts.gstatic.com" rel="preconnect" />

        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </head>
    );
  }

  render() {
    return (
      <>
        <Head />

        <main>
          <h1>Hello World</h1>
        </main>
      </>
    );
  }
}

export default Application;
