/* ---------- External ---------- */
import Nullstack from 'nullstack';

/* ---------- Common Components ---------- */
import { SocialLinks } from '_common/components/Social';

/* ---------- Styles ---------- */
import './styles.css';

export class Footer extends Nullstack {
  render() {
    return (
      <footer class="flex justify-center relative font-main bg-zinc-900 border-t border-t-slate-600 md-laptop:mt-[5vh] md-laptop:mb-[10vh] md-tablet:mt-[10vh] md-tablet:mx-[1.5rem] lg-tablet:mx-[3rem] py-16">
        <div class="section flex flex-col gap-1 justify-center">
          <h2>Luiz Felipe Moureau</h2>

          <span class="mb-8">Fullstack developer at Space.game</span>

          <SocialLinks />
        </div>
      </footer>
    );
  }
}
