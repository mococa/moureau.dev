/* ---------- External ---------- */
import Nullstack, { NullstackClientContext } from 'nullstack';

/* ---------- Types---------- */
import { Language } from '_@types';

/* ---------- Assets ---------- */
import { Logo } from '_common/assets/SVG/Logo';

/* ---------- Components ---------- */
import { LanguageSelector } from '_common/components/LanguageSelector';

/* ---------- Translations ---------- */
import { translations } from '_utils/translations';

/* ---------- Styles ---------- */
import './styles.css';
import { Download } from '_common/assets/SVG/Download';

/* ---------- Interfaces ---------- */
interface Props {
  language: Language;
}
export class Navbar extends Nullstack<Props> {
  /* ---------- Render ---------- */
  render({ language, router }: NullstackClientContext<Props>) {
    const public_bucket = 'https://moureau.s3.sa-east-1.amazonaws.com';
    const cv_language = language === 'es' ? 'en' : language;
    const cv_link = `${public_bucket}/public/CV/Luiz+Felipe+Moureau-${cv_language.toUpperCase()}.pdf`;

    const { links } = translations.navbar;

    return (
      <nav class="navbar-wrapper">
        <div class="navbar-content">
          <a href="/" class="logo">
            <Logo height={42} />

            <h3>moureau.dev</h3>
          </a>

          <ul class="navbar-links" role="tablist">
            <li
              role="tab"
              aria-selected={router.path === '/' ? 'true' : 'false'}
            >
              <a href="/">{links.home[language]}</a>
            </li>

            <li
              role="tab"
              aria-selected={router.path === '/about' ? 'true' : 'false'}
            >
              <a href="/about">{links.about[language]}</a>
            </li>

            <li
              role="tab"
              aria-selected={router.path.startsWith('/blog') ? 'true' : 'false'}
            >
              <a href="/blog">Blog</a>
            </li>

            <li role="tab" aria-selected="false">
              <a target="_blank" href={cv_link} download>
                CV
                <Download />
              </a>
            </li>

            <li role="tab">
              <LanguageSelector language={language || 'en'} />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
