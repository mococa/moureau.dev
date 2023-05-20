/* ---------- External ---------- */
import { differenceInCalendarYears } from 'date-fns';

/* ---------- Module Components ---------- */
import { HeroScrollDown } from '_modules/home/hero/components/HeroScrollDown';
import { HeroSocial } from '_modules/home/hero/components/HeroSocial';
import { HeroSubSection } from '_modules/home/hero/components/HeroSubSection';

/* ---------- Styles ---------- */
import './styles.css';

/* ---------- Constants ---------- */
const age = differenceInCalendarYears(new Date(), new Date('2001-02-12'));

export const HeroSection = () => {
  return (
    <section id="hero">
      <div class="content hero">
        <div class="column">
          <h1>
            I'm Luiz, a <></>
            Web Developer
          </h1>

          <span>
            Developer, Rubik's cube enthusiast and music lover.
            <br />
            Always a learner.
          </span>

          <HeroScrollDown />
        </div>

        <img src="/img/me.png" alt="Luiz" />

        <div class="hero-main-sections">
          <HeroSubSection
            title="About me"
            content={`A ${age} years old brazilian developer passionate about technology, design, puzzles and languages. Very into music and international experiences in general`}
            link={{ title: 'More', href: '#about-me' }}
          />

          <HeroSubSection
            title="My work"
            content="I like to get stuff done and done right, paying attention to details, accessibility and always looking for new challenges and learning new tech"
            link={{ title: 'Browse portifolio', href: '#portfolio' }}
          />

          <HeroSocial title="Follow me" />
        </div>
      </div>
    </section>
  );
};
