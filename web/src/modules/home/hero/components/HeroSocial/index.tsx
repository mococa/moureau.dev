/* ---------- Components ---------- */
import { SocialLinks } from '_common/components/Social';

/* ---------- Styles ---------- */
import './styles.css';

/* ---------- Interfaces ---------- */
interface Props {
  title: string;
}

export const HeroSocial = ({ title }: Props) => (
  <div class="hero-social">
    <b>{title}</b>

    <SocialLinks />
  </div>
);
