import Nullstack, {
  NullstackClientContext,
  NullstackPage,
  NullstackServerContext,
} from 'nullstack';

/* ---------- Common Components ---------- */
import { Navbar } from '_common/components/Navbar';

/* ---------- Module Templates ---------- */
import { HeroSection } from '_modules/home/hero';
import { AboutMeSection } from '_modules/home/about-me';
import { SkillSection } from '_modules/home/skills';
import { PortfolioSection } from '_modules/home/portfolio';
import { LibrariesSection } from '_modules/home/libraries';

/* ---------- Constants ---------- */
import { skills } from '_utils/constants/skills';

/* ---------- Types ---------- */
import { Language } from '_@types';

/* ---------- Styles ---------- */
import './styles.css';

interface Props {
  language: Language;
}

export class Home extends Nullstack<Props> {
  render({ language }: NullstackClientContext<Props>) {
    return (
      <main>
        <Navbar language={language} />

        <HeroSection language={language} />

        <AboutMeSection apps={5} repos={42} language={language} />

        <SkillSection skills={skills} language={language} />

        <PortfolioSection language={language} />

        <LibrariesSection language={language} />
      </main>
    );
  }
}
