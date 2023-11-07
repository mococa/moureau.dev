/* ---------- External ---------- */
import Nullstack, { NullstackClientContext } from 'nullstack';

/* ---------- Components ---------- */
import { Navbar } from '_common/components/Navbar';
import { SectionTitle } from '_common/components/SectionTitle';
import { Footer } from '_common/components/Footer';

/* ---------- Utils ---------- */
import { translations } from '_utils/translations';

/* ---------- Types ---------- */
import { Language } from '_@types';

/* ---------- Styles ---------- */
import './styles.css';

/* ---------- Interfaces ---------- */
interface Props {
  language: Language;
}

/* ---------- Helpers ---------- */
const break_mapper = <T,>(c: T, i: number, arr: T[]) => (
  <>
    {c}

    {i !== arr.length && <br />}
  </>
);

export class About extends Nullstack<Props> {
  /* ---------- Life cycle ---------- */
  initiate({ page, language }: NullstackClientContext<Props>) {
    const { title, description } = translations.about_me;

    page.title = `Moureau - ${title[language]}`;
    page.description = description[language];
  }

  /* ---------- Renderers ---------- */
  renderResume({ language }: Partial<Props>) {
    const { title, sections } = translations.about_me;

    return (
      <section id="about-me">
        <h1>{title[language]}</h1>

        <div class="section-content row space-between">
          <div class="column">
            <SectionTitle
              title={sections.resume.section_title[language]}
              href="#about-me"
            />

            <div class="profile-card">
              <img src="https://moureau.s3.sa-east-1.amazonaws.com/public/eu.jpeg" />

              <div class="column">
                <h4>{sections.resume.profile.resume_title[language]}</h4>

                <span>{sections.resume.profile.resume_subtitle[language]}</span>
              </div>
            </div>

            <span>{sections.resume.hobbies_and_passions[language]}</span>

            <span>{sections.resume.culture[language]}</span>

            <img src="https://moureau.s3.sa-east-1.amazonaws.com/public/rio5.jpeg" />

            <span>{sections.resume.studies[language]}</span>
          </div>

          <img
            class="side-image"
            src="https://moureau.s3.sa-east-1.amazonaws.com/public/rio1.jpeg"
          />
        </div>
      </section>
    );
  }

  renderMusic({ language }: Partial<Props>) {
    const { sections } = translations.about_me;

    return (
      <section id="music">
        <SectionTitle
          title={sections.music.section_title[language]}
          href="#music"
        />

        <div class="section-content row space-between">
          <img
            class="side-image"
            src="https://moureau.s3.sa-east-1.amazonaws.com/public/piano.jpg"
          />

          <div class="column">
            <h3>{sections.music.title[language]}</h3>

            <span>{sections.music.subtitle[language].map(break_mapper)}</span>

            <span>{sections.music.types[language].map(break_mapper)}</span>

            <img
              src="https://cdn.mos.cms.futurecdn.net/wDNimS42knbB7q62hLwPCd-1200-80.jpg"
              style="border-radius: 12px"
            />

            <span>
              {sections.music.instruments[language].map(break_mapper)}
            </span>
          </div>
        </div>
      </section>
    );
  }

  renderGames({ language }: Partial<Props>) {
    const { sections } = translations.about_me;

    return (
      <section id="games">
        <SectionTitle
          title={sections.games.section_title[language]}
          href="#games"
        />

        <div class="games">
          <img src="https://moureau.s3.sa-east-1.amazonaws.com/public/games2.jpeg" />

          <div class="section-content row space-between">
            <img
              class="side-image"
              src="https://moureau.s3.sa-east-1.amazonaws.com/public/mario.webp"
            />

            <div class="column">
              <h3>{sections.games.title[language]}</h3>

              <span>{sections.games.subtitle[language]}</span>

              <span>{sections.games.impact[language]}</span>

              <img src="https://i.insider.com/552302ba6bb3f7644900ec0a?width=750&format=jpeg&auto=webp" />

              <span>{sections.games.today[language]}</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  renderLanguages({ language }: Partial<Props>) {
    const { sections } = translations.about_me;

    return (
      <section id="languages">
        <SectionTitle
          title={sections.languages.section_title[language]}
          href="#languages"
        />

        <div class="section-content row space-between">
          <div class="column">
            <h3>{sections.languages.title[language]}</h3>

            <span>{sections.languages.polyglot[language]}</span>

            <span>{sections.languages.linguistics[language]}</span>

            <span>{sections.languages.friends[language]}</span>

            <span>{sections.languages.learning[language]}</span>
          </div>

          <img
            class="side-image"
            src="https://moureau.s3.sa-east-1.amazonaws.com/public/language.webp"
          />
        </div>
      </section>
    );
  }

  render({ language }: NullstackClientContext) {
    return (
      <main>
        <Navbar language={language} />

        <div class="about-me content">
          {this.renderResume({ language })}

          {this.renderMusic({ language })}

          {this.renderGames({ language })}

          {this.renderLanguages({ language })}
        </div>

        <Footer />
      </main>
    );
  }
}
