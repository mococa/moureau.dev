/* ---------- External ---------- */
import Nullstack from 'nullstack';

/* ---------- Common Assets ---------- */
import { Github } from '_common/assets/SVG/Github';
import { Twitter } from '_common/assets/SVG/Twitter';
import { Linkedin } from '_common/assets/SVG/Linkedin';

/* ---------- Styles ---------- */
import './styles.css';

export class SocialLinks extends Nullstack {
  /* ---------- Proxies ---------- */
  ref: HTMLDivElement = null;

  /* ---------- Handlers ---------- */
  handleMouseOver() {
    if (!this.ref.classList.contains('hovered'))
      this.ref.classList.add('hovered');
  }

  handleMouseOut() {
    this.ref.classList.remove('hovered');
  }

  /* ---------- Life cycle ---------- */
  hydrate() {
    this.ref.addEventListener('mouseover', this.handleMouseOver);
    this.ref.addEventListener('mouseout', this.handleMouseOut);
  }

  terminate() {
    this.ref.removeEventListener('mouseover', this.handleMouseOver);
    this.ref.removeEventListener('mouseout', this.handleMouseOut);
  }

  /* ---------- Render ---------- */
  render() {
    return (
      <div class="social-links-row" ref={this.ref}>
        <a
          href="https://github.com/mococa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
        >
          <Github />
        </a>

        <a
          href="https://twitter.com/luizmoureau"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Twitter profile"
        >
          <Twitter />
        </a>

        <a
          href="https://www.linkedin.com/in/luizfelipesmoureau/"
          target="_blank"
          aria-label="Visit my Linkedin profile"
        >
          <Linkedin />
        </a>
      </div>
    );
  }
}
