/* ---------- External ---------- */
import { differenceInYears } from 'date-fns';

/* ---------- Types ---------- */
import { Language } from '_@types';

/* ---------- Components ---------- */
import { SectionTitle } from '_common/components/SectionTitle';
import { Link } from '_common/components/Link';

/* ---------- Translations ---------- */
import { translations } from '_utils/translations';

/* ---------- Styles ---------- */
import './styles.css';

/* ---------- Interfaces ---------- */
interface Props {
  repos: number;
  apps: number;
  language: Language;
}

/* ---------- Constants ---------- */
const experience_years = differenceInYears(new Date(), new Date('2019-07-01'));

export const AboutMeSection = ({ apps, repos, language }: Props) => {
  const {
    name,
    title,
    subtitle,
    button,
    currently_working_on,
    contributions,
    github_repositories,
    apps_in_production,
  } = translations.about;

  return (
    <section id="about-me">
      <div class="column content">
        <div class="about">
          <div class="column">
            <SectionTitle title={name[language]} href="#about-me" />

            <h2>
              {title[language][0]}
              <b>
                {title[language][1].replace(
                  '%YEARS%',
                  String(experience_years),
                )}
              </b>
            </h2>

            <span>{subtitle[language]}</span>

            <Link href="/about">{button[language]}</Link>
          </div>

          <div class="column">
            <div class="github-apps row gap-lg">
              <div>
                <h2>{repos}</h2>

                <h3>
                  {github_repositories[language][0]}
                  <br />
                  {github_repositories[language][1]}
                </h3>
              </div>

              <br />

              <div>
                <h2>{apps}</h2>

                <h3>
                  {apps_in_production[language][0]}
                  <br />
                  {apps_in_production[language][1]}
                </h3>
              </div>
            </div>

            <span>
              {contributions[language]
                .replace('%APPS_IN_PRODUCTION%', String(apps))
                .replace('%PUBLIC_REPOSITORIES%', String(repos))}
            </span>
          </div>
        </div>

        <hr class="mt-xl3" />

        <div class="column mt-xl">
          <h3 class="uppercase">{currently_working_on[language]}</h3>

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
