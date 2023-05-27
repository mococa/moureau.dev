import Nullstack from 'nullstack';
import './styles.css';
import { SocialLinks } from '../Social';

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
