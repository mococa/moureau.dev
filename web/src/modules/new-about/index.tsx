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
import { GridBackground } from '_common/components/GridBackground';
import { Section } from '_common/components/Section';

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
    const { title, description } = translations.meta.about_me;

    page.title = title[language];
    page.description = description[language];
  }

  /* ---------- Renderers ---------- */
  renderResume({ language }: Partial<Props>) {
    const { title, sections } = translations.about_me;

    return (
      <section id="about-me" class="flex justify-center font-main pt-20 pb-12 p-4 md:p-20 md:pb-12">
        <GridBackground />

        <div class="section relative self-center flex flex-col p h-full md-laptop:mt-[5vh] md-tablet:mt-[10vh] md-tablet:mx-[1.5rem] lg-tablet:mx-[3rem]">
          <h1 class="mb-8">{title[language]}</h1>

          <div class="md:columns-2 flex row justify-between gap-8">
            <div class="column">
              <SectionTitle
                title={sections.resume.section_title[language]}
                href="#about-me"
              />

              <div class="profile-card font-space mt-8 mb-8">
                <img src="https://moureau.s3.sa-east-1.amazonaws.com/public/eu.jpeg" />

                <div class="column font-space">
                  <h4>{sections.resume.profile.resume_title[language]}</h4>

                  <span>{sections.resume.profile.resume_subtitle[language]}</span>
                </div>
              </div>

              <span class="font-space mb-4 inline-block">{sections.resume.hobbies_and_passions[language]}</span>

              <span class="font-space mb-4 inline-block">{sections.resume.culture[language]}</span>

              <img class="mb-4 object-cover object-center rounded-md h-96 w-full" src="https://moureau.s3.sa-east-1.amazonaws.com/public/rio5.jpeg" />

              <span class="font-space inline-block">{sections.resume.studies[language]}</span>
            </div>

            <img
              class="side-image inline-block"
              src="https://moureau.s3.sa-east-1.amazonaws.com/public/rio1.jpeg"
            />
          </div>
        </div>
      </section>
    );
  }

  renderMusic({ language }: Partial<Props>) {
    const { sections } = translations.about_me;

    return (
      <Section id="music" title={sections.music.section_title[language]} center class="border-y-0 font-space">
        <div class="mt-8 md:columns-2 flex row justify-between gap-16">
          <img
            class="side-image"
            src="https://moureau.s3.sa-east-1.amazonaws.com/public/piano.jpg"
          />

          <div class="flex flex-col">
            <h3 class="font-main text-lg mb-2">{sections.music.title[language]}</h3>

            <span class="mb-4 font-normal">{sections.music.subtitle[language].map(break_mapper)}</span>

            <span class="mb-4 font-normal">{sections.music.types[language].map(break_mapper)}</span>

            <img
              class="mb-4 rounded-xl"
              src="/img/image.png"
            />

            <span>
              {sections.music.instruments[language].map(break_mapper)}
            </span>
          </div>
        </div>
      </Section>
    );
  }

  renderGames({ language }: Partial<Props>) {
    const { sections } = translations.about_me;

    return (
      <Section id="games" title={sections.games.section_title[language]} transparent center class='!pt-4'>
        <img class="object-cover w-full max-h-96 rounded-xl mt-8 mb-8" src="https://moureau.s3.sa-east-1.amazonaws.com/public/games2.jpeg" />

        <div class="md:columns-2 flex row justify-between gap-16">

          <img
            class="side-image"
            src="https://moureau.s3.sa-east-1.amazonaws.com/public/mario.webp"
          />

          <div class="flex flex-col">

            <div class="flex flex-col font-space">
              <h3>{sections.games.title[language]}</h3>

              <span class="mb-4">{sections.games.subtitle[language]}</span>

              <span class="mb-4">{sections.games.impact[language]}</span>

              <img class="rounded-lg mb-4" src="https://i.insider.com/552302ba6bb3f7644900ec0a?width=750&format=jpeg&auto=webp" />

              <span>{sections.games.today[language]}</span>
            </div>
          </div>
        </div>
      </Section>
    );
  }

  renderLanguages({ language }: Partial<Props>) {
    const { sections } = translations.about_me;

    return (
      <Section id="languages" title={sections.languages.section_title[language]} transparent center class='!pt-4'>
        <div class="md:columns-2 flex row justify-between gap-16 font-space">
          <div class="flex flex-col">
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
      </Section>
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
