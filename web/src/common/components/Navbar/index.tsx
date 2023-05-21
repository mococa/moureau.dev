/* ---------- External ---------- */
import Nullstack, { NullstackClientContext } from 'nullstack';

/* ---------- Assets ---------- */
import { Logo } from '_common/assets/SVG/Logo';

/* ---------- Components ---------- */
import { LanguageSelector } from '_common/components/LanguageSelector';

/* ---------- Styles ---------- */
import './styles.css';

export class Navbar extends Nullstack {
  /* ---------- Proxies ---------- */
  nav_links: HTMLElement = null;
  language = null;

  /* ---------- Handlers ---------- */
  handleMouseOver() {
    if (!this.nav_links.classList.contains('hovered'))
      this.nav_links.classList.add('hovered');
  }

  handleMouseOut() {
    this.nav_links.classList.remove('hovered');
  }

  /* ---------- Life cycle ---------- */
  prepare({ page }: NullstackClientContext) {
    this.language = page?.locale?.split('-')[0] || 'en';
  }

  hydrate() {
    this.nav_links.addEventListener('mouseover', this.handleMouseOver);
    this.nav_links.addEventListener('mouseout', this.handleMouseOut);
  }

  terminate() {
    this.nav_links.removeEventListener('mouseover', this.handleMouseOver);
    this.nav_links.removeEventListener('mouseout', this.handleMouseOut);
  }

  /* ---------- Render ---------- */
  render() {
    return (
      <nav class="navbar-wrapper">
        <div class="navbar-content">
          <a href="/" class="logo">
            <Logo height={42} />

            <h3>moureau.dev</h3>
          </a>

          <ul class="navbar-links" ref={this.nav_links}>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/">About</a>
            </li>

            <li>
              <a href="/">Blog</a>
            </li>

            <li>
              <LanguageSelector language={this.language || 'en'} />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
