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

const image_style = `
max-width: 490px;
border-radius: 12px;
--shadow-size: 24px;
filter: drop-shadow(calc(var(--shadow-size) * -1) var(--shadow-size) 0px var(--accent));
margin-left: 32px;
height: 810px;
width: 100%;
object-fit: cover;
`;

const image_in_column_style = `
width: 100%;
border-radius: 6px;
object-fit: cover;
height: 384px;
margin-bottom: 8px;
object-position: center;
`;

const image_me_style = `  
aspect-ratio: 1;
width: 180px;
object-fit: cover;
border-radius: 50%;
object-position: 0 -60px;
border: 3px solid var(--accent);
`;

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

        <div class="row space-between">
          <div class="column" style="max-width: 580px;">
            <SectionTitle title="In short..." href="#about-me" />

            <br />

            <div class="row" style="gap: 32px; align-items: center;">
              <img
                src="https://moureau.s3.sa-east-1.amazonaws.com/public/eu.jpeg"
                style={image_me_style}
              />

              <div class="column">
                <h4>I'm Luiz Felipe, a web developer from Brazil.</h4>

                <span>
                  I love to code and create beautiful and responsive websites.
                  I'm currently working as a fullstack developer. Feel free to
                  contact me anytime.
                </span>
              </div>
            </div>

            <br />

            <span>
              My hobbies and passions are speedcubing and music (I'm very
              eclectic and open to share my Spotify playlists).
            </span>

            <br />

            <span>
              I'm from Rio de Janeiro, so going to the beach, wearing
              flip-flops, partying and enjoying life is more than just culture,
              it runs in my blood.
            </span>

            <br />

            <img
              src="https://moureau.s3.sa-east-1.amazonaws.com/public/rio5.jpeg"
              style={image_in_column_style}
            />

            <br />

            <span>
              I'm currently studying Medical Physics at the Federal University
              of Rio de Janeiro - UFRJ, but I'm pausing it for a while to focus
              on my career.
            </span>
          </div>

          <img
            src="https://moureau.s3.sa-east-1.amazonaws.com/public/rio1.jpeg"
            style={image_style}
          />
        </div>
      </section>
    );
  }

  renderMusic() {
    return (
      <section id="music">
        <SectionTitle title="Music" href="#music" />

        <div class="row space-between">
          <img
            src="https://moureau.s3.sa-east-1.amazonaws.com/public/piano.jpg"
            style={[
              image_style,
              'filter: drop-shadow(calc(var(--shadow-size) * 1) calc(var(--shadow-size)) 0px var(--accent));',
              'margin-left: 0;',
              'height: 650px;',
              'max-width: 592px;',
            ]}
          />

          <div class="column" style="max-width: 522px;">
            <h3>Have I already said that I love music?</h3>

            <br />

            <span>
              I'm most of my time listening to music from hardcore metal to
              classic, from Bossa Nova to Samba, from Electronic to Pop. <br />I
              think that at this point, I simply cannot work without music.
            </span>

            <br />

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

            <br />

            <img
              src="https://cdn.mos.cms.futurecdn.net/wDNimS42knbB7q62hLwPCd-1200-80.jpg"
              style="border-radius: 12px"
            />

            <br />

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

          <div class="row space-between">
            <img src="https://moureau.s3.sa-east-1.amazonaws.com/public/mario.webp" />

            <div class="games-column">
              <h3>Videogames has definitely a place in my heart</h3>

              <br />

              <span>
                I've always been a massive gamer. When my cousins had consoles I
                was always with them playing on their Playstations and Xboxes.
              </span>

              <br />

              <span>
                Games had a great impact in my life and I'm proud of it. It
                taught me English and the way I think in general. That's why it
                needs a special section in my website.
              </span>

              <br />

              <img src="https://i.insider.com/552302ba6bb3f7644900ec0a?width=750&format=jpeg&auto=webp" />

              <br />

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
      <section id="language">
        <SectionTitle title="Language" href="#language" />

        <div class="row space-between">
          <div class="column" style="max-width: 522px;">
            <h3>I am a huge fan of languages and linguistics</h3>

            <br />

            <span>
              I consider myself as a polyglot as I can fluently speak English,
              French, Spanish and my mother tonge, Portuguese.
            </span>

            <br />

            <span>
              I'm also a huge fan of the languages and linguistics of the world.
              I like to learn how languages are formed, etymologies and
              curiosities.
            </span>

            <br />

            <span>
              I've got friends from all over the world as I'm very social and
              easily make friends online all the time.
            </span>

            <br />

            <span>
              I'm currently learning German, Dutch and Brazilian Sign Language.
            </span>
          </div>

          <img
            src="https://moureau.s3.sa-east-1.amazonaws.com/public/language.webp"
            style={[image_style, 'height: 263px']}
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

          {this.renderGames()}

          {this.renderLanguages()}

          {this.renderMusic()}
        </div>

        <br />

        <br />

        <br />

        <br />

        <br />
        <br />

        <Footer />
      </main>
    );
  }
}
