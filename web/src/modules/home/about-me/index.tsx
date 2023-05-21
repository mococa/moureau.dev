/* ---------- External ---------- */
import { differenceInCalendarYears } from 'date-fns';

/* ---------- Components ---------- */
import { SectionTitle } from '_common/components/SectionTitle';
import { Link } from '_common/components/Link';

/* ---------- Styles ---------- */
import './styles.css';

/* ---------- Interfaces ---------- */
interface Props {
  github_repositories: number;
  apps_in_prod: number;
}

/* ---------- Constants ---------- */
const experience_years = differenceInCalendarYears(
  new Date(),
  new Date('2021-01-01'),
);

export const AboutMeSection = ({
  apps_in_prod,
  github_repositories,
}: Props) => {
  return (
    <section id="about-me">
      <div class="column content">
        <div class="about">
          <div class="column">
            <SectionTitle title="About me" href="#about-me" />

            <h2>
              I've been professionally developing for
              <b> over {experience_years} years</b>
            </h2>

            <span>
              I started coding Flash games back in 2010, when I still was a
              little kid and stumbled accross a GameMaker tutorial video on YouTube
              and since then I never stopped learning and looking for more!
            </span>

            <Link href="/about">More about me</Link>
          </div>

          <div class="column">
            <div class="row gap-lg">
              <div>
                <h2>{github_repositories}</h2>

                <h3>
                  GitHub
                  <br />
                  repositories
                </h3>
              </div>

              <br />

              <div>
                <h2>{apps_in_prod}</h2>

                <h3>
                  Applications
                  <br />
                  in production
                </h3>
              </div>
            </div>

            <span>
              Through these years I've contributed to over {apps_in_prod}{' '}
              applications in production, and I have over {github_repositories}{' '}
              public repositories on Github.
            </span>
          </div>
        </div>

        <hr class="mt-xl3" />

        <div class="column mt-xl">
          <h3 class="uppercase">Currently working on</h3>

          <a href="https://www.westpoint.io/" target="_blank" class="mt-md">
            <img
              width="150"
              height="40"
              src="/img/companies/westpoint.io.png"
              alt="Westpoint"
              aria-label="Current company"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
