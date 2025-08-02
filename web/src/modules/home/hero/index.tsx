/* ---------- External ---------- */
import { differenceInCalendarYears } from 'date-fns';

/* ---------- Types ---------- */
import { Language } from '_@types';

/* ---------- Module Components ---------- */
import { HeroScrollDown } from '_modules/home/hero/components/HeroScrollDown';
import { HeroSocial } from '_modules/home/hero/components/HeroSocial';
import { HeroSubSection } from '_modules/home/hero/components/HeroSubSection';

/* ---------- Translations ---------- */
import { translations } from '_utils/translations';

/* ---------- Styles ---------- */
import './styles.css';

/* ---------- Constants ---------- */
const age = differenceInCalendarYears(new Date(), new Date('2001-02-12'));

/* ---------- Interfaces ---------- */
interface Props {
  language: Language;
}

export const HeroSection = ({ language }: Props) => {
  const { title, subtitle, learner, sections } = translations.hero;

  return (
    <section id="hero">
      <div class="content hero">
        <div class="column">
          <h1>{title[language]}</h1>

          <span>
            {subtitle[language]}

            <br />

            {learner[language]}
          </span>

          <HeroScrollDown />
        </div>

        <img src="/img/me.png" alt="Luiz" />

        <div class="hero-main-sections">
          <HeroSubSection
            title={sections.about.title[language]}
            content={sections.about.text[language].replace(
              '%AGE%',
              String(age),
            )}
            link={{ title: sections.about.button[language], href: '#about-me' }}
          />

          <HeroSubSection
            title={sections.work.title[language]}
            content={sections.work.text[language]}
            link={{ title: sections.work.button[language], href: '#portfolio' }}
          />

          <HeroSocial title={sections.follow_me[language]} />
        </div>
      </div>
    </section>
  );
};
