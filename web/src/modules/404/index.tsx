/* ---------- External ---------- */
import Nullstack, { NullstackClientContext } from 'nullstack';

/* ---------- Types ---------- */
import { Language } from '_@types';

/* ---------- Common Components ---------- */
import { Navbar } from '_common/components/Navbar';
import { Link } from '_common/components/Link';

/* ---------- Translations ---------- */
import { translations } from '_utils/translations';

/* ---------- Styles ---------- */
import './styles.css';

/* ---------- Interfaces ---------- */
interface Props {
  language: Language;
}

export class NotFound extends Nullstack<Props> {
  initiate({ page, language }: NullstackClientContext<Props>) {
    page.title =
      (translations.not_found.title[language] || '404') + ' - Moureau';

    page.description =
      'The requested page could not be found. Please check the URL or try navigating to the homepage.';
  }

  render({ language }: NullstackClientContext<Props>) {
    const { title, subtitle, button } = translations.not_found;

    return (
      <main>
        <Navbar language={language} />

        <h1 class="not-found-404 content">404</h1>

        <div class="column not-found-content content">
          <h2>{title[language]}</h2>

          <span>{subtitle[language]}</span>

          <Link href="/">{button[language]}</Link>
        </div>
      </main>
    );
  }
}
