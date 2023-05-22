import Nullstack, { NullstackClientContext } from 'nullstack';
import { Language } from '_@types';
import { Navbar } from '_common/components/Navbar';
import { Link } from '_common/components/Link';

import './styles.css';
import { translations } from '_utils/translations';

interface Props {
  language: Language;
}

export class NotFound extends Nullstack<Props> {
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
