/* ---------- External ---------- */
import Nullstack, { NullstackClientContext } from 'nullstack';

/* ---------- Types ---------- */
import { Language } from '_@types';

/* ---------- Styles ---------- */
import './styles.css';
import { Navbar } from '_common/components/Navbar';
import { SectionTitle } from '_common/components/SectionTitle';
import { Footer } from '_common/components/Footer';

interface Props {
  language: Language;
}

export class About extends Nullstack<Props> {
  /* ---------- Life cycle ---------- */
  initiate({ page }: NullstackClientContext<Props>) {
    page.title = 'Moureau - About';
    page.description =
      "I'm Luiz Felipe Moureau and this is my personal website. Here you can read about me, my passions, work and more.\nFeel free to contact me anytime.";
  }

  renderResume() {
    return (
      <section id="about-me">
        <h1>About me</h1>

        <div class="section-content row space-between">
          <div class="column">
            <SectionTitle title="In short..." href="#about-me" />

            <div class="profile-card">
              <img src="https://moureau.s3.sa-east-1.amazonaws.com/public/eu.jpeg" />

              <div class="column">
                <h4>I'm Luiz Felipe, a web developer from Brazil.</h4>

                <span>
                  I love to code and create beautiful and responsive websites.
                  I'm currently working as a fullstack developer. Feel free to
                  contact me anytime.
                </span>
              </div>
            </div>

            <span>
              My hobbies and passions are speedcubing and music (I'm very
              eclectic and open to share my Spotify playlists).
            </span>

            <span>
              I'm from Rio de Janeiro, so going to the beach, wearing
              flip-flops, partying and enjoying life is more than just culture,
              it runs in my blood.
            </span>

            <img src="https://moureau.s3.sa-east-1.amazonaws.com/public/rio5.jpeg" />

            <span>
              I'm currently studying Medical Physics at the Federal University
              of Rio de Janeiro - UFRJ, but I'm pausing it for a while to focus
              on my career.
            </span>
          </div>

          <img
            class="side-image"
            src="https://moureau.s3.sa-east-1.amazonaws.com/public/rio1.jpeg"
          />
        </div>
      </section>
    );
  }

  renderMusic() {
    return (
      <section id="music">
        <SectionTitle title="Music" href="#music" />

        <div class="section-content row space-between">
          <img
            class="side-image"
            src="https://moureau.s3.sa-east-1.amazonaws.com/public/piano.jpg"
          />

          <div class="column">
            <h3>Have I already said that I love music?</h3>

            <span>
              I'm most of my time listening to music from hardcore metal to
              classic, from Bossa Nova to Samba, from Electronic to Pop. <br />I
              think that at this point, I simply cannot work without music.
            </span>

            <span>
              I have a type of music to listen to every mood that I'm in.
              <br />
              Stressed? Metal
              <br />
              Very stressed? Hardcore metal
              <br />
              Focused? Classic
              <br />
              Happy? Samba
              <br />
              And so on...
            </span>

            <img
              src="https://cdn.mos.cms.futurecdn.net/wDNimS42knbB7q62hLwPCd-1200-80.jpg"
              style="border-radius: 12px"
            />

            <span>
              I'm so into music that I have always been super interested in
              musical instruments. I had my piano phase, my electric guitar
              phase, my acoustic one phase.
              <br />I had even an synthesizer phase
            </span>
          </div>
        </div>
      </section>
    );
  }

  renderGames() {
    return (
      <section id="games">
        <SectionTitle title="Games" href="#games" />

        <div class="games">
          <img src="https://moureau.s3.sa-east-1.amazonaws.com/public/games2.jpeg" />

          <div class="section-content row space-between">
            <img
              class="side-image"
              src="https://moureau.s3.sa-east-1.amazonaws.com/public/mario.webp"
            />

            <div class="column">
              <h3>Videogames live in my heart</h3>

              <span>
                I've always been a massive gamer. When my cousins had consoles I
                was always with them playing on their Playstations and Xboxes.
              </span>

              <span>
                Games had a great impact in my life and I'm proud of it. It
                taught me English and the way I think in general. That's why it
                needs a special section in my website.
              </span>

              <img src="https://i.insider.com/552302ba6bb3f7644900ec0a?width=750&format=jpeg&auto=webp" />

              <span>
                Currently the games I play the most are any one that pops in on
                Xbox Live Game Pass and League of Legends with my friends.{' '}
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  renderLanguages() {
    return (
      <section id="languages">
        <SectionTitle title="Languages" href="#languages" />

        <div class="section-content row space-between">
          <div class="column">
            <h3>I really enjoy learning new languages</h3>

            <span>
              I consider myself a polyglot as I can fluently speak English,
              French, Spanish and my mother tonge, Portuguese.
            </span>

            <span>
              I'm also a huge fan of the languages and linguistics of the world.
              I like to learn how languages are formed, etymologies and
              curiosities.
            </span>

            <span>
              I've got friends from all over the world as I'm very social and
              easily make friends online all the time.
            </span>

            <span>
              I'm currently learning German, Dutch and Brazilian Sign Language.
            </span>
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
          {this.renderResume()}

          {this.renderMusic()}

          {this.renderGames()}

          {this.renderLanguages()}
        </div>

        <Footer />
      </main>
    );
  }
}
