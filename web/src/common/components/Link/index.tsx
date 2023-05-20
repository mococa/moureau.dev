import { Booleanish, HTMLAttributeAnchorTarget } from 'nullstack';

/* ---------- Styles ---------- */
import './styles.css';

/* ---------- Interfaces ---------- */
interface Props {
  href?: string;
  children?: JSX.Element;
  active?: Booleanish;
  size?: 'small';
  target?: HTMLAttributeAnchorTarget;
}

export const Link = ({ children, href, active, size, target }: Props) =>
  href ? (
    <a
      href={href}
      class={`link uppercase ${size || ''}`}
      aria-selected={active}
      aria-roledescription="Link"
      aria-label="Link button"
      target={target}
    >
      {children}

      <span>→</span>
    </a>
  ) : (
    <button
      href={href}
      class={`link uppercase ${size || ''}`}
      aria-label="Link button"
      target={target}
    >
      {children}

      <span>→</span>
    </button>
  );
