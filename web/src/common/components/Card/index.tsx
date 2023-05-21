/* ---------- External ---------- */
import Nullstack, { AnchorHTMLAttributes } from 'nullstack';

/* ---------- Common Components ---------- */
import { Link } from '_common/components/Link';

/* ---------- Styles ---------- */
import './styles.css';

/* ---------- Interfaces ---------- */
interface Props {
  title: string;
  description: string;
  url: string;
  image?: string;
  role?: HTMLDivElement['role'];
}

export class Card extends Nullstack<Props> {
  render({ description, title, url, image, role }: Props) {
    return (
      <a role={role} class="card" target="_blank" href={url}>
        <div class="background">
          {image ? (
            <img src={image} alt={title} height={150} width={150} />
          ) : null}
        </div>

        <div class="column">
          <h3>{title}</h3>

          <span>{description}</span>

          <Link active={false}>View Project</Link>
        </div>
      </a>
    );
  }
}
