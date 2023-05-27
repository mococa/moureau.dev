/* ---------- External ---------- */
import Nullstack from 'nullstack';

/* ---------- Common Components ---------- */
import { SocialLinks } from '_common/components/Social';

/* ---------- Styles ---------- */
import './styles.css';

export class Footer extends Nullstack {
  render() {
    return (
      <footer>
        <div class="column content gap-sm">
          <h2>Luiz Felipe Moureau</h2>

          <span class="mb-md">Fullstack developer at Westpoint</span>

          <SocialLinks />
        </div>
      </footer>
    );
  }
}
