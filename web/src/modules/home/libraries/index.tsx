/* ---------- External ---------- */
import Nullstack from 'nullstack';

/* ---------- Types ---------- */
import { Language } from '_@types';

/* ---------- Common Components ---------- */
import { SectionTitle } from '_common/components/SectionTitle';
import { Card } from '_common/components/Card';
import { Link } from '_common/components/Link';

/* ---------- Translations ---------- */
import { translations } from '_utils/translations';

/* ---------- Styles ---------- */
import './styles.css';

/* ---------- Interfaces ---------- */
interface Props {
  language: Language;
}

export class LibrariesSection extends Nullstack<Props> {
  /* ---------- Proxies ---------- */
  expanded = false;

  /* ---------- Handlers ---------- */
  handleToggleExpanded() {
    this.expanded = !this.expanded;
  }

  /* ---------- Render ---------- */
  render({ language }: Props) {
    const { name, title, see_all, see_more, see_less } = translations.libraries;

    return (
      <section id="libraries">
        <div class="column content">
          <SectionTitle title={name[language]} href="#libraries" />

          <div class="libraries column">
            <h2>
              {title[language][0]}

              <b>{title[language][1]}</b>

              {title[language][2]}
            </h2>

            <div class="row">
              <Link
                href="https://github.com/mococa?tab=repositories"
                target="_blank"
                size="small"
              >
                {see_all[language]}
              </Link>
            </div>

            <div
              class="library-cards-container"
              role="list"
              aria-expanded={this.expanded}
            >
              {libraries.map(library => (
                <Card {...library} role="listitem" />
              ))}
            </div>

            <div class="row end-aligned">
              <button class="expand-button" onclick={this.handleToggleExpanded}>
                {this.expanded ? see_less[language] : see_more[language]}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

/* ---------- Constants ---------- */
const libraries = [
  {
    title: 'React Guide Hook',
    description: 'A React hook to build onboarding guides',
    url: 'https://github.com/mococa/react-guide-hook',
    image: '/img/libs/clippy.png',
  },

  {
    title: 'Mococa Toastr',
    description: 'A toast notification library for React',
    url: 'https://github.com/mococa/mococa-toastr',
    image: '/img/libs/mococa-toastr.png',
  },

  {
    title: 'Go Array',
    description: 'A generic Golang slice helper library',
    url: 'https://github.com/mococa/go-array',
    image: '/img/libs/go-array.png',
  },
  {
    title: 'React Guide Hook',
    description: 'A React hook to build onboarding guides',
    url: 'https://github.com/mococa/react-guide-hook',
    image: '/img/libs/clippy.png',
  },

  {
    title: 'Mococa Toastr',
    description: 'A toast notification library for React',
    url: 'https://github.com/mococa/mococa-toastr',
    image: '/img/libs/mococa-toastr.png',
  },

  {
    title: 'Go Array',
    description: 'A generic Golang slice helper library',
    url: 'https://github.com/mococa/go-array',
    image: '/img/libs/go-array.png',
  },
];
