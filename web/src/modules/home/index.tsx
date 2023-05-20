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

/* ---------- Styles ---------- */
import './styles.css';

export class Home extends Nullstack {
  render() {
    return (
      <main>
        <Navbar />

        <HeroSection />

        <AboutMeSection apps_in_prod={5} github_repositories={42} />

        <SkillSection skills={skills} />

        <PortfolioSection />

        <LibrariesSection />
      </main>
    );
  }
}
