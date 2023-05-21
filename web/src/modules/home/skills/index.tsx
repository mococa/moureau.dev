/* ---------- Components ---------- */
import { SectionTitle } from '_common/components/SectionTitle';

/* ---------- Types ---------- */
import { Models } from '_@types';

/* ---------- Styles ---------- */
import './styles.css';

/* ---------- Interfaces ---------- */
interface Props {
  skills: Models.Skill[];
}

export const SkillSection = ({ skills }: Props) => (
  <section id="skills">
    <div class="content skills">
      <SectionTitle title="My skills" href="#skills" />

      <h2>
        My vast <b>skill list</b>
      </h2>

      <span>
        Skills, toolbox and the technologies I like to work with and use to
        bring life to projects that I work on
      </span>

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
