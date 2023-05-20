/* ---------- External ---------- */
import Nullstack from 'nullstack';

/* ---------- Common Components ---------- */
import { SectionTitle } from '_common/components/SectionTitle';
import { Card } from '_common/components/Card';
import { Link } from '_common/components/Link';

/* ---------- Styles ---------- */
import './styles.css';

export class LibrariesSection extends Nullstack {
  /* ---------- Proxies ---------- */
  expanded = false;

  /* ---------- Handlers ---------- */
  handleToggleExpanded() {
    this.expanded = !this.expanded;
  }

  render() {
    return (
      <section id="libraries">
        <div class="column content">
          <SectionTitle title="Widgets & Libraries" href="#libraries" />

          <div class="libraries column">
            <h2>
              Explore my latest <b>widgets and libraries</b> on Github
            </h2>

            <div class="row">
              <Link
                href="https://github.com/mococa?tab=repositories"
                target="_blank"
                size="small"
              >
                See all
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
                {this.expanded ? 'Show less' : 'See more'}
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
