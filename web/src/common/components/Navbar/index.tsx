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

/* ---------- Interfaces ---------- */
interface Props {
  language: Language;
}
export class Navbar extends Nullstack {
  /* ---------- Proxies ---------- */
  nav_links: HTMLElement = null;

  /* ---------- Handlers ---------- */
  handleMouseOver() {
    if (!this.nav_links.classList.contains('hovered'))
      this.nav_links.classList.add('hovered');
  }

  handleMouseOut() {
    this.nav_links.classList.remove('hovered');
  }

  /* ---------- Life cycle ---------- */
  hydrate() {
    this.nav_links.addEventListener('mouseover', this.handleMouseOver);
    this.nav_links.addEventListener('mouseout', this.handleMouseOut);
  }

  terminate() {
    this.nav_links.removeEventListener('mouseover', this.handleMouseOver);
    this.nav_links.removeEventListener('mouseout', this.handleMouseOut);
  }

  /* ---------- Render ---------- */
  render({ language }: NullstackClientContext<Props>) {
    const { links } = translations.navbar;

    return (
      <nav class="navbar-wrapper">
        <div class="navbar-content">
          <a href="/" class="logo">
            <Logo height={42} />

            <h3>moureau.dev</h3>
          </a>

          <ul class="navbar-links" ref={this.nav_links}>
            <li>
              <a href="/">{links.home[language]}</a>
            </li>

            <li>
              <a href="/">{links.about[language]}</a>
            </li>

            <li>
              <a href="/">Blog</a>
            </li>

            <li>
              <LanguageSelector language={language || 'en'} />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
