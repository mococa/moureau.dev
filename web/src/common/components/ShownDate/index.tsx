/* ---------- External ---------- */
import { formatRelative } from 'date-fns';
import enGB from 'date-fns/locale/en-GB/index';

/* ---------- Styles ---------- */
import './styles.css';

/* ---------- Interfaces ---------- */
interface Props {
  date: Date;
  label: string;
  href?: string;
}

export const ShownDate = ({ date, href, label }: Props) => (
  <div class="cool-date">
    <b title={date.toLocaleString()}>
      {formatRelative(date, new Date(), {
        locale,
      })}
    </b>

    <span>/</span>

    {href ? (
      <a href={href}>
        <b>{label}</b>
      </a>
    ) : (
      <b>{label}</b>
    )}
  </div>
);

const format_relative_locale: { [key: string]: string } = {
  yesterday: "'Yesterday'", // Yesterday, 07:19 AM
  today: "'Today'", // Today, 12:09 PM
  other: 'dd/MM', // 12/02, 01:04 PM
  other_year: 'dd/MM/yyyy', // 12/02/2001, 3:15 PM
};

const locale = {
  ...enGB,
  formatRelative: (token: string, string_date: string) => {
    const date = new Date(string_date);

    if (date.getFullYear() !== new Date().getFullYear()) {
      return format_relative_locale.other_year;
    }

    const formatting = format_relative_locale[token];

    return formatting || format_relative_locale.other;
  },
};
