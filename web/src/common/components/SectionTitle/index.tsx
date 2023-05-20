/* ---------- Styles ---------- */
import "./styles.css";

/* ---------- Interfaces ---------- */
interface Props {
  title: string;
  href: string;
}

export const SectionTitle = ({ title, href }: Props) => (
  <a class="section-title" href={href}>
    <span>/</span>

    <b>{title}</b>
  </a>
);
