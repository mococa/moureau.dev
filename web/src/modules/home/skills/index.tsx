/* ---------- Components ---------- */
import { SectionTitle } from '_common/components/SectionTitle';

/* ---------- Types ---------- */
import { Language, Models } from '_@types';

/* ---------- Translations ---------- */
import { translations } from '_utils/translations';

/* ---------- Styles ---------- */
import './styles.css';

/* ---------- Interfaces ---------- */
interface Props {
  skills: Models.Skill[];
  language: Language;
}

export const SkillSection = ({ skills, language }: Props) => {
  const { name, title, subtitle } = translations.skills;

  return (
    <section id="skills">
      <div class="content skills">
        <SectionTitle title={name[language]} href="#skills" />

        <h2>
          {title[language][0]}
          <b>{title[language][1]}</b>
        </h2>

        <span>{subtitle[language]}</span>

        <div class="skills-container">
          {skills.map(({ name, src, href, padding }) => (
            <a class="skill-card" href={href} target="_blank">
              <img
                src={`/img/languages/${src}`}
                alt={name}
                style={`padding: ${padding || 0}px`}
              />

              <h3>{name}</h3>

              <div class="background" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
