import { Language } from "_@types"
import { Link } from "_common/components/Link";
import { Section } from "_common/components/Section";
import { SectionTitle } from "_common/components/SectionTitle";
import { translations } from "_utils/translations";
import { differenceInCalendarYears, differenceInYears } from "date-fns";

/* ---------- Constants ---------- */
const experience_years = differenceInYears(new Date(), new Date('2019-07-01'));
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
const { sections: { work, about } } = translations.hero

const age = differenceInCalendarYears(new Date(), new Date('2001-02-12'));

export const AboutMe = ({ language }: { language: Language }) => {
    return (
        <Section id="about-me" title={name[language]}>
            <div class="md:grid flex flex-col mt-4 md:grid-cols-2 md:gap-x-5">
                <h2 class="text-2xl md:text-4xl max-w-xl">
                    {title[language][0]}
                    <b style="color: var(--accent)">
                        {title[language][1].replace(
                            '%YEARS%',
                            String(experience_years),
                        )}
                    </b>
                </h2>

                <span class="mt-4 font-space md:text-lg text-md max-w-4xl col-start-1 mb-4">{subtitle[language]}</span>

                <b class="text-white mt-6 col-start-2 row-start-3">{work.title[language]}</b>

                <span class="mt-2 font-space md:text-lg text-md max-w-4xl col-start-2 row-start-4">{work.text[language]}</span>

                <b class="text-white mt-6 col-start-1 row-start-3">{about.title[language]}</b>

                <span class="mt-2 font-space md:text-lg text-md max-w-4xl mb-8 col-start-1 row-start-4">{about.text[language].replace('%AGE%', String(age))}</span>

                <div class="col-start-1 row-start-5 mt-6">
                    <Link href="/about">{button[language]}</Link>
                </div>
            </div>
        </Section>
    )
}