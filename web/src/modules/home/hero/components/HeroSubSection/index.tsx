/* ---------- Components ---------- */
import { Link } from '_common/components/Link';

/* ---------- Styles ---------- */
import './styles.css';

/* ---------- Interfaces ---------- */
interface Props {
  title: string;
  content: string;
  link: { title: string; href: string };
}

export const HeroSubSection = ({ title, content, link }: Props) => (
  <div class="hero-sub-section">
    <b class="uppercase">{title}</b>

    <span>{content}</span>

    <Link href={link.href}>{link.title}</Link>
  </div>
);
